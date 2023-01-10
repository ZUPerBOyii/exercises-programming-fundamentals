/*
Write the functions `take` and `drop` which both take in an array and an integer number.
`take` returns the first `n` elements of the array given,
`drop` returns all *but* those first `n` elements of the array given.

Check out the tests for any edge cases that need to be covered.

Next write the function `split` that splits a given array in sub-arrays of equal size (given).
Reuse code and functions as much as possible!

     > split(["a", "b", "c", "d", "e", "f"], 2);
     [["a", "b"], ["c", "d"], ["e", "f"]]

     > split(["a", "b", "c", "d", "e"], 2);
     [["a", "b"], ["c", "d"], ["e"]]);
*/


function take(array, n) {
  let newArray = [];
  if(n === 0){
    return array = [];
  }
  if (n > array.length){
    return array;
  }

  for (let i = 0; i < n; i++){
    newArray.push(array[i]);
  }
  return newArray;

}

function drop(array, n){
  let index = 0;
  if(n === 0){
    return array;
  }
  if(n > array.length){
    return array = [];
  }
  let newArray = [];
  
  while (index <= n){
    index++;
    if(index > n){
      for (let i = index; i < array.length; i++){
        newArray.push(array[i]);
      }
    }
  }
  
  return newArray;
}

function split(array, sizeOfSplitArray) {
  let splitArray = [];
  for (let i = 0; i < array.length; i += sizeOfSplitArray){
    splitArray.push("[" + array[i] + "," + array[i + 1] + "]");
  }
  return splitArray;
}
/*
In case you can't get `split` to work, but you want to use the function later on,
here's a one-line function body for `split` at your disposal, which of course doesn't entitle you to the points for this part:
    return new Array(Math.ceil(arr.length / n)).fill(0).map(()=>arr.splice(0, n));
 */



/*
Scoring: 4 points
`take`: 1 point
`drop`: 1 point
`split`: 2 points
 */
export {take, drop, split};

