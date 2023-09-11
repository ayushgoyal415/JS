/*
    Objects has properties with strings as names whereas arrays don't have such explicit names
    to refer to while destructuring. For arrays the names of the keys are its indexes which we
    can refer to while destructuring (same as a regular object)
    
    The DAS used for objects can be applied to arrays as well. The only difference being that
    we cannot use VIS as variable names cannot be set as numerical values.
*/

const cars = [
	["alto", 80, 23, ["compact", "cheap"]],
	["santro", 100, 15, ["spacy", "comfortable"]],
	["baleno", 120, 23, ["fuel efficient"]],
];

{
	// We cannot use VIS because variable names cannot be a numeric value thus we use alias
	const { 0: a, 2: b } = cars;
	console.log(a);
	console.log(b);
}
{
	// Destructuring as default values
	const { 0: a = "scorpio", 4: b = "verna" } = cars;
	console.log(a);
	console.log(b);
}
{
	// Destructuring when name of property is not known (dynamic property name)
	const prop = 0;
	const { [prop]: a } = cars;
	console.log(a);
}
{
	// Destructuring using rest operator
	//~ Here rest operator returns an object
	const { 0: a, ...b } = cars;
	console.log(a);
	console.log(b);
}
{
	// Destructuring nested arrays without using property accessor
	const { 0: { 3: { 0: a } } } = cars; // prettier-ignore
	// Destructuring nested arrays by using property accessor
	const { 0: b } = cars[0][3];
	console.log(a);
	console.log(b);
}
{
	// Destructuring at multiple levels without using property accessor
	const { 0: { 2: a, 3: { 0: b } } } = cars; // prettier-ignore
	console.log(a, b);
}
{
	// Destructing arrays passed as functional arguments
	function fun({ 0: a, 2: c }) {
		console.log(a);
		console.log(c);
	}
	fun(cars);
}
{
	// Assigning multiple properties to array using Object.assign()
	const bikes = [];
	Object.assign(bikes, { name: "yamaha", speed: "100", average: "40" });
	console.log(bikes);

	// Destructuring an array using VIS (possible only if array has named properties)
	const { name, speed, average } = bikes;
	console.log(name, speed, average);
}
