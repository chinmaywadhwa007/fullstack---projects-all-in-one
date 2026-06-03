// javacript constructor method in function today's topic

/* 
in js is a special function used to create and initialize objects properties and is typically invoked using the "new" keyword constroctors allows the creation of multiple instance with similer properties and method  

in js constructor can be defined in two main ways
function constroctor (before es6)
class constroctor ES 6 and beyond
*/
// this is normal function where we can use this without rhe class method
// the car function is an constructor
function hello(make, model, year) {
    // inside the function the this keyword refers to the new instance of the object created. it assign values to the make,model, and year properties
    this.make = make;
    this.model = model;
    this.year = year;
    // this getCarInfo method is also attaached to the new object ,which return a string with car's details
    this.getCarInfo = function () {
        return `${this.make},${this.model},${this.year}`
    }
}

let mycar = new hello("mercadies", "s class", "2020")
// console.log(mycar.getCarInfo());

class car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // method like getCarInfo can be defined directly inside the class
    getCarInfo(){
        return `${this.model},${this.make},${this.year}`
    }

}
let cards = new car ("royel enfield ","hunter","202200")
console.log(cards.getCarInfo());



class user{
    constructor(name,role){
        this.name = name;
        this.role = role;
        this.describe =function(){
            return `${this.name } is a ${this.role}`
        }
    }
}
const u1 = new user ("chinmay","admin")
const u2 = new user ("wadhwa","user")

console.log(u1,u2.describe())


function bike(favbike,model,year){
    this.favbike=favbike;
    this.model=model;
    this.year=year;


    this.getBikeInfo = function() {
        return `${favbike},${model},${year}`
    }
}

let bikes = new bike("java","42 bobber","2020")
// console.log(bikes.getBikeInfo());


// same problem with the prototype 
function SmartPhone(model,brand,launch){
    this.model = model;
    this.brand = brand;
    this.launch = launch;
    
    }
    SmartPhone.prototype.info=function(){
        return `${this.model},${this.brand},${this.launch}`
}

let launch_date = new SmartPhone("s26ultra","samsung","2026")

console.log(launch_date.info());
