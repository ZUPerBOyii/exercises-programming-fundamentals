"use strict";
/*
# Digit Swap
Read one number (`int`) as input.

If the number has exactly two digits, the program swaps both digits.
Otherwise, the number is printed as is.
The sign of the number is **always** preserved.

**Non-functional requirement:** The input is a number, do not try to convert it to a string.
**Hint:** The integer division does not exist in JavaScript.
You can simulate an integer division, however, by doing aecim regular (dal)
division, and then "round the result to the floor" (naar beneden afronden).
This can be done in JavaScript using `Math.floor(x/y)`.

## Examples:
    > 1234
    1234

    > -1234
    -1234

    > -4
    -4

    > 6
    6

    > 34
    43

    > -12
    -21

    > -70
    -7
*/
import io from "../../utils/io-for-pf.js";

let a = parseInt(io.read());    //We make an int
let rightDigit = 0;             // we want a right digit out of the input
let sign = 1;                   // we save the sign

if (a < 0){                      //we save the sign
  sign = -1;
  a = sign * a;
}

if (a >= 10 && a <= 99){        //check if the input is between the required range
  rightDigit = a % 10;          // get the right digit
  a = Math.floor(a / 10);     // get the left digit
  rightDigit *= 10;             //right digit needs to become the left digit
  io.write( sign * (rightDigit + a));       //cout this with the sign

}else{
  io.write(a * sign);     //if not in range, write it normally
}

