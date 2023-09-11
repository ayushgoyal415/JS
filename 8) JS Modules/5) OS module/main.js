const os = require("os");

const A = os.totalmem();
const B = os.freemem();


console.log(`Total Memory : ${A}`);
console.log(`Free Memory : ${B}`);
