const cars = [
	{
		name: "zen",
		"main features": ["Compact", " Diesel version"],
		cheap: true
	},
	{
		name: "santro",
		"main features": ["Smart Look", " Spacy", " Stereo support"],
		cheap: true
	},
	{
		name: "verna",
		"main features": ["Speed", " Comfort"],
		cheap: false
	}
];

// Write car names along with their main features
console.log(cars.map((val, idx, arr) => `${val.name} : ${val["main features"]}`));

// Find and return the names of cheap cars
console.log(cars.filter((val, idx, arr) => val.cheap).map((val, idx, arr) => val.name));

// Can also do the same thing with reduce (more optimized)
console.log(
	cars.reduce((acc, val, idx, arr) => {
		if (val.cheap) acc.push(val.name);
		return acc;
	}, [])
);

// Find the number of cheap cars
console.log(
	cars.reduce((acc, val, idx, arr) => {
		if (val.cheap) acc++;
		return acc;
	}, 0)
);