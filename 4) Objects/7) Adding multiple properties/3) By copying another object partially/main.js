const addon = { speed: 80, price: 120000, average: 23.4 };
{
	// 1) Using .assign()
	const car = { name: "zen" };
	Object.assign(car, { speed: addon.speed, price: addon.price });
	console.log(car);
}
{
	// 2) By destructuring using VIS and then using OPIS while assigning
	const car = { name: "zen" };
	const { speed, price } = addon;
	Object.assign(car, { speed, price });
	console.log(car);
}
{
	// 3) Using spread (...) operator -> can work only on non const target object
	let car = { name: "zen" };
	car = { ...car, speed: addon.speed, price: addon.price };
	console.log(car);
}
{
	// 4) By destructuring using VIS and then using OPIS while spreading
	let car = { name: "zen" };
	const { speed, price } = addon;
	car = { ...car, speed, price };
	console.log(car);
}
