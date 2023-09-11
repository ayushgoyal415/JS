var n = 5;
function fun() {
	var n = 10;
	function f_fun() {}
}

// Lexical Environment -> It is defined as local memory along with the lexical
// environment of its parent.  In this e.g. f_fun() is lexically present inside fun().
// This means that when execution context for f_fun() got created, a reference to the
// lexical environment (memory) of its parent (fun()) was also created thus giving it
// access 'n'. Note : the memory of fun() is not only the memory of fun() but also the
// memory of its lexical parent i.e. 'the global scope'. So f_fun has references to
// the lexical environments of fun() and global(). This is known as scope chain.

//-------------------------------------------------------------------------
// SHADOWING
//-------------------------------------------------------------------------
// Note: If there are multiple variables with same name in different lexical
// environments, the value is chosen from the closest ancestor. This is known
// as shadowing That is the closest variable has shadowed the farther variable(s).
// precedence -> local > parent > parent of parent > ...... > global

//-------------------------------------------------------------------------
// UNDEFINED vs NOT DEFINED
//-------------------------------------------------------------------------
// 'undefined' is the value allocated to variables when the execution context has already
// allocated memory to a variable but it has not been initialized yet. It acts as a
// placeholder for the allocated memory until the variable is assigned a value during
// the code execution phase.

var v;
console.log(v === undefined ? "Undefined" : "Defined");

a = 10;
console.log(v === undefined ? "Undefined" : "Defined");

// Not defined means that no variable with this name was found even after searching in
// all the levels of scope chain of the execution context in control.
