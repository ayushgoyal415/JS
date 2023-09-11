//---------------------------------------------------------------------------------
// Accessing module from another file
// (./) for current folder
// (./  / ) for subfolder
// (../) for parent folder

const display = require("../_my_modules/exp_1");
//---------------------------------------------------------------------------------

//---------------------------------------------------------------------------------
// To check what this display is, we can console.log it
console.log(display);

// As you can see this display is an object which has a property named 'display'
// The value stored in property 'display' is a function 'display'
//---------------------------------------------------------------------------------

//---------------------------------------------------------------------------------
// Accessing the value stored in the property display
console.log(display.display);
//---------------------------------------------------------------------------------

//---------------------------------------------------------------------------------
// Accessing 'display' function from object 'display'
display.display("Ayush");
//---------------------------------------------------------------------------------

// As you can see this functions perfectly but the problem here is that if we wanted
// to export only one function from module, then why did we export it in form of obj

// We could have simply exported 'display' function as a property of exports rather
// than exporting it after wrapping it in another object 'display'
