const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Coment Model
let Comment = require('../models/comment');
// User Model
let User = require('../models/user');

// ArticleModel
let Article = require('../models/article');

// Add Route
router.get('/addc', ensureAuthenticated, function(req, res){
  res.render('add_coment', {
    title:'Add Coment'
  });
});

// Add Submit POST Route
router.post('/addc', [
  check('body').not().isEmpty().withMessage('Message body should not be empty')
],
function(req, res){
 
  // Get Errors
  const errors = validationResult(req);
  console.log("Req Body",req.body);
  
  console.log("Req user_id", req.user._id);
  //console.log("Req article_id", req.article._id;

  if (!errors.isEmpty()) {
    res.render('article', {
      title:'Add Comment',
      errors:errors
    });
  
  } else {
    let comment = new Comment();
    comment.article = req.article._id;
    comment.author = req.user._id;
    comment.body = req.body.body;


    comment.save(function(err){
      if(err){
        console.log(err);
        return;
      } else {
        req.flash('success','Comment Added');
        res.redirect('/');
      }
    });
  }
});

// Load Edit Form
router.get('/edit/:id', ensureAuthenticated, function(req, res){
  Coment.findById(req.params.id, function(err, coment){
    if(coment.author != req.user._id){
      req.flash('danger', 'Not Authorized');
      res.redirect('/');
    }
    res.render('edit_coment', {
      title:'Edit Coment',
      coment:coment
    });
  });
});

// Update Submit POST Route
router.post('/edit/:id', function(req, res){
  let coment = {};
  coment.title = req.body.title;
  coment.author = req.body.author;
  coment.article = req.article._id;
  coment.body = req.body.body;

  let query = {_id:req.params.id}

  Coment.update(query, coment, function(err){
    if(err){
      console.log(err);
      return;
    } else {
      req.flash('success', 'Coment Updated');
      res.redirect('/');
    }
  });
});

// Delete Coment
router.delete('/:id', function(req, res){
  if(!req.user._id){
    res.status(500).send();
  }

  let query = {_id:req.params.id}

  Coment.findById(req.params.id, function(err, coment){
    if(coment.author != req.user._id){
      res.status(500).send();
    } else {
      Coment.remove(query, function(err){
        if(err){
          console.log(err);
        }
        res.send('Success');
      });
    }
  });
});

// Get Single Coment
router.get('/:id', function(req, res){
  Coment.findById(req.params.id, function(err, coment){
    User.findById(coment.author, function(err, user){
      Article.findById(req.params.id, function(err, article){
      res.render('coment', {
        coment:coment,
        author: user.name,
        article:article.title
      });
    });
  });
});
});

// Access Control
function ensureAuthenticated(req, res, next){
  if(req.isAuthenticated()){
    return next();
  } else {
    req.flash('danger', 'Please login');
    res.redirect('/users/login');
  }
}

module.exports = router;
