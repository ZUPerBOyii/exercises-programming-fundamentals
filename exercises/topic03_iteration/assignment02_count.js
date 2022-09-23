"use strict";
/*
# Sentinel
Keep on asking for input (`float`) until a zero is entered.
Count and print how many non-zero inputs you received.

Counting always results in integers. Hence, there is no need to print any digits after the decimal point.

## Example:

    > 1.4
    > -2.1
    > 3.0
    > -4
    > 0
    4

*/
import io from "../../utils/io-for-pf.js";
let input;
let count = 0;

do {
  input = parseFloat(io.read());
  count += 1;
}while(input !== 0);
io.write(count - 1);


