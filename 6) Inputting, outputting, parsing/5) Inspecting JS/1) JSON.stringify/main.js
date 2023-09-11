/*

	> Arguments

    - value: It is the value that is to be converted into a JSON string.

    - replacer: It is an optional parameter. This parameter value can be an altering function
      or an array used as a selected filter for the stringify. If the value is empty or null
      then all properties of an object are included in a string.
      
    - space: It is also an optional parameter. This argument is used to control spacing in
      the final string. It can be a number or a string if it is a number then the specified
      number of spaces indented to the final string and if it is a string then that string is
      (up to 10 characters) used for indentation.

    * Limitations of inspecting objects using JSON.stringify -> 
    
	- Specifically, stringify only works for some primitives: bool, numbers, strings, and
      null — but not undefined, functions, NaN, or Infinity.
	- Also, the stringify method also won’t work for many objects. eg., RegExp objects

*/

const car = {
	zen: {
		speed: 80,
		average: 25,
		price: 1.1,
		main_features: ["compact", "cheap"],
	},
	santro: {
		speed: 100,
		average: 20,
		price: 2.1,
		main_features: ["spacy", "comfort"],
	},
};

// Printing specific properties by name
console.log(JSON.stringify(car.zen, ["price"]));

// Printing specific properties by using function
console.log(
	JSON.stringify(
		car.zen,
		(key, value) => {
			if (typeof value === "string") return undefined;
			return value;
		},
		4
	)
);

// Printing with indentation
console.log(JSON.stringify(car, null, 4));

// Printing with a defined string
console.log(JSON.stringify(car, null, "**"));


