"use strict";
/*
	* Strict Mode
	Gives errors for .freeze
	Gives errors for non var/let/const variables (eg. a = 10)
*/
// a = 10 //~ Does not give an error in non strict mode

const A = [1, 2, 3];
/*
	* const prevents reassignment of the array but not of array element :
	- Cannot reassign array //~ Error A = [3,4,5]
	- But can change values of elements stored in it
*/
A[0] = 10; // Not error
console.log(A);

/*
	* Using Object.freeze()
	- It prevents modification of elements as well
	- ALthough it prevents values from getting changed, it does not give any error
	  if one tries to do so.
	- We are able to call Object.freeze() on an array because arrays in JS are nothing but
	  objects.
*/
const B = [1, 2, 3];
Object.freeze(B);
// B[0] = 10; //~ Does not give an error in non strict mode
console.log(B);

/*
	- Similar to const arrays we can change keys and properties of const objects
	- To prevent this from happening we can similarly call Object.freeze()
*/
const car = { name: "santro", model: 2011 }; // prettier-ignore
Object.freeze(car);
// car.name = "zen"; //~ Does not give an error in non strict mode
console.log(car);

