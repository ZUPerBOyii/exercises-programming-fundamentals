/*
# Isosceles 1
Write a program that asks for the height of an isosceles right triangle.
This is a right triangle with the two legs
(and their corresponding angles) equal.

Print such a triangle on screen using `*`.
The triangle is left aligned and has its top on top.

Negative or zero heights are not accepted. Keep on asking for a correct
height until a positive number is entered.

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


while(input <= 0){
  input = parseInt(io.read());
}

for(let i = 1; i <= input; i++){
  io.write(str.repeat(i));
}



