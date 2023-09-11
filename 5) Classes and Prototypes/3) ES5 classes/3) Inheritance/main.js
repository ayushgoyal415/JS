// Defining in ES5 class with properties in prototype chain
function Animal(name, age) {
  this.name = name;
  this.age = age;
}
Object.assign(Animal.prototype, 
  {
    get_info() { return `${this.name} is ${this.age} years old.`; },
    jump() { console.log(`${this.name} is jumping`); }
  }
); // prettier-ignore

// Defining another ES5 class which inherits the prototype properties from 'Animal'
function Cat(name, age) {
  this.name = name;
  this.age = age;
}
Cat.prototype = Object.create(Animal.prototype);

const cat = new Cat("Tom", 12);
console.log(cat.get_info());
