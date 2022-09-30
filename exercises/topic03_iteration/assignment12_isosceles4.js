/*
# Isosceles 4
Write a program similar to "Isosceles 1".
This time triangle is right aligned and has its top on top.

## Example
    > -3
    > 0
    > 5
        *
       **
      ***
     ****
    *****
*/
import io from "../../utils/io-for-pf.js";

let input = parseInt(io.read());
let str = "*";
let amountOfSpaces = input;
let spaces = " ";


while(input <= 0){
  input = parseInt(io.read());
}


for(let i = 1; i <= input; i++) {
  amountOfSpaces -= 1;
  io.write(spaces.repeat(amountOfSpaces) + str.repeat(i));

}