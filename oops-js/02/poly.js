class animal{
    sound(){
        console.log("animals makes sound ");
        
    }
}
class dog extends animal{
    sound(){
        console.log("dog barks boaw boaw ");
        
    }
}
class cat extends animal {
    sound(){
        console.log("cat meows ");
        
    }
}

let a1 =  new dog();
let a2 =  new cat();

a1.sound();
a2.sound();
/* 
    same method = sound()
    diff output depanding on the object 
    this is polymorphism 
*/

// different example for polymorphism

class payment{
    pay(){
        console.log("processing payment....");
        
    }
    

}
class upi extends payment {
    pay(){
        console.log("paying via upi is....");
        
    }
}
class card extends payment{
    pay(){
        console.log("paying via card");
        
    }
}
function processPayment(method){
    method.pay();
}

processPayment(new upi())
processPayment(new card())

// this method says same interface upi for all 
//add new payments method without changing old code 
// works with any object having the same method 

// polymorphism allows us to use a single interface for diff data types or ojects 

