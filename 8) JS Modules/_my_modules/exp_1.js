function display(s) {
	console.log("Hello " + s);
}

// Making an property named 'display' inside object module
// The value stored in property is the function 'display'
module.exports.display = display;
