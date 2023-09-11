var car = {
	name: "zen",
	top_speed: 120,
	"is old": true,
	101: null,
};

console.log("Original Car : ", car);

//-----------------------------------------------------------------------------------------
// Accessing keys (using [''] or . operator)
//-----------------------------------------------------------------------------------------
// [''] operator : access multi-word keys and numeric keys
// . operator : access multi-word keys
// Returns undefined if the key does not exist
//-----------------------------------------------------------------------------------------
console.log(car.name, car["is old"], car[101]);

//-----------------------------------------------------------------------------------------
// Accessing keys using variables (requires variable name within [])
//-----------------------------------------------------------------------------------------
var A = "name";
console.log(car[A]);

//-----------------------------------------------------------------------------------------
// Using assignment operator (=)
//-----------------------------------------------------------------------------------------
// Updates the value of the key if a key already exists
car.name = "santro";
car["is old"] = false;
var A = "top_speed";
car[A] = 140;
console.log("Updated Car : ", car);

// Adds a new key if such a key does not exist
car.horn = "loud";
car["fuel capacity"] = 50;
A = "price";
car[A] = 400000;
console.log("Updated Car : ", car);

//-----------------------------------------------------------------------------------------
// Deleting a key (using delete keyword) -> Does nothing if a key does not exist
//-----------------------------------------------------------------------------------------
delete car.horn;
delete car["fuel capacity"];
delete car[A];
console.log("Updated Car : ", car);

/*
    > obj.hasOwnProperty()
    * Checks whether a key is there or not -> using .hasOwnProperty(key) -> return bool
        Note it uses == operator (so does implicit type conversion)
    * Supplying Argument :
        - Integers - can pass as it is or in quotes
        - Strings - pass in double quote
        - Variables - pass without quotes
*/

//-----------------------------------------------------------------------------------------
// console.log(Car.hasOwnProperty(name)); // This does not work, treats name as a variable
// console.log(Car.hasOwnProperty('A')); // This looks for key named A

console.log(car.hasOwnProperty("101"));
console.log(car.hasOwnProperty(101));
console.log(car.hasOwnProperty("name"));
A = "top_speed";
console.log(car.hasOwnProperty(A));
