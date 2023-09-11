//----------------------------------------------------------------------------------
// Although we can redeclare 'var' we cannot redeclare 'let' and 'const' variables
//----------------------------------------------------------------------------------
var a = 10;
var a = 10;
// let a = 10; // SYNTAX Error

let b = 10;
// let b = 10; // SYNTAX Error
// var b = 10; // SYNTAX Error

// Note : We can redeclare same named 'let' and 'const' variables in different
// scopes. In such cases shadowing will define the precedence.
{
	let b = 10;
}

//----------------------------------------------------------------------------------
// Block (aka compound statement) -> code enclosed in {}
//----------------------------------------------------------------------------------
// Used to combine JS statements into one group. We need to group these statements
// in a place when JS expects only one statement. For e.g. -> if statements, for loops,
// while loops etc. Note : Function implementation { } behave differently.
if (a == b) {
	/*Block*/
}

//----------------------------------------------------------------------------------
// 'let' and 'const' are block scoped variables
//----------------------------------------------------------------------------------
{
	var v = 10;
	let l = 20;
	const c = 30;
}
console.log(v);
// console.log(l); // REFERENCE Error (not defined)
// console.log(c); // REFERENCE Error (not defined)

// Here the 'let' and 'const' variables get hoisted inside a separate space named
// block whereas 'var' variable gets hoisted in the global scope. Once the block
// ends, the 'let' and 'const' variables are deleted but 'var' variables remain
// accessible outside the scope.

//----------------------------------------------------------------------------------
// Re-declaration of 'var' variables does not lead to new memory allocation
//----------------------------------------------------------------------------------
// This is because 'var' variables even when defined in different scopes,
// get hoisted and stored in global object thus they cannot be given same key
// for 2 times in the same object. Thus re-declaration just changes the value
// stored in the key rather than making a new key.
var x = 10;
{
	var x = 20; // This is same as x = 20;
}

// But this is not the case with 'let' and 'const' variables. These variables when
// declared with same name in different scopes, lead to allocation of memory each
// time when declared. This is because for these variables the space is allocated
// at different places based on the scope in which they are declared. For eg.
// script space when declared in global scope, block space when declared in a block.

//----------------------------------------------------------------------------------
// SHADOWING OF ONE VARIABLE WITH ANOTHER TYPE OF VARIABLE
//----------------------------------------------------------------------------------
let z = 20;
{
	// var z = 20; // SYNTAX Error ('z' has already been declared) -> ILLEGAL SHADOWING
	// This is because var here can cross the limits of the block leading to
	// re-declaration of 'z' by 'var' in the global scope.
	// Note : Vice versa is legal. That is, shadowing of a 'var' with 'let' is legal
	// Note : Shadowing of a let variable with const is legal
}

//----------------------------------------------------------------------------------
// 'var' is a function scope
//----------------------------------------------------------------------------------
function fun() {
	var z = 20; // Now this shadowing is legal because var is function scope
	var y = 20;
}
// console.log(y); // Reference error // 'var' declared in function {} are not global
