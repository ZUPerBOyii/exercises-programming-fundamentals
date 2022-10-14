/*
# Count sort
Write a program that asks for numerical input (integers) between 0 and 99.
When the user inputs a number outside this interval
the program stops asking input.

Finally, print all the number that where entered from small to large.
Numbers that were entered multiple times are printed multiple times.

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
    1
    2
    3
    3
    3
    5
*/
import io from "../../utils/io-for-pf.js";

const frequencyOf = new Array(100).fill(0);
let number = parseInt(io.read());

while (number >= 0 && number < frequencyOf.length) {
  frequencyOf[number]++; //frequencyOf[number] = frequencyOf[number] + 1;
  number = parseInt(io.read());
}

for (let i = 0; i < frequencyOf.length; i++) {
  if (frequencyOf[i] === 1) {
    io.write(i);
  } else if (frequencyOf[i] > 1) {
    for (let j = 0; j < frequencyOf[i]; j++)
      io.write(i);
  }


}