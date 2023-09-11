let n = 6;
console.log(`Number used is ${n}..`);

const fun1 = n =>
  new Promise((res, rej) => {
    if (n % 2 == 0) res("Divisible by 2");
    rej(new Error("Not divisible by 2"));
  });

const fun2 = n =>
  new Promise((res, rej) => {
    if (n % 4 == 0) res("Divisible by 4");
    rej(new Error("Not divisible by 4"));
  });

const fun3 = n =>
  new Promise((res, rej) => {
    if (n % 8 == 0) res("Divisible by 8");
    rej(new Error("Not divisible by 8"));
  });

/*

  Promise.all()
  
  - receives an array of Promise returning functions
  - returns a resolved Promise with an array of results if all Promises resolve
  - returns a rejected as soon as any Promise is rejected

*/

Promise.all([fun1(n), fun2(n), fun3(n)])
  .then(results => console.log(results))
  .catch(err => console.log(err.message));
