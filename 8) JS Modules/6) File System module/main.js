const fs = require("fs");

// Using sync form of readdir method
const result = fs.readdirSync("./");
console.log("Sync Result : ", result);

// Using async form of readdir method
// All async methods need a second argument as a call back function
// First argument in call function is error
// Second argument is the result of operation
fs.readdir("./", function (err, result) {
	if (err) console.log("Error :", err);
	else console.log("Async Result :", result);
});
