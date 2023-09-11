//. Arrays in JS are flexible (can insert anything)
const arr = [
  1,
  'hello',
  true,
  undefined,
  null,
  NaN,
  [1, 2],
  { name: 'zen' },
  function fun() {}
];
console.log(arr);

//. Defining a global array and adding a reset function to its prototype
const A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
A.__proto__.reset = function () {
  this.length = 0; //. Empties the array
  for (let i = 0; i < 10; i++) this.push(i + 1);
  return this;
};

// Methods to insert or remove elements
//. (.push(), .pop(), .unshift(), .shift(), .splice(), .concat())
{
  //* .push()
  {
    //. Array.push() -> pushes the source(s) to the end
    //. Can accept multiple sources
    //. Can push anything (a string, an array, an object etc..)
    const A = [1, 2];

    //. Pushing in line
    A.push(true, 'hello');
    console.log(A);

    //. Pushing variables
    const fun = () => {};
    const arr = ['One', 'Two'];
    A.push(fun, arr);
    console.log(A);
  }

  //* .pop()
  {
    //. Array.pop() -> pops the value stored at last index
    //. Returns the popped element
    //. If the array is empty, undefined is returned
    const A = [
      1,
      'hello',
      true,
      undefined,
      null,
      NaN,
      [1, 2],
      { name: 'zen' },
      function fun() {}
    ];
    const pop1 = A.pop();

    console.log(pop1);
    console.log(A);
  }

  //* .unshift()
  {
    //. Array.unshift() -> same as push but pushes new values at front
    const A = [1, 2];

    //. Unshifting array by passing in line values
    A.unshift(true, 'hello');
    console.log(A);

    //. Unshifting array by using variables
    const fun = () => {};
    const arr = ['One', 'Two'];
    A.unshift(fun, arr);
    console.log(A);
  }

  //* .shift()
  {
    //. Array.shift() -> same as pop() but pops values from front
    const A = [
      1,
      'hello',
      true,
      undefined,
      null,
      NaN,
      [1, 2],
      { name: 'zen' },
      function fun() {}
    ];
    const pop1 = A.shift();

    console.log(pop1);
    console.log(A);
  }

  //* .splice()
  {
    /*
			. Array.splice() -> Removes elements from an array and, if necessary, inserts
			. new elements in their place, returning the deleted elements.

			. Arg1 (val): Index from where to start splicing (if negative then idx = length + val)
			. Arg2 (count): Number of elements to splice (if not supplied then splice till end)
			. Arg3 (...sources): The elements to insert in the place of removed elements

		*/

    //. Using default value for count
    console.log(A.splice(6));

    //. Splicing two values starting from sixth index
    console.log(A.reset().splice(6, 2));

    //. Splicing two values starting from sixth index (-4 is taken as A.length(ie. 10) + (-4))
    console.log(A.reset().splice(-4, 2));

    //. Splicing two values starting from sixth index and inserting new values
    const val1 = 'Seven', val2 = 'Eight'; // prettier-ignore
    console.log(A.reset().splice(-4, 2, val1, val2));
    console.log(A);

    //. Inserting new values without splicing (by sending the number to delete as 0)
    console.log(A.reset().splice(-4, 0, val1, val2));
    console.log(A);

    A.reset();
  }

  //* .slice()
  {
    /*
			. Array.slice() -> constructs a new array by copying elements from the original array
			. Does not modify the original array (v/s .splice())
			. Receive two arguments (both are optional)

			. Arg1 : Starting index (negative values are taken as length + val). Optional : default 0
			. Arg2 : Ending index (negative values are taken as length + val). Optional : default n - 1

			. If ending index is out of range then fills till end
		*/

    //. Using positive index values
    console.log(A.slice(3, 6));

    //. Using negative index values
    console.log(A.slice(-3, -1));

    //. Using out of range ending index value
    console.log(A.slice(6, 100));

    //. Using default starting and ending indexes
    console.log(A.slice());
  }

  //* .concat()
  {
    /*
			. Array.concat() -> Constructs a new array by joining multiple sources
			. The calling array and the original sources remain unchanged
	
			. v/s .push() :
			.	- .push() inserts multiple sources into the array calling the function thus
			.	   modifying the original array (although the sources remain unchanged)
			.	- .concat() constructs a new array using the values stored in the calling
			.	   array and the sources. It does not modify the calling array or the sources.
		*/

    const A = [1, 2], B = [3, 4, [5, 6]], C = 'One', D = function fun (){}; // prettier-ignore

    const concat = A.concat(B, C, D);

    console.log(concat);

    //. The calling array and the sources are not changed
    console.log(A, B, C, D);
  }
}

// Methods that receive a callback function
//. (.map(), .reduce(), .forEach())
{
  //* .map()
  {
    /*
		.	Array.map() -> loops around an array and may perform any desired action and returns a newly
		.   constructed array. Thus it can be chained with other array methods. map() may or may not
		.   transform the original array based on the callback function passed. Ideally .map() should be
		.   used to construct a new array from the original array without transforming the original array.

		+ 	Receives two args ->
		. 	Arg1 : callback function with three args (current value, current index: optional, array : optional)
		. 	Arg2 : An object (that can be referred to inside the callback function using 'this' keyword)
		. 	       This object gives function a state (see below how it helps in maintaining sum)

		. 	Arg2 is optional (if not sent then it is taken as undefined)

		*/

    //. Constructing a prefix sum array
    const pfx = A.map(
      function (val, idx, arr) {
        this.sum += arr[idx - 1] || 0;
        return val + this.sum;
      },

      { sum: 0 }
    );

    console.log(A);
    console.log(pfx);
    A.reset();

    const B = [1, 2, 6, 3, 4, 5, 12, 6, 7, 18, 8, 24, 9, 10, 30];

    //. Constructing an array containing indexes at which the array B has values divisible by 6
    const indexes = B.map((val, idx) => (val % 6 == 0 ? idx : -1), {});
    console.log(indexes);
  }

  //* .reduce()
  {
    /*
	
			. Array.reduce() -> Calls the specified callback function for all the elements in an
			. array. The return value of the callback function is the accumulated result (eg acc),
			. and is provided as an argument in the next call to the callback function.
		
			. Array.reduceRight() -> Same as reduce but in reverse order

			In the following examples,
				- acc is the accumulated result,
				- val is the current element and,
				- idx is the current index (optional),
				- arr is the parent array (optional)
				- 0 is the starting value of acc
	
		*/

    //. Finding array sum
    let res = A.reduce((acc, val, idx, arr) => (acc += val), 0);
    console.log(res);

    //. Finding max element
    res = A.reduce((acc, val, idx, arr) => (acc = Math.max(acc, val)), A[0]);
    console.log(res);
  }

  //* .forEach()
  {
    /*
		. Loops similar to .map() and receives two arguments as .map().

		+ Array.forEach v/s Array.map()
		.  - Array.map() -> loops around an array and may perform any desired action and returns
		.    a newly constructed array. Thus it can be chained with other array methods. map() may or
		.    may not transform the original array based on the callback function passed. Ideally .map()
		.    should be used to construct a new array from the original array.
		
		.  - Array.forEach() -> loops around an array and may perform any desired action but it
		.    returns void thus it cannot be chained with other array methods. forEach() may or
		.    may not transform the original array based on the callback function passed. Ideally
		.    .forEach() should be used to modify the original array.
		*/

    //. Finding sum -> Here forEach() is not modifying the original array
    let res = 0;
    A.forEach(
      function (val, idx, arr) {
        res += val;
      },
      {
        /* Can add properties here */
      }
    );
    console.log(res);

    //. Modifying the original array into a prefix sum array
    A.forEach(
      function (val, idx, arr) {
        arr[idx] += arr[idx - 1] || 0;
      },

      {
        /* Can add properties here */
      }
    );
    console.log(A);
    A.reset();
  }
}

// Methods that receive a predicate
//. (.every(), .some(), .filter(), .find(), .findIndex())
{
  //* .every()
  {
    //. Array.every() -> Same as all_of
    console.log(A.every(n => n > 0));
    console.log(A.every(n => n % 2 == 0));

    //. Can also receive an object to be used as this arg in the predicate
    //. In the following example we are trying to find if all elements are arranged
    //. in the form of table of 2
    const B = [2, 4, 6, 8, 10];
    let res = B.every((val, idx, arr) => {
      if (idx == 0) return true;
      return val - arr[idx - 1] == 2;
    }, {});
    console.log(res);
  }

  //* .some()
  {
    //. Array.some() -> Same as any_of
    console.log(A.some(n => n % 2 == 0));
    console.log(A.some(n => n % 11 == 0));

    //. Can also receive an object to be used as this arg in the predicate
    //. In the following example we are trying to find is there any place
    //. where two consecutive elements are same.
    const B = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10];
    let res = B.some((val, idx, arr) => {
      return val == arr[idx + 1];
    }, {});
    console.log(res);
  }

  //* .filter()
  {
    //. Array.filter() -> constructs a new array from the original array which contains only
    //. those elements that satisfy the predicate

    //. v/s .find() -> .filter() returns an array containing all the values that satisfy the
    //. predicate whereas .find() returns the very first value (not an array) the satisfies
    //. the predicate

    console.log(A.filter(n => n % 2 === 0));

    //. Can also receive an object to be used as this arg in the predicate
    //. In the following example we are trying to find the all such numbers
    //. that have a duplicate at their consecutive index
    const B = [1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10, 10];
    let res = B.filter((val, idx, arr) => {
      return val == arr[idx + 1];
    }, {});
    console.log(res);
  }

  //* .find()
  {
    //. Array.find() -> Finds and returns the first value satisfying the pred
    console.log(A.find(n => n % 2 == 0 && n % 3 == 0));
    console.log(A.find(n => n % 11 == 0));

    //. Can also receive an object to be used as this arg in the predicate
    //. In the following example we are trying to find the first number that
    //. has a duplicate at its consecutive index
    const B = [1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10, 10];
    let res = B.find((val, idx, arr) => {
      return val == arr[idx + 1];
    }, {});
    console.log(res);
  }

  //* .findIndex()
  {
    //. Array.findIndex() -> Finds and returns the index of first value satisfying the pred
    console.log(A.findIndex(n => n % 2 == 0 && n % 3 == 0));
    console.log(A.findIndex(n => n % 11 == 0));

    //. Can also receive an object to be used as this arg in the predicate
    //. In the following example we are trying to find the first index that
    //. has a duplicate value at its consecutive index

    const B = [1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10, 10];
    let res = B.findIndex((val, idx, arr) => {
      return val == arr[idx + 1];
    }, {});

    console.log(res);
  }
}

// Methods to find a specific value
//. (.includes(), .indexOf(), .lastIndexOf())
{
  //* .includes()
  {
    //. Array.includes() -> Finds if the specified value exists or not
    //. Second arg is the index from which to begin searching from (optional)
    console.log(A.includes(7));
    console.log(A.includes(100));

    console.log(A.includes(3, 2));
    console.log(A.includes(3, 3));
  }

  //* indexOf(), lastIndexOf()
  {
    const A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 7];
    //. Array.indexOf() -> Finds and returns the first index of specified value
    //. Second arg is the index from which to begin searching from (optional)
    console.log(A.indexOf(7));
    console.log(A.indexOf(7, 8));

    //. Array.lastIndexOf() -> Finds and returns the last index of specified value
    //. Second arg is the index from which to begin searching from (optional)
    console.log(A.lastIndexOf(7));
    console.log(A.lastIndexOf(7, 8));
  }
}

// Methods to beautify array output
//. (.join(), .toString())
{
  //. Array.join() -> Returns a string, separated by the specified separator.
  //. Separator is optional (default is comma)
  console.log(A.join('-'));
  console.log(A.join(''));
  console.log(A.join());

  //. Array.toString() -> Returns a string representation of an array.
  console.log(A.toString());
}

// Methods to access array elements
//. (.keys(), .values(), .entries(), .at())
{
  //* Array iterators
  {
    //. Array.keys() -> Returns an iterable of keys in the array
    let iter = A.keys();
    console.log(iter.next());
    console.log(iter.next());

    //. Array.values() -> Returns an iterable of values in the array
    iter = A.values();
    console.log(iter.next());
    console.log(iter.next());

    //. Array.entries() -> Returns an iterable of key, value pairs
    iter = A.entries();
    console.log(iter.next());
    console.log(iter.next());
  }

  //* .at()
  {
    const A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    //. Array.at() -> Negative values are taken as (length + value)
    console.log(A.at(2));
    console.log(A.at(-2)); //. -2 is taken as -> A.length(ie. 10) + (-2)
  }
}

// Methods to reorder array elements
//. (.reverse(), .sort(), .flat(), .flatMap())
{
  //* .reverse()
  {
    //. Array.reverse() -> Reverses the elements in an array in place and returns a reference to it.
    //. Thus chaining can be done.
    console.log(A.reverse());
    console.log(A.reverse().join('-'));
  }

  //* .sort()
  {
    //. Sorts in ASCII order (if a comparator function is not sent)
    console.log(A.sort());

    //. Array.sort() -> Sorts an array in place and returns a reference to it.
    //. Thus chaining can be done.
    console.log(A.sort((a, b) => b - a));
    console.log(A.sort((a, b) => a - b).join('-'));
  }

  //* .flat()
  {
    const A = [[[1, 2, 3], 4], 5];

    //. Array.flat() -> Returns a new array with all sub-array elements concatenated into it recursively
    //. up to the specified depth. (default is 1)

    console.log(A.flat());
    console.log(A.flat(2));

    console.log(A); //. Original array remains unchanged
  }

  //* .flatMap()
  {
    const A = [1, 2, 3, 4, 5];

    //. Array.flatMap() -> identical to a map followed by flat with depth 1

    console.log(A.map(n => [(n *= 2), (n *= 3)]));
    console.log(A.flatMap(n => [(n *= 2), (n *= 3)], {}));

    console.log(A); //. Original array is not altered
  }
}

// Methods to modifying array values
//. ().fill(), .copyWithin)
{
  //* .fill()
  {
    /*
			. Array.fill() -> Fills desired numbers in the range and returns reference to it thus can be chained.
			. Does not change the length of the modified array (instead replace the original values)
			. Receive three arguments :
			
			. Arg1 : The value to fill
			. Arg2 : Starting index (negative values are taken as length + val). Optional : default 0
			. Arg3 : Ending index (negative values are taken as length + val). Optional : default n - 1

			. If ending index is out of range then fills till end
		
		*/

    //. Using positive index values
    console.log(A.fill(3, 4, 7));

    //. Using negative index values
    console.log(A.reset().fill(3, -4, -1));

    //. Using out of range ending index value
    console.log(A.reset().fill(3, 3, 100));

    //. Using default starting and ending indexes
    console.log(A.reset().fill(3));

    A.reset();
  }

  //* .copyWithin()
  {
    /*
			. Array.copyWithin() -> Returns reference to the array after copying a section of the
			. array. Can be chained.

			. Receives three arguments :
			. Arg1 (val) : starting index where we want to paste the copied range
			. Arg2 (val) : staring index of the range to copy. Optional : default 0
			. Arg3 (val) : ending index of the range to copy. Optional : default n - 1

			. if any val is negative, then it is taken as length + val
			. if Arg3 is out of range then it is taken as n - 1
 		
		*/

    //. Using positive index values
    console.log(A.copyWithin(4, 0, 3));

    //. Using negative index values
    console.log(A.reset().copyWithin(3, -4, -1));

    //. Using out of range ending index value
    console.log(A.reset().copyWithin(3, 7, 100));

    //. Using default ending index
    console.log(A.reset().copyWithin(3, 7));

    //. Using default starting and ending indexes
    console.log(A.reset().copyWithin(3));

    A.reset();
  }
}
