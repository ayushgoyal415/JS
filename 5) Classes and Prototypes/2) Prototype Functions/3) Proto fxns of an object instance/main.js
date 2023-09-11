const obj = { name: "zen", speed: 80 };

Object.defineProperty(obj, "speed", { enumerable: false });
const obj2 = Object.create(obj, {});

//. Object.hasOwnProperty()
console.log(obj.hasOwnProperty("name"));
console.log(obj.isPrototypeOf(obj2));
console.log(obj.propertyIsEnumerable("speed"));

//. There are other useless functions as well
