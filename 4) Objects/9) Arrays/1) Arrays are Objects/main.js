/*
    * Arrays are nothing but objects with the following differences -
    - We are not able to see the keys visibly, but the indexes of an array are its keys.
      In the given example the array has three keys 0, 1, 2 that are assigned three strings.
    - Arrays have additional functions that are provided to it by the array prototype object

	~ Array also has the object functions provided to it object prototype.

    * Accessing values from an array is same accessing them from an object -
      If we had a value named 1 inside a regular object we would have accessed it by using
      [1]. This is also true for arrays.
*/

{
	const A = ["One", "Two", "Three"];

	//* Getting prototype chain for an array
	let obj = A;
	do {
		obj = obj.__proto__;
		console.log(obj);
	} while (obj);
}

{
	const A = ["One", "Two", "Three"];

	//* Getting property names (can also use for-in loop also)
	console.log(Object.getOwnPropertyNames(A));

	//~ Note that arrays have a property named length by default
}

{
	const A = ["One", "Two", "Three"];

	//* Using delete function gives an interesting output
	delete A[0];
	console.log(A);
}

{
	const A = ["One", "Two", "Three"];

	//* Assigning a key value pair to array
	// Assigning by using a numeric so that it mimics as an index
	A[5] = {};

	// Assigning as a string name
	A.name = "Ram";

	// Adding a value by pushing (here the property name is assigned automatically
	// based on index system).
	A.push("Hello");

	console.log(A);

	// Using for-in loop to get properties (for-in is smart, it does not refer to length property)
	// for-in loop iterates only over the enumerable own properties of an object.
	for (let i in A) process.stdout.write(`${i} `); // Using this function to output in 1 line

	// Checking if length is an enumerable property or not.
	console.log(Object.getOwnPropertyDescriptor(A, "length").enumerable);
	console.log(A.propertyIsEnumerable("length")); // Easier way
}
