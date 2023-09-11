//. Global array is a function (array constructor).Thus it has all the functions that any
//. function has by default (eg .bind(), .call(), .apply())

const A = [];

console.log(Array.isArray(A));

//. Array.of() -> creates an array from variables
const a = 1, b = 'hello', c = null, d = undefined, e = () => {}; // prettier-ignore
console.log(Array.of(a, b, c, d, e));

//. Array.from() -> creates an array from array-like object (ie an iterable object which has
//. length property eg a string). Can also pass a map function to be called on each element.
const s = "Hello World";
console.log(Array.from(s));
console.log(Array.from(s, val => val.toUpperCase()));
