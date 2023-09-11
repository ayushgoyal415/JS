const cars = [
	{
		name: "zen",
		released: 2003,
		average: 23.5,
		"main features": ["Compact", "Cheap", "Diesel version"],
		cheap: true,
	},
	{
		name: "santro",
		released: 2007,
		average: 13.7,
		"main features": ["Smart Look", "Spacy", "Stereo support"],
		cheap: true,
	},
	{
		name: "verna",
		released: 2015,
		average: 17.5,
		"main features": ["Speed", "Comfort"],
		cheap: false,
	},
];

// Without using property accessor
{
	const { 0: { released } } = cars; // prettier-ignore
	const { 0: { 'main features': { 0 : dest1, 1 : dest2 } } } = cars; // prettier-ignore
	console.log(released, dest1, dest2);
}

// By using property accessor
{
	const { released } = cars[0];
	const { 0: dest1, 1: dest2 } = cars[0]["main features"];
	console.log(released, dest1, dest2);
}

// Destructuring names of all cars using for-of loop
for (const { name } of cars) console.log(name);
