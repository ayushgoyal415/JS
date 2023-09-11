const A = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten']; // prettier-ignore
const str = "Hello World";

/*
    * for-of loop iterates over the 'keys' of iterable collections :
        - These are objects that have a [Symbol.iterator] property.
        - The [Symbol.iterator] property allows us to manually iterate over the collection
          by calling the [Symbol.iterator]().next() method to retrieve the next item in the
          collection.
        - for-of loop is essentially a wrapper around the [Symbol.iterator] to create loops.
    
    The for-of loop works well with Arrays and Strings, as they are iterable. This method is
    a more reliable way of looping through an Array in sequence.
    
    ~ The for-of loop doesn't work with Objects because they are not "iterable" :
        - Objects don't have a [Symbol.iterator] property
        - for-of can iterate over an array of objects.

    * for-of loops for iterating NodeLists
        - A really useful case for for-of is in iterating of NodeLists. When we query the
          document for a group of elements, what we get returned is a NodeList, not an Array.
          This means that we can't iterate over the list using Array methods like forEach.
        - To solve this, we can either convert it to an Array using Array.from(), or use the
          for..of loop, which is applicable to more than just Arrays.
*/

//~ Use Quokka
for (let v of A) console.log(v);
for (let v of str) console.log(v);
