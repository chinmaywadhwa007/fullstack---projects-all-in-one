/*  so we have seen that js handle the asynchronus task easily in node enviroment but how it is possible we know that js is an line by line exicuation lang so it directly can't handle timers api calls clicks file handling so how they work in the js 
    the ans is "eventloop" by the help  of we will see how js can handle all the task by itsself using the eventloop 

*/

/*  
    eventloop is an mechanism that 
        watches the call stack
        checks pending async task 
        pushes completed task back to exicuted 

*/

/*  let's understand the core of the js to understand the eventloop behavior in js 
*/

//callback function  this is where js exicutie the code

function one() {
    console.log(one);

}
function two() {
    console.log(two);

}
one()
two() //here js exicutes it one by one top to bottom

// 2nd web "apis"
/* these are provided by the web browser and the node runtime  */
// example for this setTimeOut, DOM event, fetching, geolocation

setTimeout(() => {
    console.log("hello from the api calls ");

}, 2000) // means js doesn't wait for the 2 sec delay instead it callbacks goes to web api,timers start, js continues exicuting next lines 

// 3 stack queue (task queue)

/* 
    when "async" works finshed 
    "callbacks" goes into "queue" 
    example--> "setTimeOut" finished callbacks enter's queue
*/


//4 now the eventloop part comes it checks the queue all the time is call stack empty o r not
//is yes take callback from the queue ,push into call stack then js exicutes it

console.log("Starts");

setTimeout(() => {
    console.log("time done");

}, 3000);
console.log("end"); // timer starts seperatly js does'nt wait to exiccutes due to its delayness

