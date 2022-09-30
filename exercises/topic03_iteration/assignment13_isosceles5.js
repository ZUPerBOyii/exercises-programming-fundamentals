/*
# Isosceles 5
Write a program similar to "Isosceles 2".
This time triangle is centered and has its top on top.
Watch out, not all triangles have a top with 1 star. Some have two stars.

## Example
    > -3
    > 0
    > 5
      *
     ***
    *****

    > -3
    > 0
    > 4
     **
    ****
*/
import io from "../../utils/io-for-pf.js";

let input = parseInt(io.read());
let str = "*";
let amountOfSpaces = input;
let spaces = " ";


while(input <= 0){
  input = parseInt(io.read());
}


for(let i = 1; i <= input; i += 2) {
  amountOfSpaces -= 1;
  io.write(spaces.repeat(amountOfSpaces) + str.repeat(i));

}