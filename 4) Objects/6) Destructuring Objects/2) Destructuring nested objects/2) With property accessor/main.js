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

// Combining destructuring with property accessor (ie. dot notation) helps to shorten
// the code

// Destructuring specs using VIS
const { specs } = cars.zen;

// Destructuring 'main features' using an alias 'A'
const { "main features": A } = cars.zen.specs;

// Destructuring 'main features' using an alias 'B'
const { 0: B } = cars.zen.specs["main features"];

console.log(specs);
console.log(A);
console.log(B);
