const cars = {
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

// Destructuring an object while its being passed into a function as an argument is commonly
// used while managing API calls
// This helps us save memory by bringing only the required properties into the function.

const fun = ({ zen: { specs: { average, cheap } } }) => console.log(average, cheap); // prettier-ignore
fun(cars); //* Without using property accessor

const fun2 = ({ average, cheap }) => console.log(average, cheap);
fun2(cars.zen.specs); //* Using property accessor
