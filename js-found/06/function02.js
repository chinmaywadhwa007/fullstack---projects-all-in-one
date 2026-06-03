// callback function 

function greet(name, callback) {
    // console.log("hello, " + name);
    callback();

}

function surname() {
    // console.log("wadhwa!!");

}

// greet("chinmay ", surname)

// this is normal callback 
// now we will study with the callback fn with asynchronus exicution
// we have learn new thing how setTimeout works when we have to make the delay in exicutiion 
// setTimeout does not delay the whole program 
// It only schedules a function to run later
// console.log("start");
setTimeout(function () {
    // console.log("inside setTimeout");

}, 2000);

// console.log("end");
// with thie method we can use the feature of js called eventloop 

// 1st 👉 Runs immediately (synchronous execution) 

// console.log("hello");
setTimeout((name) => { // schedules the function 
    // console.log(`${name}`); // exicution result
    // 👉 Delay time in milliseconds (1 second)

}, 1000, "chinmay") // final output have to print 

/* 
 why we use settimeout function "We use setTimeout in projects to schedule delayed execution of code, commonly for UI interactions, debouncing, retry mechanisms, and simulating asynchronous operations without blocking the main thread."
*/

console.log("welcome to the backend world ");

setTimeout((backend) => {
    console.log(`${backend}`);

}, 2000, "1st topic is event-loop")



function a() {
    console.log("a");

}
function b() {
    a()
    console.log("b");

}
b()
