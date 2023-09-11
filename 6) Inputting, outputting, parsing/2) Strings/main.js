let A = "Hello World";

//. Strings are immutable in js
A[0] = "S";
console.log(A);

//. String.substring()
console.log(A.substring(6));
console.log(A.substring(0, 5));

//. String.toUpperCase() and String.toLowerCase
console.log(A.substring(6).toUpperCase());
console.log(A.toLowerCase());


A = 'technology, computer, it, code'
//. String.split()
console.log(A.split(', '));