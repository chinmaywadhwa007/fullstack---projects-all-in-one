// filter reduce map method in the array 


// 1st map method 

/* 
"map method"is an feature of es5 javascript that creates a new array by applying a function to each element of original array. it skips empty element and does not modifys the original arry
*/
let h = [1, 2, 3, 4]
const b = h.map(x => x * 2)

// console.log(b);

const a = [1, 2, 3, 4, 5]
 const sr = a.map(num => Number(Math.sqrt(num).toFixed(2)));
// console.log(sr);

let x = Number(2.345).toFixed(1);
// console.log(x + 2);
;

// practice problem 1
let arr = [1,2,3,4,5]
let result = arr.map(n=>n*10) //  here n represents each element of the array one by one
console.log(result);

//practice problem 2
let array = [1,2,3,4,5]
// to use operator in the question we have to use string concantation
const results = array.map(n=>`${n}!`)
console.log(results);

// pratice problem 3
let arrray = [2,4,6,8,10]

const fn = arrray.map(j=>`#${j}`)

console.log(fn);


// practice problem 4 
let even = [2,4,6,8]

const kk = even.map(h=>`${h} is even `)
console.log(kk);

