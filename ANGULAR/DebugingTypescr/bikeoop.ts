
class Bike{
    price :number;
    max_speed: number;
    milege: number;
    constructor(price :number, max_speed: number){
        this.price = price;    
        this.max_speed = max_speed;
        this.milege = 0;
    }
    displayInfo(){
        console.log("The bike price is: ",this.price, "MaxSpeed: ", this.max_speed,
        "Total milage: ", this.milege)
    }

    ride(){
        this.milege += 10;
        return this
    }

    reverse(){
        if (this.milege > 0){
        this.milege -= 5;
        return this
        }
        else{
            return this
        }
    }
    
}

var mybike1 = new Bike(100,200);
var mybike2 = new Bike(10,20);
var mybike3 = new Bike(1000,2000);


mybike1.ride().ride().ride().reverse()
mybike1.displayInfo()


mybike2.ride().ride()
mybike2.displayInfo()

mybike3.reverse().reverse().reverse()
mybike3.displayInfo()