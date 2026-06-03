/* 
write a "while loop"  for to calculate the the summ of all the number till 5 and store it in the result in a variables named "sum"
*/

// this is the basic logic for the while loop for "beginner"
// why we right the variable here because to use it in the loop 

let sum = 0;
let i = 1;

while (i <= 5) {
    sum += i // sum= sum+1
    i++
}

// console.log(sum);


/* 
question 2 write the while loop that counts down from the 5+ 1 and stores the number in an array named countdown
*/
// this is using the array 
let countdown = []; // empty error 
let a = 5;

while (a >= 1) {
    countdown.push(a);  // why we use push here because  we have to store the value one by one into the  array 
    a--;
}

// console.log(countdown);
/* 
let countdown_2 = 5;
while (countdown_2 >= 1) {
        inside loop - runs multiple times 
        outside loop - runs only once

    console.log(countdown_2);

    countdown_2--;

}
Why ?

    Loop runs fully first
a becomes 0
Then console.log runs only once 
console.log(countdown_2)
 */


/* 
   question 3 write the do while loop that prompts the user to enter their fav tea types until they enter "stops"
    store the each type until they enter "stop" store each tea type in the array named "teacollection"
*/

// let teacollection = []

// let tea;
// do {
//     tea = prompt("enter your fav tea name (type stop if u want to finish it..!)");
// this is for thenot equal too
//     if (tea !== "stop") {
//         teacollection.push(tea)
//     }
// }
// while (tea !== "stop")

// console.log(teacollection);


/* 
question 4 write the do while loop that adds number from the 1 to 3 and store the results in a variables named called total
*/
// 1st debugging from my side yehhhhhhhhh!!!
let total = 0;
let A = 1;

do {
    total += A;
    A++
}
while (A <= 3)
// console.log(total);


/* 
question 5 write the for loop that multiplies each element in the arr {2,4,6} by 2 snd store in the variables called "multipliedNumber"
 
*/



/* "arr.length ensures we iterate over all elements safely. arr[i] * 2 performs the calculation, and push() is used to store each result in a new array */

let arr = ["2", "4", "6"] // statement 
let multipliedNumber = [] // for storing the result 

for (let i = 0; i < arr.length; i++) {
    let result = arr[i] * 2 //this is the logic here 
    multipliedNumber.push(result) // why we use push due to add numbers in the diff array 

}
console.log(multipliedNumber);

//add +1 number in this given array
let arr2 = ["1", "2", "3", "4"]
let addnumber = [];

for (let i = 0; i < arr2.length; i++) {
    const result = Number(arr2[i]) + 1
    addnumber.push(result)
}
console.log(addnumber);

// add 5 to all three number which is given here
let hello = [10, 20, 30]

let hello_1 = [] 
// understanding of the question will go here
for (let i = 0; i < hello.length; i++) {
    let result = hello[i] + 5 // logic will go here 
    hello_1.push(result)
}

console.log(hello_1);


//  convert all number into the squre of the number 2,3,4

let array1 = [2,3,4]
let h_1 = []

for (let h = 0; h < array1.length; h++) {
    const result = array1[h]*array1[h]
    h_1.push(result)
}
console.log(h_1);


/* write an for loop that lists all the cities in the array "paris" "new york" "london" and store each cities in a new array named citieslist  */


//1st thinnk about this problem


let cities = ["paris","london","nyc"]

let citieslist =[]

for (let c = 0; c < cities.length; c++) {
    const cities01 = cities[c];
    citieslist.unshift(cities01)
    
}
console.log(citieslist);
