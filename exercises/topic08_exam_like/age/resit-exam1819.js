/*
Given is an array of friends, which we represent in JavaScript as
an object with a `name`- and an `age`-property.
We know that these arrays are always sorted by name (alphabetically),
the ages are random.

Write the following three functions a **efficient** as possible:
`findByName(arr, aName)`,
`getAge(arr, aName)`, and
`getOldest(arr)`.

`findByName(arr, aName)` tries to find **a friend** (a `person`)
 with the given name in the array.
Give an appropriate answer when no such friend exists in the array.
Note that the array is sorted by name.

`getAge(arr, aName)` tries to find **the age** of the friend
with the given name in an array.
Give an appropriate answer when no such friend exists in the array (
Note that the array is sorted by name.)


`getOldest(arr)` searches for the oldest **friend** in an array.
It is possible that more than one such friend exists,
hence you should return the **all**.
Make sure they are (still) ordered alphabetically.

 */


export {findByName, getAge, getOldest};

function findByName(people, name) {
  for (const person of people) {
    if(person["name"] === name)
      return person;
  }
  return null;
}

function getAge(people, name) {
  const person = findByName(people, name);
  if(person !== null)
    return person.age;
  return undefined;
}

function getOldest(people) {
  let res = [];
  let maxAge = 0;
  for (const person of people) {
    if(person.age > maxAge) {
      res = [];
      maxAge = person.age;
    }
    if(person.age === maxAge)
      res.push(person);
  }
  return res;
}
