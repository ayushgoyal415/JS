/*
    It takes away most of the shortcomings of JSON.stringify(). But it still has some problems :
     - cannot clone non enumerable and prototype chain properties
     - cannot clone functions
     - cannot clone some other non cloneable objects (eg. Error, DOM nodes)
     - Property attributes cannot be cloned
*/


//* Deep cloning can be achieved
{
	const org = { a: 1, b: { c: 2, d: 3 }, e: [4, 5] };

	const dup = structuredClone(org);

	dup.a = null;
	dup.b.c = null;
	dup.e[0] = null;

	console.log("Original Object : ", org);
	console.log("Duplicate Object : ", dup, "\n");
}

//* Circular reference is preserved
{
	const org = { name: "zen" };
	org.speed = 80;

	const dup = structuredClone(org);

	console.log("Original Object : ", org);
	console.log("Duplicate Object : ", dup, "\n");
}

//* JSON incompatible properties can be cloned (except functions)
{
	const org = {
		gear: undefined,
		last_updated: new Date(),
		name: new RegExp("/*hello$/")
	};

	const dup = structuredClone(org);

	console.log("Original Object : ", org);
	console.log("Duplicate Object : ", dup, "\n");
}

//~ Properties on the prototype chain and non-enumerable properties cannot be cloned
{
	const org = Object.create(
		{ name: "zen" },
		{
			name: { value: 120, enumerable: true, configurable: true, writable: true },
			speed: { value: 120, enumerable: false, configurable: true, writable: true }
		}
	);

	const dup = structuredClone(org);

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

	const dup = structuredClone(org);

	const res1 = Object.getOwnPropertyDescriptor(org, "name").writable;
	const res2 = Object.getOwnPropertyDescriptor(dup, "name").writable;

	console.log("Original Object (is_name_writable) : ", res1);
	console.log("Duplicate Object (is_name_writable) : ", res2, "\n");
}
