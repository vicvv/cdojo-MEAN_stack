// Pokemon API
// Objectives:
// Practice using an Angular service to make http requests to an API
// Using the Pokemon API found here https://pokeapi.co/, create a mini Angular application that prints your favorite Pokemon's information to the console. You may write the code in the service of your project and invoke any functions you want to run immediately in the constructor method. Below is some code just to get you started!
// Next, parse through the data to generate a string that contains the most interesting data about your Pokemon. For example, "Bulbasaur's abilities are chlorophyll and overgrow."
// Finally, use the data to make another API request to print how many Pokemon share your Pokemon's abilities. For example, "23 Pokemon have the overgrow ability."

//Imports
const express = require("express");
      app = express();
      path = require('path');

//Config
app.use(express.static(path.join( __dirname + '/angular/dist/angular')));

//Port
    app.listen(1337, function(){
        console.log("Listening on port: 1337");
    }
);
