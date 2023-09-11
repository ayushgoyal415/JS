// Does function parameter form closure
// Yes, parameter arguments also participate in closure
function outer(str) {
	function inner() {
		console.log(n, str);
	}
	let n = 10;
	return inner;
}
let A = outer("Hello");
let n = 100;
A();

// What will happen if we have a conflicting variable with same in global scope
// as the name in closure. There is no change in answer because the closure variable
// is different than the inner variable. Even if it was declared as var, still these
// variables are different because 'var' is function scoped variable.

// But if there was no variable 'n' in the function then it will use global 'n'
// Try commenting out 'n' declared on line 7.
