const A = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten']; // prettier-ignore
const car = { name: "zen", speed: 100, average: 23 };
const str = "Hello World";

/*
    * for-in loop iterates over enumerable properties of an object :
    An enumerable property is defined as a property of an object that has an Enumerable value
    of true. Essentially, a property is "enumerable", if it is enumerable. We can check if a
    property is enumerable by calling property.enumerable, which will return true or false. The
    for-in loop will iterate over inherited properties as well, as long as they are enumerable
    properties.
	
	* Enumerable properties of various objects include :
	    - indexes (in case of arrays and strings)
	    - property names (in case of objects)

	* Advantages over regular for loop
	    - Can iterate over non integer key names (hence can iterate objects)

	* Disadvantages over regular for loop
	    - Cannot customize iteration based on specific needs eg.
		    - iterating in reverse order (eg from i = n - 1 to i = 0)
		    - iterating by skipping (eg i += 2)
		    - iterating over a range (eg from i = 2 to i = n - 2)

	* The for-in iteration happens in an arbitrary order :
        - Therefore, it should not be used if things need to happen in their defined sequence.
        - For this reason, it is generally advised that for..in not be used with Arrays.

*/

//~ Use Quokka
for (let k in A) console.log(k);
for (let k in A) console.log(A[k]);

for (let k in car) console.log(k);
for (let k in car) console.log(car[k]);

for (let k in str) console.log(k);
for (let k in str) console.log(str[k]);
