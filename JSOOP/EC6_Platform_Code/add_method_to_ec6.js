// Class Methods vs Instance Methods
// In ES6, class methods are called 'static methods' while instance 
// methods are called 'prototype methods'. We've already seen prototype 
// methods, now let's look at a static method. Let's say we want to add 
// a new function to the class Dot, not an instance of a Dot:


class Dot{
    constructor(x,y){
        this.x = x;
        this.y =y;

    }
    ShowLocation(){
        console.log(`The location is ${this.x}, ${this.y}`);
    }
    static getHelp(){
        console.log("I am a static method hahhaha");
    }

   
}

const d1 = new Dot(1,2);
console.log(d1.ShowLocation());
Dot.getHelp();