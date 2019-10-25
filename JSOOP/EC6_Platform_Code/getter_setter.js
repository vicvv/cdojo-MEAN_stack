// A common way to read and update attributes within our objects is to use 
// Getters and Setters. While we can recreate this technique in many situations, 
// JavaScript supports Getters and Setters syntactically.
// Again, these serve to make our JS easier and quicker to read and write. 

// Getters get a specific attribute. 
//Setters set the value of a specific attribute.


class Pizza{
    constructor(radius, slices){
        this.radius = radius;
        this._slices = slices;
    }
    // getter gets the specific attribute
    get slices(){
        return this._slices;
    }
    //
    set slices(slices){
        this._slices = slices;
    }
};

//custom getters
class Circle{
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    get diameter() {
        return this.radius * 2;
    }
}
const circle1 = new Circle(1, 2, 5);
console.log("Diameter", circle1.diameter);


// In this example, we named the _slices attribute with an underscore as 
// the first character. 
// This way, the desired variable slices can be used in this way:

const pie = new Pizza (12 ,6);
console.log(pie.slices);
pie.slices = 12;
console.log(pie.slices);
