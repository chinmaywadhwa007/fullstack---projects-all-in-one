// lets dicuss 1st for the number 

// this is "primative" data type output 
let balance = 120;
// this is "non-primative" data type out put called "object"
let helloBalance = new Number(3300);
//this is how valueof is important for...!
// 👉 valueOf() is mostly useful when:

// You are dealing with object wrappers
// Or custom objects

// console.log(helloBalance.valueOf());

// console.log(typeof balance);
// console.log(balance);

console.log(typeof balance); // this will give a "number" 
console.log(typeof helloBalance);// this will give an "object" 

// this is second "primative datatype"
// let's see what is the boolean datatype 
let Isactive = true
let Isreallyactive = new Boolean(true) // not recommended way...!
console.log(Isactive);
console.log(Isreallyactive);

// this is 3rd and 4th "datatype"
// "null" and "undifined" 

// example says 
let helloworld;
// it will say "undifined "
console.log(helloworld);// it may comes in the future value 
// if we have to go for the "null" we'll go for like this 
let firstname = null // but this will not come any the future 
console.log(firstname);

// this is 5th datatype called "string"

// now lets see the  "strings" in primative datatype
let mystring = "hello"

let mystring1st = 'how_are_u';

let Myname = "chinmay_wadhwa"
//this will give u space between the  strings and this will combine to strings at once space
// let oldgreet = mystring1st + ' chinmay_wadhwa'
// this is another method to create strings space between the two keywords 
// this is older template 

let oldgreet = mystring1st + " " + "chinmay_wadhwa"
console.log(oldgreet);

// this is mordern template 

let greatmsg = `hello  ${mystring}` // this is called 👉 This is called a template literal with interpolation

// it can make the multiple variable in a single line without breaking line

console.log(greatmsg);


// we can solve the values in the "template literal"
let amaze = ` value of the term will be  ${10 + 5}`
console.log(amaze);



// this is 6th datatype called symbol

// now lets talk about the term "symbol" 
/*
👉 "Symbol" is a primitive data type (like string, number, boolean)

👉 It is used to create "unique value"
*/
let sum1 = Symbol()
let sum2 = Symbol()
console.log(sum1==sum2);

//  another example
let  userId = Symbol('id') //👉  created a unique key, not a normal string
let user ={
    name:"chinmay wadhwa",
    [userId]:12345//its an hidden key that i have createdd by above userid 
}
// it will give particular id to solve the content or to print the conetent
console.log(user[userId]); // it will give  u the particular id 
