function Animal(name, age) {
  this.name = name;
  this.age = age;
}

// Adding properties to prototype of an ES5 class 'Animal'
// All instances(objects) made from class 'Animal' will now have these properties in object.__proto__
Object.assign(Animal.prototype, {
  get_info() {
    return `${this.name} is ${this.age} years old.`;
  },
  jump() {
    return `${this.name} is jumping`;
  }
});

const animal = new Animal("Tiger", 23);
console.log(animal);
console.log(animal.get_info());
