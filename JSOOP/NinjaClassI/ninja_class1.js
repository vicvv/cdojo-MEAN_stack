// Assignment: Ninja Class
// Create a new object constructor called Ninja with the following attributes:

// name
// health
// speed (private)
// strength (private)
// Speed and strength should be 3 by default. Health should be 100 by default.

// Ninja should have the following methods:

// sayName() - This should log that Ninja's name to the console.
// showStats() - This should show the Ninja's name, strength, speed, and health.
// drinkSake() - This should add +10 Health to the Ninja
// Example Outputs
// var ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// // -> "My ninja name is Hyabusa!"
// ninja1.showStats();
// // -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"

function NinjaClassI(name, health){
    var self = this;
    var speed = 3;
    var strength = 3;
    this.name = name;
    this.health = health = 100;
    this.sayName=function(){
        console.log("My ninja name is ", this.name);
    };
    this.showStats = function(){
        console.log("Name: ", this.name, ", Health: ", this.health, ", Speed: ", speed, ", Strength: ", strength);
    };
    this.drinkSake = function(){
        this.health+=10;
    };
    console.log(self);
}
var ninja1 = new NinjaClassI("Hyabusa");
ninja1.showStats();
ninja1.drinkSake();
ninja1.sayName();
ninja1.showStats();


