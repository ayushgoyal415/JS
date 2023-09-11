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

// Function to add a car to db (this function also returns a promise)
function add_car(car) {
  return new Promise((resolve, reject) => {
    try {
      cars.push(car);
      resolve();
    } catch (error) {
      reject(error.name);
    }
  });
}

add_car({ name: "verna", speed: 140, average: 17 })
  .then(render)
  .catch(err => console.error(err));
