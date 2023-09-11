const cars = [
  { name: "zen", speed: 100, average: 20 },
  { name: "santro", speed: 120, average: 15 }
];

// Function to render cars on the page
function render() {
  const names = cars.reduce((acc, car) => {
    acc += /*HTML*/ `<li>${car.name}</li>`;
    return acc;
  }, "");
  document.body.innerHTML = names;
}

// Function to add a car to db (this function also calls render() to render 
// the list of car names once new car is added to the db)
function add_car(car, callback) {
  cars.push(car);
  callback();
}

add_car({ name: "verna", speed: 140, average: 17 }, render);
