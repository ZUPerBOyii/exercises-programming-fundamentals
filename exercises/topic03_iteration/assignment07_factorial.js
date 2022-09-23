"use strict";
/*
# Factorial
Ask for a positive number (``int``) as input and output its factorial.

The factorial of a number n is n! with n! = n * (n-1) * ... * 3 * 2 * 1

For negative numbers the factorial is not defined. In this case you can
simply print `does not compute`.
*/
import io from "../../utils/io-for-pf.js";
let input = parseInt(io.read());


if (input <= 0){
  io.write("Does not compute");
}
if (input === 1){
  io.write(input);
}

for (let i = input - 1; i >= 1; i--){
  input = input * i;
}
io.write(input);