// Use arrow functions to write anonymous concise functions
// Similar to lambda functions of C++

// If we are returning one value from an arrow function we don't need
// return keyword. Also we don't need braces in these cases
const fun = (a, b) => a + b;
console.log(fun(3, 4));

// Using inline arrow functions while passing in to algorithms
// If there is a single parameter then we don't even need to include ()
// Such as in the following case we don't need () around x
let A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter function copies and returns all the elements that follow the predicate
let B = A.filter(x => x % 2 == 0);
console.log(B);

const fun2 = a => console.log(a);
