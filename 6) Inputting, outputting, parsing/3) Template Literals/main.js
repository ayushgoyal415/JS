const cars = {
	zen: {
		specs: {
			average: 23.5,
			"main features": ["Compact", " Cheap", " Diesel version"],
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
			"main features": ["Smart Look", " Spacy", " Stereo support"],
			cheap: false,
		},
		distributions: {
			released: 2007,
			units_sold: 1.5,
			price: 400000,
		},
	},
};

const {specs : {"main features" : mf}, distributions : {price}} = cars.zen; // prettier-ignore

const A = `
- Hello. I am a zen. My main features are : ${mf}
- All of that available at an affordable price of Rs ${price}/-
`;

console.log(A);
