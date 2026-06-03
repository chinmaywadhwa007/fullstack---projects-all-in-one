/* a function is an resuable block of code that performs specific tasks instead of writing the same code again and again we putit into the functions to reduce the extra spaces */
// this is the bbasic syntax of the function how it work
function greet() {
    console.log("hello chinmay wadhwa ");

}
greet()
// this is the function using the parameters
function greet(name) {
    console.log("hello " + name);

}
greet("chinmay ")

// with the multiple paras
function add(a, b) {
    console.log(a + b);
}
add(45, 45)

// with the return keywoord use case
function multiply(b, a) {
    return b * a
}
let result = multiply(45, 5)

console.log(result);

// arrow function and how it works 

// its an morden way to write the funnction without any para needs 

const hi = () => {
    console.log("hello world from arrow functions");

}
hi()

// if u want to use the arrow function with the params used this 

const plus = (A, B) => A + B

console.log(plus(82, 45));
// this is the question where we have to  greet someone with the function
function hello_u (){
    console.log("welcome");
    
}
hello_u()

// this is the question to create the function that can substract two variable at a time 
function substract(U,I){
    return U-I
}
console.log(substract(45,5));


// question 3 Create arrow function that multiplies two numbers.

const cross = (E,F)=> E*F
console.log(cross(4,5));
