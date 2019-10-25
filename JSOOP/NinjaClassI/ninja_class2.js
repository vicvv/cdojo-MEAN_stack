// Assignment: Ninja Class II
// Complete the below challenges using Ninja from the previous assignment.

// .punch()
// Add a new method to Ninja called .punch(). This method will take 
// another Ninja instance and subtract 5 Health from the Ninja we passed in. 
// Your .punch() should display a console message like the below example.

// var blueNinja = new Ninja("Goemon");
// var redNinja = new Ninja("Bill Gates");
// redNinja.punch(blueNinja);
// // -> "Goemon was punched by Bill Gates and lost 5 Health!"


// .kick()
// Now add a method to your Ninja class called .kick(). Kick will subtract 
// 15 Health for each point of Strength the calling Ninja has, and  .punch() 
// will take another Ninja instance.

// blueNinja.kick(redNinja);
// // -> "Bill Gates was kicked by Goemon and lost 15 Health!"
// // In this case, redNinja Bill Gates lost 15 health because blueNinja 
//Goemon has 1 point of strength
// Validations
// Update .punch() and .kick() so that they only accept Instances of Ninja. 
// Hint: You will need to find a way to check the constructor of an instance. 
// You will often need to consult outside documentation to find solutions for particular features.

function NinjaClassII(name, health){
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

    this.punch = function(object){

        if (object instanceof NinjaClassII){
            object.health -= 5;
            console.log(this.name , "punched", object.name);
            console.log(object.name , "lost 5 health to total ", object.health);
        }
        else{
            console.log("You need to path an instance of", self);
        }
    };

    this.kick = function(object){
        if (object instanceof NinjaClassII){
            var losthealth = 15*strength;
            object.health -= losthealth;
            console.log(this.name , "kicked", object.name);
            console.log(object.name , "lost", losthealth ,"health to total ", object.health);
        }
        else{
            console.log("You need to path an instance of", self);
        }
        
    };
    console.log(self);
}
var blueNinja = new NinjaClassII("Goemon");
var redNinja = new NinjaClassII("Bill Gates");

redNinja.punch(blueNinja);
blueNinja.kick(redNinja);

//blueNinja.kick(v);


