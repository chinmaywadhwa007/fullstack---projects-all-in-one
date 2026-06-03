// scopes examples 

let GlobelVar = " i am globel"
function test() {
    let localVar = "i am local"
    console.log(GlobelVar);
    console.log(localVar);

}
test()
/* inside function 
    local  variable accessible 
    globel variable accessible 
but it only runs inside the function because the local scope stays inside the function 
*/
/* 
    now let's understand the closure
    a "closure" happens when a function remembers variables from its outer scope even after the "outer function" has finished "exicuting" 
*/

function outer() {
    let counter = 0;// it inner function saves the outer value 
    function inner() {
        counter++ // then the inner function exicute from 0 from outer function 1,2,3 the output will be this 
        console.log(counter);


    }
    return inner;
}
const fn = outer()
fn()
fn()
fn()
/* wait... why??
    normally outer function() finished 
    counter should disappears 

but in the closure 
    it store the outer function is called the closure 
*/
// real world example 
function BankBalance() {
    let balance = 5000

    return {
        deposit(amount) {
            balance += amount
            console.log(balance);
            
        },
        getBalance(){
            console.log(balance);
            
        }
    }
}

const account = BankBalance()

account.deposit(10000)

account.getBalance
//console.log(account.balance); // its an outter function so it can use to change the credantials 


// why this is powerfull this gives data privacy outside code cannot directly modifys balance   