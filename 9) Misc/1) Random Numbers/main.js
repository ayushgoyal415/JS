//. Math.random() returns decimal numbers between 0  and 1. It can return 0 but it can never return 1
let A = [];
for(let i = 0; i< 5; i++) A.push(Math.random())
console.log(A);

//. Math.floor() rounds of the number to the nearest (smaller) whole number
//. This following will always return 0 as Math.random() does not return a value above 1
A = [];
for(let i = 0; i< 5 ; i++) A.push(Math.floor(Math.random()));
console.log(A);

//. Getting a whole number between 0 and 5
A = [];
for(let i = 0; i< 5 ; i++) A.push(Math.floor(Math.random() * 6));
console.log(A);

//. Getting a number in any given range (can get a negative integer as well)
const random_range = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
A = [];
for(let i = 0; i< 5 ; i++) A.push(random_range(5, 10));
console.log(A);
