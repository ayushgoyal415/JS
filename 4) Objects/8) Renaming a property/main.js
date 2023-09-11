const car = {
	name: "zen",
	speed: 80,
	price: 120000,
	average: 23.4,
	comfort: true,
};
console.log(car);

// Here want to rename comfort to cheap
const old_key = "comfort",
	new_key = "cheap";

// This single line code is possible because Object.assign() returns a
// reference to the object to which it is assigning the value.
delete Object.assign(car, {[new_key]: car[old_key]})[old_key];
console.log(car);
