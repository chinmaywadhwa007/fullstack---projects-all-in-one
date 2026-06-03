// "objects" and "arrays" are the "non-primative" datatype

// An "object"is a dynamic data structure that "stores" related data as "key-value" pairs, where each key uniquely identifies its value.

// Objects allow data "grouping" and "encapsulation", making it easier to manage related information and behaviour together

//there are the two ways of creating obj in js

/*
1st is creations using object litral
2nd is creation using new obj( construtor)
*/

// important note when to use ":colon" when we have to create an obj or in inside the obj
// important 2nd note when to use  "=assign oprator"outside {} (assignment/update)


//example 1 it prints line by line
let obj = {
    name: "chinmay",
    age: 23,
    job: "Developer",
    email: "chinmaywadhwa01@gmail.com"
};
// console.log(obj);

// examplee 2nd 

let hello = new Object();
hello.name = "wadhwa_chinmay",
    hello.age = "24",
    hello.role = "devloper"

// console.log(hello);


let hi = {}; // this is an obj to but its empty
// console.log(hi);
// console.log(typeof hi);

const userName = {
    name: "any name",
    age: "any age",
    work: "telecaller"
}
userName.lastname = "wadhwa"

// console.log(userName);

// console.log(userName.lastname);

// console.log(typeof userName);

// what if i have to add space between names lets see example
// in this case we can do that use the "" this sign to avoid the eroor in the terminal

let Yourname = {
    "hello world": "how are u"

}
// after the hello world this line will add in the obj by spacing between them
Yourname.sabthikhai = "hai sub thik hai"

// this is how we'll find a date 
let today = new Date()
// console.log(today.getTimezoneOffset());

// next datatype will be "array"

// In JavaScript, an array is an ordered list of values. Each value, known as an element, is assigned a numeric position in the array called its index. The indexing starts at 0, so the first element is at position 0, the second at position 1, and so on.

// example of array
let arr = [] // its an "empty" array 
// console.log(arr);


let arr2 = [12, 20, 30] // its an normal "array" using "litral"

// console.log(arr2[1]);

let arr3 = new Array(10, 20, 40) // this is an "array" for the "instructor" 

// console.log(arr3);


