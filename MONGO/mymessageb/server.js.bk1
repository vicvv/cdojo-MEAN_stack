//declering constants
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('express-flash');
const ObjectId = require('mongodb').ObjectId;

//setting app
const app = express();

app.set ('views', path.join(__dirname, './views'));
//app.set('view engine', 'ejs');
app.set('view engine', 'pug');

//app uses

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//db connection

mongoose.connect('mongodb://localhost:27017/messageb1', { useNewUrlParser: true } );
// Use native promises
mongoose.Promise = global.Promise;
//models

var Schema = mongoose.Schema;

var messageSchema = mongoose.Schema({
 title: { type: String, required: true },
 postedby: { type: String, required: true },
 body: { type: String, required: true }, 
 comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}], 
}, {timestamps: true });


var commentSchema = mongoose.Schema({
    _message: {type: Schema.Types.ObjectId, ref: 'Message'},
    user: {type:String, required: true},
    body:{type:String, required:true},

},{timestamp:true});

var Message = new mongoose.model("Message", messageSchema);
var Comment = new mongoose.model("Comment", commentSchema);


app.get('/', (req, res) => {

    Message.find({}).populate('comments').exec((err, messages) => {
        console.log(messages);
        res.render('index', {messages: messages});
  });
});

app.post('/messages',(req,res) =>{
    console.log("POST DATA", req.body);
    var message = new Message(req.body);
    //message.save();
    //res.redirect('/');
    message.save((err) =>{
        if (err){
            console.log(message.errors);
            res.render('index', {errors: message.errors});
        }
        else{
            res.redirect('/');
        }
        });
    });

    app.post('/messages/:id/comment', (req, res) => {
        console.log("POST Comment DATA", req.body);
        var comment = new Comment(req.body);
        var id = req.params.id;
        var o_id = new ObjectId(id);
        comment._message = o_id;
        comment.save(function(err){
    
        Message.findOneAndUpdate({_id: req.params.id},{ $push: { comments: comment } }, (err, message) =>{
            if(err) {console.log("Something wrong when updating data")}; 
            console.log(message);  
            res.redirect('/');
            });
        });
     });

app.listen(8000, function() {console.log("listening on port 8000");});



