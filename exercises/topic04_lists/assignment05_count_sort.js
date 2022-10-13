/*
# Count sort
Write a program that asks for numerical input (integers) between 0 and 99.
When the user inputs a number outside this interval
the program stops asking input.

Print all the numbers that were entered, from small to large.
Numbers that were entered multiple times, however, are only printed once.

## Example
    > 3
    > 2
    > 1
    > 3
    > 5
    > 3
    > 1
    > -10
    1
    2
    3
    5
*/
import io from "../../utils/io-for-pf.js";

const frequencyOf = new Array(100).fill(0);
let number = parseInt(io.read());

while(number >= 0 && number < frequencyOf.length) {
  frequencyOf[number]++; //frequencyOf[number] = frequencyOf[number] + 1;
  number = parseInt(io.read());
}

for (let i = 0; i < frequencyOf.length; i++) {
  if (frequencyOf[i] !== 0) {
    io.write(i);
  }
}