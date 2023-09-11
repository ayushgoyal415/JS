// ES6 has provided syntax extensions to object literal. These help to make code look cleaner
// and more flexible.

{
	/*
    > Object Property initializer shorthand (OPIS)

    - Used to initialize an object property using a variable, where : 
    	- The destination property is initialized with the same name as the variable name.
    	- The destination property is assigned the same value as the value stored in the variable.
    - This helps in concising the code by eliminating the need to write the same names again.
    */

	const name = 'Ram', age = 30, gender = 'male'; // prettier-ignore
	const person = { name, age, gender };
	console.log(person);

	// Making a shorter function initializer using OPIS
	function Car(name, speed, average) {
		return { name, speed, average };
	}
	const car = new Car("alto", 80, 23);
	console.log(car);
}
{
	/*
    > Computed Property name
    
    - This allows the value stored in variable to be used as a property name -
        - Useful while declaring object literal by shortening the code.
        - Useful while destructuring property name
    */
	{
		const p = "name";
		const car = {
			[p]: "zen", // Computing property name from variable 'p'
		};
		console.log(car);
	}

	{
		// Using a string expression and a variable to set property name
		const p = "bike_";
		const bike = {
			[p + "name"]: "Discover",
			[p + "speed"]: 100,
			[p + "average"]: 23,
		};
		console.log(bike.bike_name);
	}
	{
		// Changing the value of variable each time
		let i = 0;
		const p = "car_";
		const cars = {
			[p + i++]: "alto",
			[p + i++]: "santro",
			[p + i++]: "verna",
		};
		console.log(cars);
	}
}
