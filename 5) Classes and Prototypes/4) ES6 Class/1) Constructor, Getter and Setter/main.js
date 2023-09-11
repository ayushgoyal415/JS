class Car {
  constructor(name) {
    this.m_name = name;
  }
  // Has default getters and setters. Both must be named same
  get f_name() {
    return this.m_name;
  }
  set f_name(name) {
    this.m_name = name;
  }
}

const car = new Car("zen");

// Invoking setters and getters as properties. No need to put () at end
console.log(car.f_name);
car.f_name = "Santro";
console.log(car.f_name);
console.log(car.m_name);