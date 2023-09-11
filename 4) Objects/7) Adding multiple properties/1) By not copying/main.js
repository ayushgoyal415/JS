{
	// 1) Using .assign() -> receives two objects as arguments
	// First object is the target object and the second object is source object
	// Here { speed: 80 , price: 120000,  average: 23.4 } is the source object
	const car = { name: "zen" };
	Object.assign(car, { speed: 80, price: 120000, average: 23.4 });
	console.log(car);
}
{
	// 2) Using spread (...) operator -> can work only on non const target object
	// Basically first breaking car into pieces and then adding new properties.
	let car = { name: "zen" };
	car = { ...car, speed: 80, price: 100000, average: 23.4 };
	console.log(car);
}
