const addon = { speed: 80, price: 120000, average: 23.4 };

{
	// 1) Using .assign()
	const car = { name: "zen" };
	Object.assign(car, addon);
	console.log(car);
}
{
	// 2) Using spread (...) operator -> can work only on non const target object
	let car = { name: "zen" };
	car = { ...car, ...addon };
	console.log(car);
}
{
	// 3) Using for-in loop (can only be used to copy enumerable properties)
	const car = { name: "zen" };
	for (let i in addon) car[i] = addon[i];
	console.log(car);
}
