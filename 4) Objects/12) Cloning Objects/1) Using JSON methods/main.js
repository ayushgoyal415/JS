/*
    The JSON.stringify() method is used to create a JSON string out of any data type.
    (int, bool, null, undefined, object, array). JSON.parse() converts a JSON string
    back to a JSON object.

    > Uses of JSON.stringify and JSON.parse

    While developing an application using JS, many times it is needed to serialize.
    the data to strings for storing the data into a database or for sending the data
    to an API or web server. The data has to be in the form of strings. This conversion
    of an object to a string can be easily done with the help of the JSON.stringify.

    * Storing and retrieving data from localStorage or sessionStorage
      - localStorage and sessionStorage properties allow us to save key/value pairs
        in a web browser.
      - Local storage can only save strings, so storing objects requires that they be
        converted into strings using JSON.stringify before storing them. You can’t ask
        local storage to store an object directly because it will store “[object Object]”.
      - Also, we need to run JSON.parse when retrieving the data from local storage.

    * Http request to fetch the data from a server
      - When retrieving the response from an API, by default the response comes in the
        string format, and we need to parse it into JSON.

    * Sending post requests to servers
      - We need to stringify the body object when sending a POST request to the server.
      - Similarly the servers (web/Express API) needs to parse the POST body to JSON.

    > Deep cloning a JavaScript object
      There are different ways to perform a shallow copy of an object (ie non primitive
	  data types are referenced eg. array, functions, objects), but by using JSON, we
	  can create a deep clone of an object in JS.

      ~ Limitations
      - copies only JSON compatible data (does not copy functions, undefined, date or regexp)
	  - Copy only the 'enumerable' own properties (cannot copy non enumerable properties
	    and cannot copy prototype properties.
	  - Copies only the property names and values (cannot copy property attributes)

    Note : For copying property definitions (including their enumerability) into prototypes,
	use Object.getOwnPropertyDescriptor() and Object.defineProperty() instead.
    
*/

//* Deep cloning can be achieved
{
	const org = { a: 1, b: { c: 2, d: 3 }, e: [4, 5] };

	const dup = JSON.parse(JSON.stringify(org));

	dup.a = null;
	dup.b.c = null;
	dup.e[0] = null;

	console.log("Original Object : ", org);
	console.log("Duplicate Object : ", dup, "\n");
}

//* Circular reference is preserved
{
	const org = { name : "zen" };
	org.speed = 80;

	const dup = JSON.parse(JSON.stringify(org));

	console.log("Original Object : ", org);
	console.log("Duplicate Object : ", dup, "\n");
}

//~ JSON incompatible properties cannot be cloned
{
	const org = {
		gear: undefined,
		set_gear(n) {
			this.gear = n;
		},
		last_updated: new Date(),
		name: new RegExp("/*hello$/")
	};

	const dup = JSON.parse(JSON.stringify(org));

	console.log("Original Object : ", org);
	console.log("Duplicate Object : ", dup, "\n");
}

//~ Properties on the prototype chain and non-enumerable properties cannot be cloned
{
	/*
	* Object.create() accepts two arguments:
        
    Arg 1 : An object to add to the prototype chain of the target object.
    Arg 2 : A property descriptor map listing the properties that we want to add to the
    target object as object's own properties.
    
    If we don't define anything inside a property descriptor map, then by default, these
    properties are flagged as non configurable, non enumerable and non writable.

    Returns an object that contains Arg1 object on prototype chain and has own properties
    defined in Arg2 (property descriptor map)
*/
	const org = Object.create(
		{ name: "zen" },
		{
			name: { value: 120, enumerable: true, configurable: true, writable: true },
			speed: { value: 120, enumerable: false, configurable: true, writable: true }
		}
	);

	const dup = JSON.parse(JSON.stringify(org));

	const org_props = Object.getOwnPropertyNames(org);
	const dup_props = Object.getOwnPropertyNames(dup);
	const org_proto_props = Object.getOwnPropertyNames(org.__proto__);
	const dup_proto_props = Object.getOwnPropertyNames(dup.__proto__);

	console.log("Original Object Properties : ", org_props);
	console.log("Duplicate Object Properties : ", dup_props, "\n");

	console.log("Original Object Prototype Properties : ", org_proto_props);
	console.log("Duplicate Object Prototype Properties : ", dup_proto_props, "\n");
}

//~ Property attributes cannot be cloned
{
	const org = {};
	Object.defineProperty(org, "name", { value: "alto", writable: false, enumerable: true });

	const dup = JSON.parse(JSON.stringify(org));

	const res1 = Object.getOwnPropertyDescriptor(org, "name").writable;
	const res2 = Object.getOwnPropertyDescriptor(dup, "name").writable;

	console.log("Original Object (is_name_writable) : ", res1);
	console.log("Duplicate Object (is_name_writable) : ", res2, "\n");
}