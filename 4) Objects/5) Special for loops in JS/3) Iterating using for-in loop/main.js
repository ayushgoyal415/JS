const cars = [
	{
		name: "zen",
		model: 2003,
		average: 23.5,
		"main features": ["Compact", "Cheap", "Diesel version"],
		cheap: true,
	},
	{
		name: "santro",
		model: 2007,
		"main features": ["Smart Look", "Spacy", "Stereo support"],
		cheap: false,
	},
	{
		name: "alto",
		model: 2005,
		cheap: false,
	},
];

// Function that returns an array containing names of old cars (ie. model <= 2006)
function old_cars() {
	const ans = [];
	for (let idx in cars) {
		if (cars[idx].model <= 2006) {
			ans.push(cars[idx].name);
		}
	}
	return ans;
}
console.log(old_cars());

// Function that returns an array containing names of properties of a specified car
function list_properties(name) {
	const ans = [];
	for (let idx in cars) {
		if (cars[idx].name == name) {
			for (let prop in cars[idx]) {
				ans.push(prop);
			}
		}
	}
	return ans;
}
console.log(list_properties("zen"));

// Function that returns the name of the car with the specified 'main feature'
function find_feature(s) {
	for (let idx in cars) {
		for (let idx2 in cars[idx]["main features"]) {
			if (cars[idx]["main features"][idx2] == s) {
				return cars[idx].name;
			}
		}
	}
}
console.log(find_feature("Spacy"));
