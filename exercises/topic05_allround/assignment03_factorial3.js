/*
# Factorial (II)
Ask for a number (`int`) as input and output its factorial.
Your program should keep on asking for input until a
positive number is entered.

## Example:
    > -6
    > -3
    > 4
    24
    */
import io from "../../utils/io-for-pf.js";
let input = parseInt(io.read());

while (input <= 0){
  input = parseInt(io.read());
}


if (input === 1){
  io.write(input);
}

for (let i = input - 1; i >= 1; i--){
  input = input * i;
}
io.write(input);