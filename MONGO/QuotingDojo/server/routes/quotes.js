const express = require('express');
const controller = require('../controllers/mainController.js');

module.exports = function (app){

app.get('/', (req, res) => {  
    return controller.index(req,res);     
});
 
 
app.post('/add', (req, res) => {
    return controller.add(req,res); 
});
 
app.get('/result', (req, res) => {  
    return controller.result(req,res);
});

};