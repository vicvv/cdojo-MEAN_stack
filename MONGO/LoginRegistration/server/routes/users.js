const express = require('express');
const controller = require('../controllers/mainController.js');

module.exports = function (app){

// home route
app.get('/', (req, res) => {
    // res.render('index');
    return controller.index(req, res);
  });

// Register Form
app.get('/users/register/', (req, res) =>{
    res.render('register');
});
app.post('/users/register/', (req, res) =>{
    console.log(req.body);
    return controller.register(req, res);
});

// Login Form
app.get('/users/login', (req, res) =>{
    // console.log("I am in login");
    res.render('login');
  });

app.post('/users/login', (req, res) =>{
    console.log(req.body);
    return controller.login(req, res);
});

app.post('/users/logout', (req, res) =>{
    console.log(req.body);
    return controller.logout(req, res);
});


};