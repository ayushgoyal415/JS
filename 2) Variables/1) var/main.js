// A is a global 'var' type of variable
var A = 9;

// Variables in JS can be set to anything (not type specific)
A = "Hello";
A = false;
A = 10.4;

function num() {
	// Declaring 'var' again (this time inside a function scope)
	// precedence -> local > global scope
	// 'var' variables can be re-declared in same scope
	var A = 20;
	var A = 40;
	var B = 10;

	// Declaring a not 'var' variable. It will be declared globally
	C = 100;
	console.log("Function A :", A);
	console.log("Function B :", B);
	console.log("Function C:", C);
}

num();
// If a 'var' variable is declared inside a function scope then it cannot be
// accessed outside the scope. But 'var' variables declared inside the block
// scopes can be accessed globally.

// console.log(B); // Error
console.log(A);
console.log(C);
