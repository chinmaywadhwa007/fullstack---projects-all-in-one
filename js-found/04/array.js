/* 
queston 1:-declear the array named teaflavors that contains the strings "green tea","black tea"and "oolang tea"
access the 1st element of the arr and store it in a variables named "first coffee"
*/
// 1st way of approch


// declare the array 
let teaflavors = ["green tea", "lemon tea", "black tea"]

// logic will  be here 
const first_tea = teaflavors[2]

// running the code 
// console.log(first_tea);


/* 
2nd question :- declare the "array" by the "cities" name containing "london" "tokyo" "paris" access the element the "third element" in the array and store it in a variable named "favcity"
*/
// declare the array
let cities = ["london", "tokyo", "paris"]

// logic will go here

const favcity = cities[2]

//code runner will go here 

// console.log(favcity);



/* 
question 3 :-  you have an array named "coffee hyped" containing "hazelnut coffee" "vanilla c" "irish c"
we have to replace with the 2nd element of the array to the "black c"

*/
// declare the problem 
let coffee_hyped = ["hazelnut c", "vanilla c", "irish c"]

//logic will be here

coffee_hyped[1] = "black c"


// console.log(coffee_hyped);


/* 
 question 4:-declare the  array  named citiesvisited containing "mumbai " and "sydney" and add "berlin" to  the array by using push method 
*/
// declare the array here
let citiesvisited = ["mumbai", "sydney"]

//  logic will go here 
citiesvisited.push("berlin", "hello world ")
// output will go here

// console.log(citiesvisited);


/* 
you have array named teaorder with chai iced tea matcha and earl grey matcha remove the last element of array using "pop" method  store it in a variables named lastorder
*/

// determine the arr
let tea_order = ["chai", "matcha", "earl grey", "iced tea"]
//logic goes here

// with this method we just remove the last element in the array but if we have to remove from 1st element from the array we use "shift" method of the array and if wont ro remove from anywhere we have to use "x" method of the array

const lastOrder = tea_order.pop(3)
//result
// console.log(lastOrder);
// console.log(tea_order);

/* 
question 6 you have an array named "popular_coffee" containing "black c ","hazelnut c","normal coffee"
create the soft copy of this array named softcopycoffee

*/

let popular_coffee = ["black c ", "hazelnut c", "normal coffee"]

let softcopycoffee = popular_coffee
popular_coffee.pop()
// console.log(softcopycoffee);
// console.log(popular_coffee);


// lets take the example 
let var1 = 5;
let var2 = var1
var1 = 9
// console.log(var2);


/* 
question 7 you have the array named "topcities" containing "berlin" "singapur" "new_york"
create a hard copy of this array named hard_copies
*/

let topcities = ["berlin", "singapur", "new_york"];

 let hard_copies = [...topcities];
// let hard_copies = [topcities.slice()]

console.log(hard_copies);
topcities.pop()



/* 
question 8 you have array "ec" containing "paris" "rome" "asian" conntaining "tokyo" "bangkok"
merge these this two array into the new array named worldcities
*/

let ec = [ "paris", "rome", "asian" ]
let Another_city = ["tokyo","bangkok"]
//logic goes here for merging two arrays into one using concat here this is the 1st method to marge the 2 array
let worldcities = ec.concat(Another_city)

// we have another method lets see that 
let hello_cities = [...ec,...Another_city] // and these [...] called spread method 
console.log(worldcities);
// this is  for the another method 
console.log(hello_cities);


// question 9 you have the array find the lenght of the array and store  it into the variable named menu


// understanding of the array 
let tea_menu =[ "coffee","flavour coffee","hello_coffee"]
// logic will go here 
let menulength = tea_menu.length
// exicution will go here 
console.log(menulength);


// you have the array named called citybucket  containing "kyoto" "london" "cape town" 
// check if the london is in the array and then store in the another array callwd islondonhere

let citybucket = ["kyoto","london","cape town"]

let islondonhere = []