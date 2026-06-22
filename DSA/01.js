// reverse an array 
// arr = [1, 2, 3, 4, 5]

//output [5,4,3,2,1]

const arr = [1, 2, 3, 4, 5]
const result = arr.reverse()
console.log(result);

// using loop
const a = [1, 2, 3, 4, 5]
let ans = []
for (let i = a.length - 1; i >= 0; i--) {
    ans.push(a[i])
}
console.log(ans);

// find maximum arr in the given array 
const q = [10, 20, 30, 40, 10]
let b = q[0]
for (let g = 1; g < q.length; g++) {
    if (q[g] > b) {
        b = q[g]
    }
}

console.log(b);

// find the min 
let min = q[0];

for (let i = 1; i < q.length; i++) {
    if (q[i] < min) {
        min = q[i];
    }
}

console.log(min);

const hello = [1, 2, 3, 4]
let sum = 0
for (let u = 0; u < hello.length; u++) {
    sum += hello[u]
}
console.log(sum);
