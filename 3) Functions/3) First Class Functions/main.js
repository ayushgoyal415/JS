// Function Statement / Function Declaration
function a() {}

// Function Expression (function () {} is known as function expression)
var A = function () {};

// 1) The major difference between function statement and expression is hoisting
// 2) The other difference is a function expression can be written without function
// name to make anonymous functions. A function expression can be used as an IIFE
// (Immediately invoked function expression)

// Anonymous functions
// By convention a function statement should have a name
// Therefore only function expressions can be defined anonymously

// Examples of IIFE
(function () {})();
(() => {})();

// Unnamed Function expression (Anonymous)
var A = function () {};

// Named Function expression
var A = function B() {};
// B(); // REFERENCE Error (B is not defined)
// This is because B() is not defined in the scope in which it is being called
// Instead it was created as a local variable inside scope of 'var' A.
var A = function B() {
	B(); // This is not an error.
};

// Difference in parameters and arguments
// The a and b function (a,b) are parameters of functions whereas the values that we
// pass to the function are known as arguments.

// First class functions / First Class 'Citizens'
// We can pass functions as arguments to functions
// We can also return functions from functions
// This ability of using functions as values is known as first class functions.
var A = function (B) {
	console.log(B);
	B();
};
var B = function () {
	console.log("Hello World");
};
A(B);
