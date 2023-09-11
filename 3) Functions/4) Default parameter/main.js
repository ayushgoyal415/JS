// In case a parameter is not passed we need a backup to execute the function
// Setting default parameter values : (a = 1) and (b = 1)
const add = (a = 1, b = 1) => {
	return a + b;
};

// If no argument is sent, it uses default parameter value for both 'a' and 'b'
console.log(add());

// If only one argument is sent, it uses the default parameter value for 'b'
console.log(add(5));
