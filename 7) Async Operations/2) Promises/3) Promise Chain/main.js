//---------------------------------------------------------------------------
// Things to keep in mind while making a promise chain ->
//---------------------------------------------------------------------------
// 1) DON'T FORGET TO RETURN data -> the data returned can be accessed in
// the parameters of the next .then(). It is generally recommended to return
// data so as to maintain the flow of data down the chain.

// 2) .catch() -> Must include to handle errors -> If a promise has returned
// an error then all the then() statements will be skipped until a catch
// statement is encountered which will then be executed. Thus if there is only
// one catch statement at the end of the chain, it will handle the errors for
// all the promises in the entire chain.

// 3) If there is a then() statement following a catch() statement, it will
// always be executed, no matter whether the catch was executed or not.

let n = 12;
console.log(`Number used is ${n}..`);

(function () {
  return new Promise((res, rej) => {
    if (n % 2 == 0) res(n); //. This returns n to the next member in the chain
    rej(new Error("Not divisible by 2")); //. This return error
  });
})()
  .then(n => {
    return new Promise((res, rej) => {
      if (n % 4 == 0) res(n);
      rej(new Error("Not divisible by 4"));
    });
  })
  .then(n => {
    return new Promise((res, rej) => {
      if (n % 8 == 0) res("Divisible by 2,4 and 8");
      rej(new Error("Not divisible by 8"));
    });
  })
  .then(data => console.log(data))
  .catch(err => {
    console.log(err.message);
    return "Promise error thrown";
  })
  .then(() => console.log("No matter what, this will always be called"));
