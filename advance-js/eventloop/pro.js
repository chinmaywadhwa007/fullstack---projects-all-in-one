const pro = new Promise((reject,resolve)=>{
    const pro=true
    if (pro) {
        resolve("task completed ")
    }else{
        reject("task failed")
    }
})
console.log(pro);

