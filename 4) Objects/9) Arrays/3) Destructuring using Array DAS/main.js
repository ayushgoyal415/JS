/*
    JS developers are very smart. They knew that if a person is using an array, then he
    must not be assigning property names explicitly. He must be using an array to use its
    index based system. In such cases VIS is not an option at all. So, they provided
    another shorthand technique where we don't have to explicitly mention the index,
    instead we can mention names of alias variable directly. The indexes are extracted
    serial-wise starting from index 0 till index n - 1.

    This helps to shorten the code as we don't have to mention the index explicitly.
    But there is a disadvantage too. We cannot skip indexes, so in order to achieve that,
    we can leave empty space between commas.

*/

const cars = [
	["alto", 80, 23, ["compact", "cheap"]],
	["santro", 100, 15, ["spacy", "comfortable"]],
	["baleno", 120, 23, ["fuel efficient"]],
	["verna", 140, 18, ["speedy", "aerodynamic"]],
	["innova", 120, 23, ["engine life", "7 seater"]],
];

{
	// Array specific destructuring (using array index shorthand)
	//~ We use [ ] (not { }) for using array specific destructuring
	const [a, b, , , e] = cars;
	console.log(a);
	console.log(b);
	console.log(e);
}
{
	// Array specific destructuring using default values
	const [a = "scorpio", , , , , f = "mercedes"] = cars;
	console.log(a);
	console.log(f);
}
{
	// Array specific destructuring using rest operator
	//~ Here rest operator returns an array (very smart)
	const [, , c, ...rest] = cars;
	console.log(rest); // car at indexes 0, 1 and 2 are not extracted
}
{
	// Array specific destructuring of nested arrays without using property accessor
	const [[, , , [a]]] = cars;
	console.log(a);
	// Array specific destructuring of nested arrays by using property accessor
	const [b] = cars[0][3];
	console.log(b);
}
{
	// Array specific destructuring at multiple levels without using property accessor
	const [[, , a, [b]]] = cars;
	console.log(a, b);
}
{
	// Array specific destructuring of an array passes as function argument
	function fun([a, , c]) {
		console.log(a);
		console.log(c);
	}
	fun(cars);
}
{
	// Initializing multiple variables in one line using array specific DAS
	const [a, b, c, d, e] = [1, 2, 3, 4, 5]; // Here [1,2,3,4,5] is treated as an array
	console.log(a, b, c, d, e);
}
