/*
# Factorial (II)
Ask for a number (`int`) as input and output its factorial.

The factorial of a number n is n! with n! = n * (n-1) * ... * 3 * 2 * 1
Your program should print `does not compute` when a negative number is entered.
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