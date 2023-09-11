/*
    > Using Object.assign() -> Performs shallow cloning

    - The Object. assign() method is used to copy the values of all 'enumerable' own
      properties from one or more source objects to a target object.
    - The first arg is the target object and rest of the args are source object(s).
    - Object.assign() assigns the value to first object and also returns back the final
      object. We can store this returned object in another object thus creating a copy.

    ~ Remember to keep {} (empty object) as the first argument and the original object
    ~ as second argument to prevent mutating the original object

	~ Limitations
     - Performs shallow copy (ie. non primitive data types are referenced)
	 - Copy only the 'enumerable' own properties (cannot copy non enumerable properties
	   and cannot copy prototype properties.
     - Copies only the property names and values (cannot copy property attributes)
     - Not good for adding properties to prototypes as it overwrites original values in target :
    	It uses [[Get]] on the source and [[Set]] on the target, so it will invoke getters &
    	setters. Therefore it assigns properties, versus copying or defining new properties.
    	This may make it unsuitable for merging new properties into a prototype if the merge
    	sources contain getters. That is, if we have matching keys in both target and source
    	objects, the matching keys in the second object would override the first after assigning.
    
*/

//* JSON incompatible properties can be cloned
{
	const org = {
		gear: undefined,
		set_gear(n) {
			this.gear = n;
		},
		last_updated: new Date(),
		name: new RegExp("/*hello$/")
	};

	const dup = Object.assign({}, org);

	console.log("Original Object : ", org);
	console.log("Duplicate Object : ", dup, "\n");
}

//* Circular reference is preserved
{
	const org = { name: "zen" };
	org.speed = 80;

	const dup = Object.assign({}, org);

	console.log("Original Object : ", org);
	console.log("Duplicate Object : ", dup, "\n");
}

//~ Deep cloning cannot be achieved
{
	const org = { a: 1, b: { c: 2, d: 3 }, e: [4, 5] };

	const dup = Object.assign({}, org);

	dup.a = null;
	dup.b.c = null;
	dup.e[0] = null;

	console.log("Original Object : ", org);
	console.log("Duplicate Object : ", dup, "\n");
}

//~ Properties on the prototype chain and non-enumerable properties cannot be copied
{
	const org = Object.create(
		{ name: "zen" },
		{
			name: { value: 120, enumerable: true, configurable: true, writable: true },
			speed: { value: 120, enumerable: false, configurable: true, writable: true }
		}
	);

	const dup = Object.assign({}, org);

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

	const dup = Object.assign({}, org);

	const res1 = Object.getOwnPropertyDescriptor(org, "name").writable;
	const res2 = Object.getOwnPropertyDescriptor(dup, "name").writable;

	console.log("Original Object (is_name_writable) : ", res1);
	console.log("Duplicate Object (is_name_writable) : ", res2, "\n");
}

//~ Overwrites original values in target
{
	//. The properties are overwritten by other objects that have the same properties later in the parameters order.
	const o1 = { a: 1, b: 1, c: 1 };
	const o2 = { b: 2, c: 2 };
	const o3 = { c: 3 };

	const dup = Object.assign({}, o1, o2, o3);
	console.log(dup, "\n");
}