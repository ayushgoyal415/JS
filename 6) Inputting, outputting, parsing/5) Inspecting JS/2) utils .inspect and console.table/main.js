const car = {
	zen: {
		speed: 80,
		average: 25,
		price: 1.1,
		main_features: ["compact", "cheap"]
	},
	santro: {
		speed: 100,
		average: 20,
		price: 2.1,
		main_features: ["spacy", "comfort"]
	}
};

const util = require("util");

console.log(car);
console.log(util.inspect(car, { showHidden: false, depth: null, colors: true }));
// Shortcut util.inspect(car, false, null, true)

// Very good way of inspecting is console.table
console.table(car);
