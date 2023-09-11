var cars = {
	zen: {
		specs: {
			average: 23.5,
			"main features": ["Compact", "Cheap", "Diesel version"],
			cheap: true,
		},
		distributions: {
			released: 2003,
			units_sold: 1.2,
			price: 200000,
		},
	},
	santro: {
		specs: {
			average: 13.7,
			"main features": ["Smart Look", "Spacy", "Stereo support"],
			cheap: false,
		},
		distributions: {
			released: 2007,
			units_sold: 1.5,
			price: 400000,
		},
	},
};

// Without using property accessor
{
	const {
		zen: {
			specs: {
				average,
				"main features": { 0: dest },
			},
		},
	} = cars;
	console.log(average, dest);
}

// Using property accessor
{
	const { average, "main features": { 0: dest } } = cars.zen.specs; // prettier-ignore
	console.log(average, dest);
}
