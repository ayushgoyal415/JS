// Everything is same as Object.assign()

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

	const { ...dup } = org;

	console.log("Original Object : ", org);
	console.log("Duplicate Object : ", dup, "\n");
}

//* Circular reference is preserved
{
	const org = { name: "zen" };
	org.speed = 80;

	const {...dup} = org;

	console.log("Original Object : ", org);
	console.log("Duplicate Object : ", dup, "\n");
}

//~ Deep cloning cannot be achieved
{
	const org = { a: 1, b: { c: 2, d: 3 }, e: [4, 5] };

	const {...dup} = org;

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

	const { ...dup } = org;

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

	const { ...dup } = org;

	const res1 = Object.getOwnPropertyDescriptor(org, "name").writable;
	const res2 = Object.getOwnPropertyDescriptor(dup, "name").writable;

	console.log("Original Object (is_name_writable) : ", res1);
	console.log("Duplicate Object (is_name_writable) : ", res2, "\n");
}
