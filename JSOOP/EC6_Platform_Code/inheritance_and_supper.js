
// If you look closely, you will notice the super() function. Super is a special 
// function that allows us to call the constructor of the parent class. Just like 
// how Dot needs an x and y value, the super() 
// of our Circle class requires that exact same thing.


class Dot{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    //showLocation() is actually specific for the Dot class. 
    //It even names the Dot class in the string! 
    // ShowLocation(){
    //     console.log(`The location of x and y are ${this.x}, ${this.y} respectively`);
    // }
    ShowLocation() {
        console.log(`This ${ this.constructor.name } is at x ${this.x} and y ${this.y}`);
    }

    //Another important property of super is we can call Parent methods with it. 
   //Consider this example:

   parentFunction(){
    console.log("printing this from parent!");
    }
}

class Circle extends Dot{
    constructor(x,y,radius){
        super(x,y,radius);
        this.radius = radius;
    }

    childFunction(){
        const message = super.parentFunction();
        console.log(message);
    }
}

const c1 = new Circle(33,33,33);
console.log(c1);
c1.ShowLocation();
c1.childFunction();