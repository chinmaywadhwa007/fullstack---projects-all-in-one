// here we will study the encapsulation in oops in js 
class BankAccount {
    #balance = 0
    deposit(ammount) {
        this.#balance += ammount
        return this.#balance
    }
    getBalance (){
        return `this.#balance`
    }

    getBalance(){
        return `$ ${this.#balance}`
    }
}

let newAccount  =  new BankAccount()  
//  console.log(newAccount.getBalance());
  

 /* now what is an abstraction means  */
//👉 Abstraction = hiding complex logic and showing only what is necessary

// meaning user ko what todo pata hona chiye how it works nahi is called abstraction
// real life example 
/* atm machince you just press the button you don't know internal banking system this is called abstraction
    car you drive the car but you don't know how car works or how engine works in the car 
*/

/* 
    but in js we don't use the abstraction directly like cpp and java we use abstraction
    by the diff methods in js example we have 
    calsses,methods,privates field(#),functions 
*/

class coffeeMachine {
    startMachine(){
        console.log("machine started...");
        
    }
     brewcoffee(){
        console.log("brewing the coffee...");
        
    }
    servecoffee(){
        console.log("here's your coffee latte   sir/mam...!!");
        
    }
    Makecoffee(){
        this.startMachine()
        this.brewcoffee()
        this.servecoffee()
    }
}
// in this internal code are safe we can't change this without permission
// let Machine = new coffeeMachine();
// Machine.Makecoffee()



class acc_balance{
    #balance
    constructor (balance){
        this.#balance=balance;
    }
    #calculateInsterst(){
        return this.#balance *0.05
    }
    
    get_balance (){
        return this.#balance + this.#calculateInsterst();

    }
    
}

    const acoounts = new acc_balance(1000)
    console.log(acoounts.get_balance());

    /* the key points to take away as follow 
    #balance----> hidden (encapsulation+abstraction)

    #calculateInsterst()---->user cannot access

    user only see---->get_balance
     */
    


