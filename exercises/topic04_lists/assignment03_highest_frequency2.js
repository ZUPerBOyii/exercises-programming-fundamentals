/*
# Highest frequency (II)
Write a program that asks for numerical input (integers)
between 0 and 99.
When the user inputs a number outside this interval
the program stops asking input.

Finally, print the number that was entered the most.
You can print -1 if there was no valid input.
If multiple numbers apply, print the largest.

    > 3
    > 2
    > 1
    > 3
    > 5
    > 3
    > 1
    > -10
    3

    > 1
    > 3
    > 2
    > 1
    > 3
    > 5
    > 3
    > 1
    > 678
    3

    > 123
    -1
*/
import io from "../../utils/io-for-pf.js";

const frequencyOf = new Array(100).fill(0);
let number = parseInt(io.read());
while(0 <= number && number < frequencyOf.length) {
  frequencyOf[number]++; //frequencyOf[number] = frequencyOf[number] + 1;
  number = parseInt(io.read());
}

let firstNumberWithHighestFrequency = 0;
for(let number=1; number < frequencyOf.length; number++) {
  if(frequencyOf[number] >= frequencyOf[firstNumberWithHighestFrequency]) {
    firstNumberWithHighestFrequency = number;
  }
}

if(frequencyOf[firstNumberWithHighestFrequency] === 0)
  io.write(-1);
else
  io.write(firstNumberWithHighestFrequency);
