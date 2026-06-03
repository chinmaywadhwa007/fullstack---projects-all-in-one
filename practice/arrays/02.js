/*  in this file we will see how loop inside the array works  */

let arr = [10, 20, 30]
for (let i = 0; i < arr.length; i++) {
   console.log(i);


}

// for of loop array 
fruits = ["apple", "orange", "banana"]

for (let fruit of fruits) {
   console.log(fruit);

}


// practice problem we have 
/* 1 Create array of 5 numbers
2 Print first and last element
3 Add one value using push()
4 Remove one value using pop() */


const arra1 = [1, 2, 3, 4, 5]
console.log(arra1[0]);
console.log(arra1[4]);
arra1.push(10)
console.log(arra1);
arra1.pop()
console.log(arra1);

/* medium
   1 Print all array elements using loop
2 Find sum of all numbers
3 Count even numbers */

arr2 = []
for (let a = 0; a <= 5; a++) {
   arr2.push()

}
console.log(arr2);

// question print only even number in the array

a = [1, 2, 3, 4, 5, 6]
b = []
for (let k = 0; k < a.length; k++) {
   // check if number is divided by2 and ans will be 0 then it will be an even number 
   if (a[k] % 2 === 0) {
      b.push(a[k])
   }

}
console.log(b);


// question print odd number in the array 

aa = [1, 2, 3, 4, 5, 6]
bb = []
for (let j = 0; j < aa.length; j++) {
   // means it's not equal to this value so print odd number 
   if (aa[j] % 2 !== 0) {
      bb.push(aa[j])
   }

}
console.log(bb);


// slice method 
/*  used to copy of an array, original array does not change  */

// array.slice(start,end )

let aaa = [10, 20, 30, 40, 50]
result = aaa.slice(3, 4)

// console.log(result);

// splice() method it will remove add replace from the array 
let h = [10, 20, 30, 40, 50]
h.splice(0, 4)
console.log(h);
/*  there are few more method like includes and indexof method in this we will check weather it is true or false and indexof() means we will find the index of any number by  using this method */
fru = ["apple", "orange", "banana"]
console.log(fru.indexOf("banana"));


/* map() method  used to tranform array... and creates new arraay  */

let numbers = [1, 2, 3, 4, 5]
let res = numbers.map((num) => {
   return num * 2
})

console.log(res);

// let's see the diff example for the map method we will talk about atleast 5 

//example 1 add 10 in every number 
let nums = [5, 10, 15]
let re = nums.map(num => num + 10)
console.log(re);


//example 2 convert to uppercase all tha values 

let names = ["virat", "rohit", "dhoni"]
let uppercase = names.map(names => names.toUpperCase())
console.log(uppercase);

// example 3 get string length 

let fr = ["orange", "watermalon", "mango"]
let ree = fr.map(ree => ree.length)
console.log(ree);



// example 4  square of the number 
const hum = [2, 3, 4]
let square = hum.map(hum => hum * hum)
console.log(square);

// number 5 convert number to string

const string = [1, 2, 5]
let str = string.map(string => "number " + string)

console.log(str);

/* filter method in the array what does it doo this is the most important array method in the javascript
   it is used to 
      select data
      remove unwanted values 
      search/filter's items 

   used everywhere in react as well
      in react
      in e commerce webssite 
      APIs
      dashboard
      search functinality 

*/
/* what filter does actually check every elements using the conditions
   if condtion is true 
      true---> keeps value 
      false--->removes value 
*/
// it will filter out the even number in the given number 
let n = [1,2,3,4,5,6,7,8]
let evens = n.filter(n=>n%2===0)
console.log(evens);
// this is for the odd ones 
let o = [1,2,3,4,5,6,7,8]
let odds = n.filter(n=>n%2!==0)
console.log(odds);
