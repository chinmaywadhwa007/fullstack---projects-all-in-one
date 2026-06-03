console.log("hello world"); // this exicutes 
// then we set the hold for 2s for next task to complete
function sayHelle (){
    console.log("hello from the aynchronus world ");
    
}

// this will complete 
setTimeout(()=>{
sayHelle()
},2000)

//1st this will complete after 2s

for (let index = 0; index < 10; index++) {
    console.log(index);
    
    
}