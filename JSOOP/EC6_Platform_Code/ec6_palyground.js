class Dot {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    ShowLocation(){
        console.log(`This dot is at ${this.x} and ${this.y}`);
    }
}

const dot2 = new Dot(5,1);
dot2.ShowLocation();