/*
    * Javascript objects are basically key-value pairs aka property-value pairs.
    - Keys are stored as strings. Even if we don't use quotes around key name, JS
      treats them as strings implicitly. Hence we can use anything as a key name -
        - string, integer, multi-word name.
    - Values can be of any type ->
        string, integer, bool, null, undefined, array, object, function
    
    ~ JS is an object-based language based on prototypes rather than being class-based

    > JS objects can be initialized in 4 ways ->
        
    * Using object literal
    * Using new Object()
    * Function initializer (aks ES5 class)
    * Using class

    > Object Literal
    Object literal is list of key value pairs, separated by a colon, enclosed in curly braces.

    ~ Object literals do not allow creation of object instances. That is we cannot make multiple
    ~ cars using object literals but we can surely use them to act as a prototype for other
    ~ objects by using Object.create().

    Basically object literals can be used as follows :
    - As a singleton (ie. a single instance)
    - As a prototype that can be inherited by other objects.

    > new Object()
    Very similar to object literal. Many recommend using object literal instead.

    > Function initializer
    - Very similar to a class constructor
    - Allows creation of multiple instances of objects like a class.

    ~ An object created by using any of the above methods have all the properties of the global
    ~ object. 
*/

{
  //* Object literal

  const car = { name: "zen", speed: 100, average: 23 };
  //~ Properties are unique. That is, duplicate property names are not allowed.
  //~ If one tries to add a property again then the second property overwrites the
  //~ previous property.

  // car2 inheriting car as prototype
  // This function creates a new prototype for car2 with value set to car.
  const car2 = Object.create(car);

  // Can use this also (probably deprecated)
  // const car2 = {};
  // car2.__proto__ = car;

  // Getting prototype chain of car2
  let obj = car2;
  do {
    obj = obj.__proto__; // can also use obj = Object,getPrototypeOf(obj)
    console.log(obj);
  } while (obj);
}
{
  //* new Object()

  const car = new Object({ name: "zen", speed: 100, average: 23 });
  console.log(car);
}
{
  //* Function initializer (ES5 class)

  function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  const person_1 = new Person("Ram", "30", "Male");
  console.log(typeof person_1);

  let obj = person_1;
  do {
    obj = obj.__proto__; // can also use obj = Object,getPrototypeOf(obj)
    console.log(obj);
  } while (obj);
}
