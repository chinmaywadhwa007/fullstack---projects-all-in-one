function teatype(type){
    this.type=type
    this.describe= function(){
        return `this is a  cup  of ${this.type}`
    }   
}

let blackTea = new teatype("blackTea")
console.log(blackTea.describe());


function animal(speces){
    this.speces=speces;
}

animal.prototype.sound = function(){
    return`${this.speces}makes an sound`
}
let dog = new  animal("dog barks ")
console.log(dog.sound());


function Drink(name) {

    if (!new.target) {
        throw new Error("Drink must be called with the new keyword");
    }

    this.name = name;
}

let coffee = new Drink("coffee"); 
let tea = new Drink("tea");       

console.log(coffee);
console.log(tea);



/* lets make the constructor by my own */

function  user(username,passward){
        this.username= username
        this.passward = passward;
        this.loginInfo = function(){
            return `${this.username},${this.passward}`
        }

}
let signInInfo = new user ("chinmay009","chinmay001!")
console.log(signInInfo.loginInfo());
