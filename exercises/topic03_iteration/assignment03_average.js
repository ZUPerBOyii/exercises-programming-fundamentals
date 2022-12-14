"use strict";
/*
# Average
Keep on asking for input (`float`) until a zero is entered.
Print the average of these (non-zero) inputs with 3 digits after
the decimal point.
Your program should print `no data` if the first input was a zero.

## Examples:

    > 1.4
    > -2.1
    > 3.0
    > -4
    > 0
    -0.425

    > 0
    no data

*/
import io from "../../utils/io-for-pf.js";

let input;
let total = 0;
let amountOfInputs = 0;

do {
  input = parseFloat(io.read());
  total += input;
  amountOfInputs += 1;
}while (input !== 0);
amountOfInputs -= 1;
io.write(total / amountOfInputs);
