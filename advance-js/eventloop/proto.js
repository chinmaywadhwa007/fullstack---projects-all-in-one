/*  code is using a "constructor function" and "prototype" method in "JavaScript".
This is one of the "older" but very important ways to create "objects" before ES6 */


/*
"person" is a constructor function

“whenever a new object is created, store the passed value inside that object” 
 */

function Person(name){
    this.name=name //this.name = name means:
}
// this is the prototype chain 
Person.prototype.greet = function(){
    console.log(`hello from the world of js ${this.name}`);
    
}

let chinmay = new Person("chinmay")
chinmay.greet()

/*  whatt does new keyword works here 
    it does 4 things here 
    1) create new object "empty"
    2) links the object to prototype
    3) sets "this" keyword to the "new object"
    4) returns the  obj "automatically"  
*/


// lets take an example with the class 
// this is the older way 
function Persons(){
    this.surname =surname
}
Person.prototype.greets=function(){
    console.log(`hello world ${this.surname}`);
    
}

// this is the new way 
class User{
    constructor(User){
        this.User=User
    }
    namste(){
        console.log(`namaste user ${this.User}`);
    }
}

const User01= new User("chinmay wadhwa ")
User01.namste()
