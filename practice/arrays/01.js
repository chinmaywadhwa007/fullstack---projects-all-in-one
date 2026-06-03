// lets practise how array works in the js 

/*  an array store the multiple values in a single variables is called the array   */

let fruits = ["apple","banana","mango"]
console.log(fruits);
// now lets find the indexinng of the array 
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// changing the existing array with the diff value 
fruits[0] ="orange"
console.log(fruits);
fruits[1]="watermelon"
console.log(fruits);

// lets add something end at the array
let arr =[1,2,3]
arr.push(4) // this will add the 4 in the end of the array 
console.log(arr);

// we have the another method called the pop it will remove the element in the existing array 

arr.pop()
console.log(arr);

// another one unshift() means it will add the elements from the starting 
arr.unshift(5)
console.log(arr);
//shift method it will remove the element from the begnning 
arr.shift()
console.log(arr);

console.log((arr.length)); // it will check the how big is the array is 


