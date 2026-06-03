// lets talk about the promises its an object that represents a future success or failure of asynchronus operations 
// this is before the promises 
setTimeout(() => {
    console.log("task done ");

}, 2000);
// this code will works fine when it comes to small tasks but when it comes for begger callbacks it crashes due to multiply lines of code is called callback hells 
//this is the "callback hell"
/* 
loginUser(() => {
    getProfile(() => {
        getPosts(() => {
            getComments(() => {

            });
        });
    });
});
 */

/* 
    This becomes:

👉 Callback Hell

Problems:1.messy code
2.hard debugging
3.difficult error handling
4.deeply nested code

so javascript introduce the successor of the callback function called the promises 
*/

// syntax of the promises 


//means promise construtor takes a callback with the "resolve" and "reject"
const promise = new Promise((resolve, reject) => {

    const success = true;

    if (success) {
        resolve("Task completed");
    } else {
        reject("Task failed");
    }

});

console.log(promise);

const hello = new Promise((resolve, reject) => {

    const pass = true;
    if (pass) {
        resolve("data fetched....")
    } else {
        reject("something went wrong ")
    }
})

console.log(hello);

/* handling promise result 
    .then()
    runs when promise succeeds
    .catch()
    runs when promise fails 
*/

const hi = new Promise((resolve, reject) => {
    resolve("task completed ")
})
hi
    .then((result) => {
        console.log(result);


    }).catch((err) => {
        console.log(err);

    });

/* 
resolve() → .then()
reject()  → .catch() 
*/

// lets try with the login page how it works 

const login = new Promise((resolve, reject) => {
    const goHead = false;
    if (goHead) {
        resolve("login successfull")
    } else {
        reject("invalid passcode u have entered...!")
    }

})
login
    .then((data) => {
        console.log("success", data);

    })
    .catch((error) => {
        console.log("ERROR", error);

    })

function fetchdata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const passed = true;
            if (passed) {
                resolve("data fetched pass")
            } else {
                reject("rejected data error coming danger !!")
            }
        }, 5000);
    })
}

fetchdata()
    .then((data) => {
        console.log(data);
        

    })
    .catch((reject) => console.error(reject))

