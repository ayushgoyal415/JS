//* .call()
{
	/*
        . Function.call() -> Calls a method of an object, substituting another
        . object for the current object.

        . Helps to call a function from one object for a foreign object using
        . 'this' keyword
    */

	const obj = {
		name: "alto",
		gear: 4,
		speed: 80,
		get_info() {
			return `Name : ${this.name}, speed : ${this.speed}`;
		},
		set_gear(n, max_gear) {
			this.max_gear = max_gear;
			this.gear = Math.min(this.gear + n, max_gear);
			this.speed = this.gear * 20;
		}
	};

	const car1 = { name: "zen", gear: 1, speed: 20 };
	const car2 = { name: "santro", gear: 1, speed: 20 };

	console.log(obj.get_info.call(car1));
	console.log(obj.get_info.call(car2));

	//. Can accept multiple arguments but the first argument is the foreign object
	obj.set_gear.call(car1, 3, 5);
	obj.set_gear.call(car2, 10, 6);

	console.log(car1.gear, car1.max_gear, car1.speed);
	console.log(car2.gear, car2.max_gear, car2.speed);
}

//* .apply()
{
	/*
        . Function.apply() -> same as .call(). The only difference being that it accepts
        . an array of arguments.

        . eg. using Math.max()

        ~ Note that the first argument does not need to be an object
    */

	// Calculating max element from an array using .apply()
	const A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	console.log(Math.max.apply(null, A));

	// Can also use spread operator
	console.log(Math.max(...A));
	console.log(Math.max.call(null, ...A));
}

//* bind()
{
	/*
        . Function.bind() -> For a given function, creates a bound function that has the
        . same body as the original function. The this object of the bound function is
        . associated with the specified object, and has the specified initial parameters.

        . When a function is used as a callback, this is lost.
        . In such cases .bind() helps to carry the this info along with it
    */

	const obj = {
		name: "alto",
		speed: 80,
		get_info() {
			console.log(`Name : ${this.name}, speed : ${this.speed}`);
		}
	};

	const car1 = { name: "zen", speed: 100 };

	// Does not preserve 'this'
	setTimeout(obj.get_info, 500);

	// Preserves 'this'
	setTimeout(obj.get_info.bind(obj), 500);

	// Binding to another object
	setTimeout(obj.get_info.bind(car1), 500);
}