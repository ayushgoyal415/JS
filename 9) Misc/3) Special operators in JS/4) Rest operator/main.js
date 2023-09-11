// Rest operator when used in function parameters can convert all parameters into
// array. Thus we can pass as many parameters as we want.

const get_even = (...A) => {
	let ans = A.filter((x) => x % 2 == 0);
	return ans;
};

console.log(get_even(1, 2));
console.log(get_even(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
