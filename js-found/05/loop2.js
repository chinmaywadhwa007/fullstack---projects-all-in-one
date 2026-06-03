/* 
question 1  write the for loop that loops through array {"green tea "} , {"black tea"},{"oolang tea"}and stop the loops when it find the {"chai"}
store all the tea before the tea in the new array nammed teaslection
*/


let chai = ["green chai", "black chai", "orange chai", "chai"]
let teahello = []

for (let neet = 0; neet < chai.length; neet++) {
    if (chai[neet] === 'chai') {
        break;
    }
    teahello.push(chai[neet])


}
// console.log(teahello);

/* 
question 2 write the for loop that loops through an array ["london", "new york","peris""berlin",]and skip the paris 
and store the cities into the order variables named visitedcities  
 
*/

// what we learn here 
let cities = ["london", "berlin", "newyork", "paris"] // cities in array we have to remove the paris from the array
let visitedcities = [] // in this array 
//  so we have to apply this with the loop and if inbuild for remove the paris
for (let i = 0; i < cities.length; i++) {
    if (cities[i] === "paris") { //!== it means ignore every thing except paris to push into new erray // if we use === then it will skip the paris and print the other element
        continue
    }
    // visitedcities.push(cities[i])

}
// console.log(visitedcities);


/* 
question 3  use the  for-of loop  to  iterate through the array ["1","2","3","4","5"]and stop when the number is 4 is found store the number before 4 in an array named smmall number 
*/

let numbers = [1, 2, 3, 4]
let small_numbers = []
// this is the syntax of the for..of loop
for (const num of numbers) {
    // for stoping before the number four comes
    if (num === 4) {
        break;
    }
    small_numbers.push(num)
}
// console.log(small_numbers);


/*  
 question 4 use the for of loop to literate through the array ["chai","green tea","black tea","herbel tea"] and skip the herbal tea and store the other tea in the diff array named preferred_tea

*/

let m = ["chai", "green chai", "black chai", "herbal chai"]

let preferred_tea = []

for (let tea01 of m) {
    if (tea01 === "herbal chai") {
        break
    }
    preferred_tea.push(tea01)
}

// console.log(preferred_tea);


/* 
 question 5 now we will see the for in loop to loop through an object containing cty popuplation of "berlin" is found and store all the previous cities population in the new object named citiespopulation
ex 
*/


let citiespopulation = {
    london: 890000,
    "new york": 84000,
    paris: 220000,
    berlin: 35000
}
let citiesnewpopulations = {} //this is the object not the array syntax
for (const city in citiespopulation) {
    if (city == "berlin") {
        break
    }
    citiesnewpopulations[city] = citiespopulation[city]

}
// key=value
// console.log(citiesnewpopulations);

// so this is the last solution we have to fig out 

// console.log(Object.values(citiespopulation)); this is just for the understanding not the o/p we want 

/* 
question 6 use a  for in loop  in through an bbject containing city population
skip any city with the highest population below 3 millon and store it in the new object named "largedcities"

*/

let worldcities = {
    "sydney": 5000000,
    "tokyo": 9000000,
    "berlin": 35000000,
    "paris": 22000000,
}
let large_cities = {

}
for (const worldcity in worldcities) {
    if (worldcities[worldcity] < 3000000) {
        continue
    }
    large_cities[worldcity] = worldcities[worldcity];
}

//  console.log(large_cities);



/*  
write the for each loop that iterate through the array{"earl gray","green tea","chai","oolang tea"}
stop the loop when "chai" is found and store all the previous tea types in an array named `available tea`
*/

let teas = ["earl gray", "green tea", "chai", "oolang tea"]

let available_tea = []

teas.forEach(function (tea) {
    if (tea === "chai") {
        return;
    }
    available_tea.push(tea)
})
console.log(available_tea);

/* 
note why break won't work here beacuse  break work with only loops like for while do while loop but  for "foreach()"is a function not the loop in sense so what we use then we will use here is return statement 
*/

/*  example for the for each  
  const array =["1","2","3","4"]
 array.forEach((element)=>
    console.log(element)); */



/* 
write the foreach loop that iterate through the array ["berlin", "tokyo","sydny","paris"] skip sydney and store the other cities into the new array called travelled_cities
*/

let cities_2 = ["berlin", "tokyo", "sydney", "paris"]

const travelled_cities = []

cities_2.forEach(function (travel) {
    if (travel === "sydney") {
        return
    }
    travelled_cities.push(travel)
});

console.log(travelled_cities);


/* 
write the for loop  that iterate through array [2,5,7,9] skip the 7 and muliply by 2 store the result into the new array named `doubled_number`
*/

let number01 = [2, 5, 7, 9]

let doubled_number = []

for (let k = 0; k < number01.length; k++) {
    if (number01[k] === 7) {
        continue;
    }
    doubled_number.push(number01[k] * 2)


}
console.log(doubled_number);


// practice problem skip 6 multiply by 3 and store into the new array 

let values01 = [3, 6, 8, 10]

const value_2 = []
for (let L = 0; L < values01.length; L++) {
    if (values01[L] === 6) {
        continue;
    }
    value_2.push(values01[L] * 3)
}

console.log(value_2);


/* final for question for now
   use the for-of loop to iterate through the array ["chai", "green_chai","blue_chai","herbel_chai and stop the loop when the length of the current tea name is greater then 10 store the teas iterated over the array called `sorted_tea`*/

// 1st we have to check the loop  what we can use so in this case we can use the for of loop 
//array is given and we have to create the new array called sorted_tea 
// logic will be stop the loop  when the length of the current tea name is greater then 10 



// start the logic 

let chaiss = ["green_chai","chai","blue_chai","herbal_chai"]

const sorted_tea = []

for (tea of chaiss) {
    if (tea.length>10) {
        break;
    }
    sorted_tea.push(tea)
}

console.log(sorted_tea);

let  sum = 0;
for (let g = 0; g <=5; g++) {
    sum+=g
    
}
console.log(sum);
