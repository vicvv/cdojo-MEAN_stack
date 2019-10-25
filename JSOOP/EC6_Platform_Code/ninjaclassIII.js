// Assignment: Ninja Class III
// Part I
// Recreate the base Ninja class from scratch using ES6 classes. 
//Your Ninja needs the following public attributes (do not worry about 
//private variables for this assignment):

// name
// health
// speed
// strength
// Speed and strength should be 3 by default. Health should be 100 by default.
// The Ninja class should have the following methods:
// sayName() - This should log that Ninja's name to the console.
// showStats() - This should show the Ninja's name, strength, speed, and health.
// drinkSake() - This should add +10 health to the Ninja


// Part II - Sensei Class
// Extend the Ninja class and create the Sensei class. 
//A Sensei should have 200 Health, 10 speed, and 10 strength by default. 
//In addition, a Sensei should have a new attribute called wisdom, and the default 
//should be 10. Finally, add the speakWisdom() method. speakWisdom() should call 
//the drinkSake() method from the Ninja class, before console.logging a wise message.

// // example output
// const superSensei = new Sensei("Master Splinter");
// superSensei.speakWisdom();
// // -> "What one programmer can do in one month, two programmers can do in two months."
// superSensei.showStats();
// // -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"

class Ninja{
    constructor (name, health=100, speed=3, strength=3 ){
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
    
    };

    sayName() {
        console.log(`This ninja name is ${this.name}`);        
    };

    showStats(){
        console.log(`${this.name} has the following stats: ${this.health}, ${this.speed}, ${this.strength}`);
        return `${this.health}, ${this.speed}, ${this.strength}`;
    };

    drinkSake(){
        this.health += 10;
        console.log(`After drinking Sake ${this.name} has the following stats ${this.showStats()}`);
    }

};

class Sensei extends Ninja{
    constructor(a,b,c,d, wisdom = 10){
        super(a,b=200,c=10, d=10,wisdom);
        this.wisdom = wisdom;
    }
    speakWisdom() {
        this.drinkSake();
        console.log("hi wisdom!");
    }
}


const n1 = new Ninja("vicky");

n1.sayName();
n1.showStats();
n1.drinkSake();

// const n2 = new Sensei("laura");
// n2.speakWisdom();