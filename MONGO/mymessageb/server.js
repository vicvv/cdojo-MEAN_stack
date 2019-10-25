const express = require('express');
const  app = express();
const  bodyParser = require('body-parser');
const  path = require('path');
const  mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/messageb1', { useNewUrlParser: true } );
// Use promises
mongoose.Promise = global.Promise;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './public')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
//app.set('view engine', 'pug');



var postSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2 }, 
    message: { type: String, required: true }, 
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
    }, { timestamps: true });

var commentSchema = new mongoose.Schema({
    _post: {type: mongoose.Schema.Types.ObjectId, ref: 'Post'},
    name: {type: String, required: true, minlength: 2 },
    message: { type: String, required: true },
    }, {timestamps: true });


var Post = new mongoose.model("Post", postSchema);
var Comment = new mongoose.model("Comment", commentSchema);

app.get('/', (req, res) =>{
    Post.find({}).populate('comments').exec((err, posts)=>{res.render('index', {messages:posts})});   
});

app.post('/post', function(req, res) {
  //console.log("Form data", req.body);
  var post = new Post({name: req.body.name, message: req.body.message});
  post.save((err) =>{
    if(err) {console.log('Check errors');console.log(post.errors);res.redirect('/'); } 
    else {console.log('Added Message!');res.redirect('/');
    }
  });
});
 

app.post('/comment/:id',  (req, res)=>{
    Post.findOne({_id: req.params.id}, (err, post) => {
        //console.log(req.body.comment_name);
        //console.log(req.body.comment_message);
        var comment = new Comment({name: req.body.comment_name,message: req.body.comment_message, _post: post._id});
        console.log(comment);
        comment.save((err) =>{
            post.comments.push(comment);
            post.save((err) =>{
                if(err) {console.log('Check errors');console.log(comment.errors);res.redirect('/');} 
                else {console.log('Added Comment!');res.redirect('/'); }
            });
        });
    });
});


 
app.listen(8000, function() {console.log("listening on port 8000");});