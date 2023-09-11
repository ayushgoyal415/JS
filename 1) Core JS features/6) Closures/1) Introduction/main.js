function fun() {
	let n = 1;

	// Invoking the function which was declared in this function
	f_fun();

	// Declaring a function within a function
	// Note : this function can only be accessed inside this function
	function f_fun() {
		console.log(n);
	}
	return f_fun;
}

fun();

// A closure is the combination of a function together (enclosed) with references
// to its surrounding state (i.e. lexical environment). In other words, a closure
// gives you access to an outer function's scope from an inner function.
