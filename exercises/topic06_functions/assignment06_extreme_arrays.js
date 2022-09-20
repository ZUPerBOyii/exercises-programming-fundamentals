/*
Implement the functions
`extreme`,
`shiftToPositive`,
`shiftToPositiveInPlace`,
`sort`, and
`sortCopy` such that all tests succeed.

`extreme` searches the smallest or largest element in an array.
The second (optional) argument decides whether to pick the smallest (default).

`shiftToPositive` creates an array with the same elements as the input
array, but ensures that all elements are positive by shifting them all with
the smallest possible number (if needed).

`shiftToPositiveInPlace` does the exact same thing, but  *in place* , this means that the
original array is updated.

Take a look at the tests to see how we verify both functions.


`sort`, and `sort_copy` both take an array with numbers as input and returns an array
with the same numbers from low to high (sorted). The difference is that
`sort` is *in-place*, i.e., the original array is updated and that `sortCopy`
creates a new array.

**Hint:** Take a look at this algorithm and try to translate the English
text into JavaScript code. The algorithm is not part of this courses material.
https://en.wikipedia.org/wiki/Insertion_sort

If the functionality you need already exists in
(a) JavaScript (library), try to implement it yourself.
The exercise here is to write code, not to borrow it.
*/

export {
  extreme,
  shiftToPositive,
  shiftToPositiveInPlace,
  sort,
  sortCopy
};

