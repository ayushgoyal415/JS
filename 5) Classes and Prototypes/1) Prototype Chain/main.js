let arr = [];
let obj = {};
function fun() {}

// Prototypes are the objects that are attached to objects, arrays and
// functions. This provides them additional properties which can then
// accessed. If they don't have a property, they look for the property
// inside their __proto__ chain.

// Everything in JS is an object (using prototype chains)

console.log(arr.__proto__ === Array.prototype);
console.log(fun.__proto__ === Function.prototype);
console.log(obj.__proto__ === Object.prototype);

console.log(arr.__proto__.__proto__ === Object.prototype);
console.log(fun.__proto__.__proto__ === Object.prototype);
console.log(obj.__proto__.__proto__ === null);

// Adding a property named 'square' to Array.prototype. By doing this all
// the arrays can now use this property using '.' operator. This is known
// as prototypal inheritance.
// Note : We cannot implement prototype functions using arrow functions

Array.prototype.square = function () {
	const ans = [];
	for (let i = 0; i < this.length; i++) {
		// Here 'this' points to the calling array
		ans[i] = this[i] * this[i];
	}
	return ans;
};

const A = [1, 2, 3, 4, 5];
console.log(A.square());

// Making own map function -> A map function calls a defined callback
// function on each element of an array, and returns an array that
// contains the results.
Array.prototype.my_map = function (logic) {
	const ans = [];
	for (let i = 0; i < this.length; i++) {
		ans.push(logic(this[i]));
	}
	return ans;
};
console.log(A.my_map((n) => n * n));
