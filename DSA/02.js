let arr = [1, 2, 3, 4, 5]

// reverse 
const result = arr.reverse()
console.log(result);

const word = "chinmay"
const reversed = word.split("").reverse().join(' ')
console.log(reversed);
// max a numbber 
a = [1, 2, 3, 4, 5, 5]
let max = a[0]
for (let i = 0; i < a.length; i++) {
    if (a[i] > max) {
        max = a[i]
    }
}
console.log(max);


// removes  the duplications 
let array = [1, 2, 2, 3, 2, 3, 1, 2, 4]
const unique = [...new Set(array)]
console.log(unique);

arr = [12, 3, 4, 5, 6, 7]
let count = 0
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        count++
    }
}
console.log(count);
