{
	// Swapping whole objects -> can only be performed on non const objects
	let car1 = { name: "alto", price: 100000, average: 25 };
	let car2 = { name: "santro", price: 200000, average: 15 };

	[car1, car2] = [car2, car1]; // Swapping whole objects

	console.log("car1 : ", car1);
	console.log("car2 : ", car2);
}
{
	// Swapping some properties -> can be performed on var/let/const objects
	const car1 = { name: "alto", price: 100000, average: 25 };
	const car2 = { name: "santro", price: 200000, average: 15 };

	[car1.name, car2.name] = [car2.name, car1.name]; // Swapping name property

	console.log("car1 : ", car1);
	console.log("car2 : ", car2);
}
{
	// Swapping elements within an array
	const A = [1, 2, 3, 4, 5];
	let n = A.length;
	for (let i = 0; i < n / 2; i++) {
		[A[i], A[n - 1 - i]] = [A[n - 1 - i], A[i]];
	}
	console.log("Reversed Array: ", A);
}
