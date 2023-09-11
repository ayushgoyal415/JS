// A function that takes a function as an argument or returns a function is known as
// higher order function
const x = () => console.log("Hello");
const y = (x) => x();
// In the above example, y is a higher order function as it receives x.
// Here x is a call back function as it is passed into another function.

//---------------------------------------------------------------------------------------
// Functional Programming
//---------------------------------------------------------------------------------------
// JS allows functional programming as it allows using of higher order functions.
// Higher order functions can allow us to make really useful reusable codes.
// Try to follow DRY (Don't Repeat Yourself) principle.

// Example of calculating area and circumference of given array of radius.
const rads = [1, 2];

// Declaring a basic function (reusable code)
const basic = (logic) => {
	const ans = [];
	for (let i = 0; i < rads.length; i++) {
		ans.push(logic(rads[i]));
	}
	return ans;
};

// Declaring various logics
const area_logic = (r) => Math.PI * r * r;
const circ_logic = (r) => 2 * Math.PI * r;

console.log(basic(area_logic));
console.log(basic(circ_logic));

// Using map() -> basically does the same thing as basic function
console.log(rads.map(area_logic));
console.log(rads.map(circ_logic));

// Making own map function using the above mentioned basic function
Array.prototype.my_map = function (logic) {
	const ans = [];
	for (let i = 0; i < this.length; i++) {
		ans.push(logic(this[i]));
	}
	return ans;
};
console.log(rads.my_map(area_logic));
console.log(rads.my_map(circ_logic));
