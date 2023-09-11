// prompt-sync is an external module that needs to be installed
const prompt = require("prompt-sync")();

// Prompt sync always returns a string
const num1 = prompt("Enter first number : ");
const num2 = prompt("Enter second number : ");

console.log(num1 + num2);
console.log(parseInt(num1) + parseInt(num2));
