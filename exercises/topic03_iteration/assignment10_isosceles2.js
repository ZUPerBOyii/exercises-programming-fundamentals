/*
# Isosceles 2
Write a program similar to "Isosceles 1".
This time the triangle is left aligned and has its top at the bottom.

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


while(input <= 0){
  input = parseInt(io.read());
}

for(let i = input; i >= 1; i--){
  io.write(str.repeat(i));
}