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

// Destructuring 'zen' using VIS
const { zen } = cars;

// Destructuring 'specs' using VIS
const { zen: { specs } } = cars; // prettier-ignore

// Destructuring 'main features' using an alias 'A'
const { zen: { specs: { "main features": A } } } = cars; // prettier-ignore

// Destructuring 'main feature'[0] using an alias 'B'
const {zen: {specs: { "main features": { 0: B } } } } = cars; // prettier-ignore

console.log(zen);
console.log(specs);
console.log(A);
console.log(B);
