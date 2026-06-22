// lets cover some other topics before starting react and dsa 

// exicution context 
// this is the global exicution contexxt it is the type of the exicution contaxt 
let name = "chinmay wadhwa "
function greet() {
    console.log("hello ", name);

}
greet()
// 2nd one function scope exicution context 
//created every time a function is called 
//"When greets() is invoked, JavaScript creates a Function Execution Context, executes the statements inside the function, prints the message, and then removes the Function Execution Context after execution completes
function greets() {
    console.log("hi welcome to coding world ");

}
greets()


// there are two phase of the exicution context 
// phase 1 memmory creation phase (hoisting phase )

console.log(a);
var a = 10
function hello() {
    console.log("hello");

}
hello()

// call  stack when there are the multply function in the parent function

function one() {
    two()
}
function two() {
    three()
}
function three() {
    console.log("hello chinmay u have a interview tomm");

}

one()

// use of the this keyword 

const obj = {
    name: "chinmay wadhwa ",
    say_hello() {
        console.log(this.name);

    }
}
obj.say_hello()


// arrow and normal function and why we use them 

function add(Q, W) {
    return Q + W
}
add()

// arrow function 
const user = {
    name: "hello world how are u ",
    great() {
        setTimeout(() => {
            console.log((this.name));

        }, 1000);
    }
}
user.great()

// constructor 
class hello1 {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}
const hello11 = new hello1("chinamay", 23)
console.log(hello11);

// what is the higher order function and how it works and what are  the types of hte higher order function 
// "A Higher-Order Function is a function that takes another function as an argument or returns a function. JavaScript treats functions as first-class citizens, allowing them to be passed around like values. Common examples of Higher-Order Functions are map, filter, reduce, and forEach.
// "
// function as an arguments 
function hhiii(name) {
    console.log("hello", name);

}
function processUser(callback) {
    callback("chinmay12345679")
}
processUser(hhiii)

// function as an return function 

function multiply(num) {
    return function (value) {
        return value * num
    };
}
const double = multiply(3)
console.log(double(5))
