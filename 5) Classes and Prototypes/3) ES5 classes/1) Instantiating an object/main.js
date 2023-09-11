// Defining an ES5 class (a function object initializer)
function Animal(name, age) {
  this.name = name;
  this.age = age;
}

// Creating an instance (object) from an ES5 class 'Animal'
const animal = new Animal("Tiger", 23);
console.log(animal);
