var x = function () {
	let n = 1;
	function y() {
		console.log(n);
	}
	return y;
};
var y = x();
y();

// Amazing!! The returned functions still maintain their lexical scope.
// Basically it inherited the closure from the parent in which it existed.
// So it not only the function was returned, the lexical scope was also returned.
// Thus we can say a closure was returned (a function bundled with its lexical scope).

// Tricking by changing value
var x = function () {
	let n = 1;
	function y() {
		console.log(n);
	}
	n = 10;
	return y;
};
x()();

// Here the value is changed because while returning closure, it was not the value of
// 'n' that was returned, in fact it was the reference to 'n' that was returned.

// Diving into function chain
function fun() {
	let m = 1;
	function x() {
		let n = 2;
		function y() {
			console.log(m, n);
		}
		return y;
	}
	return x();
}
fun()();

// Concising further
var x = () => {
	let m = 1;
	return (() => {
		let n = 2;
		return () => console.log(m, n);
	})(); // Self invoking function
};
x()();

// Making without a self invoking function
var x = () => {
	let m = 1;
	return () => {
		let n = 2;
		return () => console.log(m, n);
	};
};
x()()();