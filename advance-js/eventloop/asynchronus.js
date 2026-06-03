/* problem without asynchronus behavior  imagine this code 

*/

console.log("start");

for(let i = 0; i < 1000000; i++){

}

console.log("end");


// lets start with the asynchronus behvior 
//settimeout method
console.log("start");
setTimeout(() => {
    console.log("task completed ");
    
}, 2000);

console.log("end");
//why this method works because the setimeout method is an asynchronus behavior 
/* 
"JavaScript" did NOT wait 2 seconds.

Instead:

"Start" printed
setTimeout() registered
JS moved ahead
"End" printed
After 2 seconds → callback executed
*/
console.log("fetching  data...");
fetch("https://jsonplaceholder.typicode.com/users")
.then((Response)=> Response.json())
.then((data)=>{
    console.log(data);
    
})
console.log("other work continues...");
/* 
Why "Async" Here?

Internet requests take time.

If JS waited:
webpage would freeze
buttons wouldn't work
scrolling would stop

Async prevents this.
*/



