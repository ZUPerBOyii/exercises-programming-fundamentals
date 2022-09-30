/*
# Isosceles 3
Write a program similar to "Isosceles 1".
This time the triangle is right aligned and has its top at the bottom.

## Example
    > -3
    > 0
    > 5
    *****
     ****
      ***
       **
        *
*/
import io from "../../utils/io-for-pf.js";
let input = parseInt(io.read());
let str = "*";
let amountOfSpaces = 0;
let spaces = " ";


while(input <= 0){
  input = parseInt(io.read());
}


for(let i = input; i >= 1; i--){
  amountOfSpaces += 1;
  io.write(spaces.repeat(amountOfSpaces) + str.repeat(i));


}
