const cars = {
	zen: {
		released: 2003,
		price: 200000,
		"main features": ["Compact", "Cheap", "Diesel version"],
	},
	santro: {
		released: 2007,
		"main features": ["Smart Look"],
	},
	alto: {
		price: 150000,
	},
};

// Making a copy of Vehicles object
const cars_copy = JSON.parse(JSON.stringify(cars));

//---------------------------------------------------------------------------
// Make the following function
//---------------------------------------------------------------------------
// Args : Car name, key, value
// 1) If the arg value is empty then it should delete the arg key-value pair
// 2) If we have key of 'main features' then we add a new value to this array
// 3) If the car does not have the arg key then we add the arg key-value pair
//    If the car has the arg key then we update the value with the arg value
//---------------------------------------------------------------------------

function update(car, key, val) {
	if (val === "") {
		delete cars[car][key];
	} else if (key === "main features") {
		// Fancy way of creating a key if it does not exist otherwise
		// retaining info already stored in it
		cars[car][key] = cars[car][key] || [];
		cars[car][key].push(val);
	} else {
		// This creates the key if it does not already exist otherwise it
		// updates the key
		cars[car][key] = val;
	}
}

update("zen", "released", 2007);
update("santro", "main features", "spacy");
update("alto", "main features", "easy spare parts");
update("alto", "released", 2005);
update("alto", "price", "");

console.log(cars);
