const A = [1, 2, 3, 4, 5];

// While using assignment operator like this we are copying as reference
// Thus any changes that we make in B will be reflected in A as well
// This is only in the case of arrays (integers are copied truly not by
// reference)
const B = A;
B[0] = 10;
console.log(A);
console.log(B);

// Making actual copy of array (using [...] operator)
const C = [...A];
C[0] = 200;
console.log(A);
console.log(C);
