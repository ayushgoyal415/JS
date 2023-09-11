/*
	DAS means that both the destructuring (ie property extraction) and variable assignment
	occurs in a single line.

	> const { destination variable(s) initialization framework } = Object;
	
	DAS helps to unpack values from from arrays, or properties from objects, into distinct
	destination variables in a cleaner way.

	When compared to property accessor (ie. using dot notation), DAS is a better way of accessing
	the object properties because DAS helps to cut short the code in length :
	- By using VIS (helps in concising by eliminating the need to write the same names again)
	- By giving the ability to extract multiple properties at once (in a single line of code)
	
	DAS can be implemented in different ways based on the method used to initialize the destination
	variable(s) :

	* Initializing destination variable(s) using variable initializer shorthand (VIS) :
    - The destination variable is initialized with the same name as the property name.
    - This helps in concising the code by eliminating the need to write the same names again.
	~ Properties with multi-word or numeric names cannot be destructured using VIS.
	  This is because, unlike JS object properties, the JS variables cannot have multi-word
	  or numeric names. In such cases we can initialize destination variables using an alias.

	  
    * Initializing destination variable(s) using an alias :
    - Here we assign an alias for the destination variable. In other words we explicitly assign
	  a custom name for the destination variable.


	* Initializing destination variable(s) by assigning default values :
	- Here the destination variable(s) is assigned a default value to fallback on to  ensure that
	  it is not left undefined if the object happens to lack the property specified.
	

	* Initializing destination variable(s) with an alias when the name of the property to extract
	* is not known beforehand (aka Dynamic Property name)
    - Here the name of the property to extract is not known beforehand. It is only known at runtime.
	~ In such cases the variables cannot be initialized using VIS as the property name is unknown.


	* Initializing a destination variable using rest (...) operator
	- Here the destination variable is assigned is assigned the un-destructured part of the object
	  (including the property names and values).
	- Basically the destination variable now contains an object literal for the un-destructured
	  segment of the original object.
	~ Rest operator can only be used at the end of a destructuring sequence

	* Destructuring into an existing variable (ie. a variable that is already initialized)
	- The variable should be non const type as const variables cannot be reassigned.
*/

const car = {
	name: "zen",
	price: 120000,
	speed: 100,
	average: 23,
	"main features": ["cheap", "compact"],
};

{
	/*
		*  Destructuring using VIS ->
		- Here 'price' is the property name from where we intend to extract the 'value' from.
		- Here the destination variable is initialized with the same name as the property name
		  i.e 'price'.
	*/
	const { price } = car;
	console.log(price);
	// const {main features} = car //~ Error while destructuring multi-word property
}
{
	/*
		* Destructuring using alias ->
		- Here 'price' is the property name from where we intend to extract the 'value' from.
		- Here 'dest1' is the alias for the destination variable.
	*/
	const { price: dest1 } = car;
	const { "main features": dest2 } = car; // No error while destructuring multi-word property
	console.log(dest1, dest2);
}
{
	//* Destructuring by defining default values for destination variables ->
	// Defining default values for destination variables initialized using VIS ->
	const { price = 100000, cheap = true } = car;
	console.log(price);
	console.log(cheap);

	// Defining default values for destination variables initialized using an alias ->
	const { "main features": dest1 = "compact", "main drawbacks": dest2 = "low ground clearance",} = car; // prettier-ignore
	console.log(dest1);
	console.log(dest2);
}
{
	/*
		* Destructuring when the name of the property is unknown (aka Dynamic Property name)
		- In the following example the name of the property to extract is concealed inside the
		  variable 'prop'. Hence first we need to get the property name from this variable and
		  then unpack the value to the destination variable (here 'dest' acting as an alias)
    */
	var prop = "price";
	const { [prop]: dest } = car; // Computing property name at runtime
	console.log(dest);
}
{
	/*
		* Destructuring using rest operator
		- Here the variable 'rest' is assigned to the un-destructured part of the original object.
		- That is, it contains the same object literal as the original object except for the
		  properties -> name and average which were already destructured.
	*/
	const { name, average, ...rest } = car;
	console.log(rest);

	/*
		* Copying the whole object using the rest operator
		~ Copying by using rest operator is not a good way of cloning an object
		- This is because the rest operator performs deep copy (ie. new memory allocation) only on
		  the un-nested data in the object. The nested data is simply shallow copied (ie. bitwise
		  copy where a new object is made by copying the memory address of the original object).

		- The above is also true for copying an object by using spread operator.
		
		- The better ways of cloning an object are by using JSON.stringify and JSON.parse methods.
	*/
	const { ...copy } = car;
	console.log(copy);
}
{
	// * Destructuring into an existing variable
	//~ Parentheses is necessary around DAS when destructuring without using let or const.
	let name;
	({ name } = car);
	console.log(name);
}
