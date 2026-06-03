// this is the  function 1st code with this time let's undestand one and final time how functions work properly
// basic function
function greet() {
    console.log("hello chinmay")
}
//greet()


// function with parameters
//👉 Just defines the function (like writing instructions)
function greeet(name) {
    console.log("hello " + name);

}
//greeet("chinmay") //👉 Actually runs the function ❗
// greeet("virat")
// greeet("rohit")
// greeet("sachin ")

// lets solve some tricky questiion to master the basics of the functiona


/*
write a function named MakedCoffee that takes one parameters 'TypesOfCoffee' and returns a string like 
'Making black coffee' when called with 'vanilla coffee'store the result in the variables named CoffeeOrder

*/

// MakedCoffee is an function name 
// parameters name TypesOfCoffee this paramter can hold whaterver coffee type you pass ("like black coffee")
function MakeCoffee(TypesOfCoffee){
    // this line return a string
    //"Making " is  a fixed text 
    //+TypesOfCoffee adds the coffee type of it 
return  `Making ${TypesOfCoffee}` // template litrals with the curly bracket 
}
//in this section we are calling the function from parameters
// passing black coffee is an input 
// the returned value  of Making black coffee is stored in the CoffeeOrder
let CoffeeOrder = MakeCoffee("black coffee")
// console.log(CoffeeOrder);
// and the output will come making black coffee

/* 
create the function named orderedtea that makes one parameters, TeaType inside this functonn create the other function named conformedOrder that return a message like that "order confirmed for chai "
call conformedOrder from within `orderedtea` and return the result

*/

function orderedtea(TeaType){
    function conformedOrder(){
        return  `order conform for ${TeaType}`
    }
    return conformedOrder()
}
let conformedOrder = orderedtea("one masala chai ")
// console.log(conformedOrder);


//  now we will see the how arrow function 

/* 
write an arrow function   named   `calculatedTotal` that makes two parameters: `pricing` and `quantity` the function should return the total cost of multiplying the `price` and `quantity`
store the result in the variable called TotalCost 
*/

const add = (a,b)=> a+ b;
// console.log(add(5,3))

// this is arrow function with the parameter 
// we have call the function using calculatedTotal and with two parameters pricing and quantity
const calculatedTotal = (pricing,quantity)=>{
    return pricing*quantity // then return this what questiion is asking 

}
// storing result
// exicution....
let TotalCost = calculatedTotal(100,200)
// console.log(TotalCost);
// final output 

// let's discuss arrow function with without parameters
// this will come in use when we don't need the input for the output example like callbacks function timers or simple operator 
//()called parenthesis
const hello = ()=>{
    console.log("hello my boy ");
    
}

// hello();



/* 
write the function named `processedTeaOrder` that takes another function `Maketeas` as a paramter 
and calls it with the argument `"earl gray"` return the result of Maketeas
*/
function Maketeas(typeoftea){
    return `Maketeas:${typeoftea}`
}

function  processedTeaOrder(teaFunction){
   return teaFunction(`earl gray`)
}       

let order = processedTeaOrder(Maketeas)
// console.log(order);


/* 
write a function named  `createTeaMaker` that returns another function tthe returned function should take one parameter `teasType`, and return a message like `"making green tea "`
and store the returned function in a variable named TeaMaker and call it with "green tea "

this is called the higher order function or called clousers 
*/

//  defination of clouser = function + its remembered environment it remember outer function after that function is exicuted
 function createTeaMaker(name){
    return function(teatypes){
        return ` making ${teatypes} ${name}`
    }
    
}

let TeaMaker = createTeaMaker(" for chinmay")
let result = TeaMaker("green tea")
console.log(result);

// another defination function  never forgets its parents data its called clouser 