/*
# Full Digit Swap Extra
Take one integer as input.
Output the number with the digits reversed but keep the sign.
Leading zeros are not allowed.

**Hint 1:**: The integer division does not exist in JavaScript.
You can simulate an integer division, however, by doing a regular (decimal)
division, and then "round the result to the floor" (naar beneden afronden).
This can be done in JavaScript using `Math.floor(x/y)`.

**Hint 2:** The a look at assignment 6 in topic 2. This the extended version of that
assignment.

## Examples:
    > 1234
    4321

    > -4321
    -1234

    > -700
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

if (a >= 10){        //check if the input is between the required range
  rightDigit = a % 10;          // get the right digit
  a = Math.floor(a / 10);     // get the left digit
  rightDigit *= 10;             //right digit needs to become the left digit
  io.write( sign * (rightDigit + a));       //cout this with the sign

}else{
  io.write(a * sign);     //if not in range, write it normally
}