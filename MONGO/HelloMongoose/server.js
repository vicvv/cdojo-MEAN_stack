const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({extended: true}));
//message.channel.send(userInfo(userInfMent, message));

const server = app.listen(8000);

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myuserdb', { useNewUrlParser: true } );

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const User = mongoose.model('User', UserSchema);

app.post('/users', (req, res) => {
    const user = new User();
    user.name = req.body.name;
    user.age = req.body.age;
    user.save()
      .then(newUserData => console.log('user created: ', newUserData))
      .catch(err => console.log(err));
     
    res.redirect('/');
  
});

app.get('/', (req, res) => {  
    User.find()
        .then(data => res.render("index", {users: data}))
        .catch(err => res.json(err));
});


// const flash = require('express-flash');
// app.use(flash());
// app.post('/users', (req, res) => {
//     const user = new User(req.body);
//     user.save()
//         .then(() => res.redirect('/'))
//         .catch(err => {
//             console.log("We have an error!", err);
//             // adjust the code below as needed to create a flash message with the tag and content you would like
//             for (var key in err.errors) {
//                 req.flash('registration', err.errors[key].message);
//             }
//             res.redirect('/');
//         });
// });