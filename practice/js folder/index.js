// this is called the clouser 
// Outer function
function outer() {

    // Variable in the outer function's scope
    let count = 0;

    // Inner function
    function inner() {

        // Accessing and modifying the outer function's variable
        count++;

        console.log(count);
    }

    // Returning the inner function
    return inner;
}

// Closure is created here
const counter = outer();

// Even though outer() has finished executing,
// inner() still remembers the count variable
counter(); // 1
counter(); // 2
counter(); // 3


// next topic 
console.log(a);
var a = 10
// with let and const 

//console.log(b); // it will goes to dead time zone 
let b = 10

// this is called the  event Loop 
console.log("start");
setTimeout(() => {
    console.log("say hello world from the event loop ");

}, 2000);

console.log("end");

// next topic promises 
//before promises we see the callback hell where user get call a function multiple time it gets space more in the page 

// getUser(function(user){
//     getOrders(user,function(order){
//         getPayment(order,function(payment){
//             console.log(payment);
//         });
//     });
// });
// this creates callback hell

// but with the promises is easy to solve the problem 

const promises = new Promise((resolve, reject) => {
    let success = true
    if (success) {
        resolve("data found ")
    }
    else {
        reject("data didn't found ")
    }
})
// why we use then anad catch to showcase the o/p  
//"A "Promise" represents a "future value". resolve() and reject() change the Promise's state, while .then() and .catch() are used to consume the fulfilled or rejected result. Without them, the P"romise may complete, but the application won't handle its outcome"."
// this is promise method
promises
    .then(result => {
        console.log(result);

    })
    .catch(error => {
        console.log(error);

    })

// this is async await method 
function fetchUser() {
    return new Promise((resolve, reject) => {
        resolve("chinmay")
    })
}

async function getUser() {
    try {
        const user = await fetchUser()
        console.log(user);

    } catch (error) {
        console.log(err);

    }
}

getUser()

// this will work without promieses 
async function demo() {
    const value = await 10;
    console.log(value);

}
demo()


// lets understand the throttle and debounce together 

//implimentation...
function debounce(func, data) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(...args)
        }, data)
    }
}

function search(value) {
    console.log("searching:", value);


}
const debounceSearch = debounce(search, 1000)
debounceSearch("js")
debounceSearch("reactjs")
// why these two cancel due to debouncing it cancel past calls 
debounceSearch("reactjs devloper ")


// lets talk about the throttle
// ensuring a function at most once during a apcified time interval
// exicute immediately then ignore repeated calls for a fixed duration 

function throttle(func, delay) {
    let lastTime = 0;

    return function (...args) {
        const now = Date.now();

        if (now - lastTime >= delay) {
            func(...args);
            lastTime = now;
        }
    };
}

function scrollHandling() {
    console.log("Scrolling...");
}

const throttleScroll = throttle(scrollHandling, 1000);

setInterval(() => {
    throttleScroll();
}, 100)