let n = 12;
console.log(`Number used is ${n}..`);

function verify_number() {
  //. Creating and returning a promise
  return new Promise(
    //. Promise constructor used a callback fxn to initialize a promise
    function (resolve, reject) {
      if (n % 2 == 0) resolve("An even number");
      reject(new Error("Not an even number"));
    }
  );
}

verify_number()
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error.message));
