/*
    > JSON (JS Object Notation) format

    JSON is a standard text-based format for representing structured data based on JS object
    syntax. It is commonly used for transmitting data in web applications (e.g., sending some
    data from the server to the client, so it can be displayed on a web page, or vice versa).
    
    Even though it closely resembles JS object literal syntax, it can be used independently
    from JS, and many programming environments feature the ability to parse and generate JSON.
    
    * Differences between object literal syntax and JSON format
    - JSON only permits property definition using {"property": value} syntax where,
        - property name must be double quoted (even single quotes are not allowed)
        - Definition cannot be shorthand (ie. cannot use OPIS)
        - Computed property names are not allowed

    - JSON values can only include -
        - strings, integers, booleans, null, arrays, another JSON object
        - JSON cannot express functions or non-plain objects like Date or RegExp
        - values don't need to be in double quotes (except for strings)

    - JSON "__proto__" is a normal property key -
        - In an object literal, __proto__ sets the object's prototype

    JSON is a strict subset of the object literal syntax, meaning that every valid
    JSON text can be parsed as an object literal, and would not cause any syntax errors.

*/

// prettier-ignore
const cars = {
	"zen": {
		"specs": {
			"average": 23.5,
			"main features": ["Compact", "Cheap", "Diesel version"],
			"cheap": true,
		}
	},
	"santro": {
		"specs": {
			"average": 13.7,
			"main features": ["Smart Look", "Spacy", "Stereo support"],
			"cheap": false,
		},
	},
};
