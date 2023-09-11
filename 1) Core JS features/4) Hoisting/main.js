// During the memory phase of execution context, memory is allocated for all the
// variables and functions in the current lexical environment. These are stored
// as key-value pairs. For variables the value is set to undefined. For function
// the value is nothing but copy of the entire function code.

// Note: Arrow functions act as variables, so for them the value stored is undefined
// and hence they cannot be called before they are initialized.

console.log("Variable call out : ", v);

fun();
console.log("Function call out : ", fun);

// arr_fun(); TYPE Error
console.log("Arrow Function call out : ", arr_fun);

// var_fun(); TYPE Error
console.log("Variable Function call out : ", var_fun);

//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------

var v = 10;

function fun() {
	console.log("Function invoked : Hello World");
}
var arr_fun = () => {
	console.log("Arrow Function invoked : Hello World");
};
var var_fun = function () {
	console.log("Variable Function invoked : Hello World");
};

//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------

// Note: Everything is defined using keyword 'var' here. This is because 'let' and
// const show different behavior to hoisting.

//----------------------------------------------------------------------------------
// HOISTING IN 'let' and 'const' VARIABLES
//----------------------------------------------------------------------------------
// Like 'var' declarations, the 'let' and 'const' declarations are also hoisted but
// they are in 'temporal dead zone' until they get initialized.

// 'let' and 'const' variables are also allocated memory during the phase 1 of
// execution context but still we cannot refer to them before they are initialized.
// This is because when 'var' is allocated memory, it is stored within global object.
// Whereas when 'let' and 'const' variables are allocated memory, they are stored in
// a separate space outside of the global object thus making them inaccessible inside
// the global scope. Like 'var' variables, initially these variables are also assigned
// to undefined, its just that these variables are in a separate space.

// Note: Even after the 'let' and 'const' variables are initialized, we cannot
// associate them with the global object because these variables are maintained
// in a separate space altogether. This is unlike 'var' variables which are
// associated within the global object and can be accessed by giving reference to it.

//----------------------------------------------------------------------------------
// TEMPORAL DEAD ZONE
//----------------------------------------------------------------------------------
// Temporal dead zone is the time since this 'let' (or 'const') variable was hoisted
// and till it is initialized with some value. If user tries to access a variable
// inside a temporal dead zone, reference error is thrown.

// console.log(l); // REFERENCE Error
let l = 10;
