/* fetchdata()
    .then((data)=>{
        console.log(data);
        return processdata(data)
        
    })
    .then((result)=>{
        console.log(result);
        
    })
    .catch((err)=>{
        console.log(err);
        
    })  this will work but in higher user code gets ,messy 
      thats why we use the async keyword to async eveerything together */


// normal async method 
async function hello() {
    return "hello from advance js "
}
console.log(hello());


// now with the awaits function 

// memory creation 
function fetch() {
    return new Promise((resolve) => {
        // settimeout enters the web api (this is not handle by itself but browser/nodes gives it t0...)
        setTimeout(() => {
            //eventloop checks the call stack  when stack become empty eventloop  pushes callbacks into  stack 
            resolve("data has recived from the backend ")
        }, 3000) // after 3 second this will exicute while waiting for the data from the backend 
    })



}
// this is the inside the memory 
async function getData() {
    console.log("fetching...data"); // runs 1st because it's an synchronus behavior 
    const result = await fetch()//await pauses getDate() until promises finishes 
    console.log(result);
    console.log("finished working...!");
}
getData() // getData gets the call()


function fetchUSer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "chaicode",
                URL: "https://chaicode.com"
            });
        }, 6000);
    });
}

async function getUserData() {
    try {
        console.log("fetching data...");

        const userData = await fetchUSer();

        console.log("userData:", userData);

    } catch (error) {
        console.log("error fetching data");
    }
}

getUserData();