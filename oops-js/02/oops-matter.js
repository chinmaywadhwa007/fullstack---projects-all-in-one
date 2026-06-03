// this is called the object litral 
/* 
    key learnings from here   
        you directly created the single object 
        it has properties like make,model,year
        method start()
*/

let car = {
    make: "toyota",
    model: "fortuner",
    year: "2025",
    start: function () {
        //important concept this this refers to the current objects car
        return `${this.make} car ${this.model} got started in ${this.year}`
    }
}

// console.log(car.start());



/* this is an constructor function 
in this we can create the multiple objects with the same structure  */

function person(name, age, role, company) {
    this.name = name
    this.age = age
    this.role = role
    this.company = company
}
/* here is the use case of the new keyword
        very important 
        When you use new:
        (1)Creates an empty object { }
        (2)Sets this to that object
        (3)Assigns values 
        (4)Returns the object

*/

let chinmay = new person("chinmay wadhwa", "24", "softwere devloper", "au small finance bank")
let virat = new person("virat kohli", "38", "sipl player", "rcb")
// console.log(chinmay);
// console.log(virat);

// lets see the prototype chaining 
/* 
        you are adding a  method to all objects created using animal
        this method is shared,not copied 
*/
function animal(dog) {
    this.type = dog

}

animal.prototype.speak = function () {
    return `${this.dog} makes an sound`
}
// here we added a custom method to all arrays in js 

Array.prototype.chinmay = function () {
    return `custom method ${this}`
}

let MyArray = [1, 2, 3, 4, 5]
// console.log(MyArray.chinmay());

/*  now lets see how class works  */

class Vehicle {
    constructor(make,model){
        this.make = make
        this.model = model;
    }

    start(){
        return `${this.make } is car from ${this.model}`
    }

}
// if we have to add diff function we use the word extends is called inheritance
class Car extends Vehicle{
    drive(){
        return `${this.make}:this is an inheritance example`
    }
}

let mycar = new Car("skoda"," 2025")
console.log(mycar.start());
console.log(mycar.drive());

let veone= new Vehicle("polo", "wokswagon")
console.log(veone.make);
console.log(veone.model);


// another topic to study encapsulation
/* 
    encapsulation hiding data + controlling access to it
    👉 You restrict direct access to properties
    👉 And allow access through methods
*/

class   bankAccount {
    constructor(balance){
        this.balance = balance;
    }

}

let acc  = new bankAccount(5000)
acc.balance=-1000
console.log(acc.balance);



class user{
        #passward;
        constructor(passward){
                this.passward =passward
        }
        setPassward(newPassward){
            if(newPassward.length>=9){
                this.passward = newPassward
            }
            else{
                console.log("passward is not matching the condition");
                
            }
        }
        getpassward() {
            return "*****"
        }
}
console.log(user.getpassward());












