/*
- Write a function returning an array of all values for a (given) *property* of all objects in a given array.
- Check out the tests for an example turning an array of colors (objects) into an array of string (the alpha values of those colors)
 */
function selectProperties(object, property){
  for (const el of object){
    if(property !== null){
      return property;
    }else{
      return object = [];
    }
  }
} // 1

/*
- Write a function  finding the smallest and largest number in an array of numbers (whether integers or floats).
- Write both a `min` and `max` function (reuse code! DRY).
 */
function extremes(array){
  let object = {
    min: min(array),
    max: max(array)
  };
  return object;
} // 2
function min(array){
  let currentLowest;
  for(let i = 0; i < array.length; i++){
    if (array[i] < array[i - 1]){
      currentLowest = array[i];
    }
    if (array[i] < 0){
      currentLowest = array[i];
    }
  }
  if (array.length === 0){
    return NaN;
  }
  return currentLowest;
} // 0.5
function max(array){
  let currentHighest;
  for (let i = 0; i < array.length; i++){
    if(array[i] > array[i - 1]){
      currentHighest = array[i];
    }
    if(array[i] > 0){
      currentHighest = array[i];
    }
  }
  if (array.length === 0){
    return NaN;
  }
  return currentHighest;
}// 0.5


/*
Scoring: 4 points
`selectProperties`: 1 point
`extremes`: 2 point
`min`: 0.5 point
`max`: 0.5 point
 */
export {selectProperties, extremes, min, max};

