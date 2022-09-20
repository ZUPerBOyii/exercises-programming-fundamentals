"use strict";
/*
# Check Sign
Read one integer (int).
The program prints a `+` when the number is positive or zero.
The program prints a `-` when the number is negative.
*/
import io from "../../utils/io-for-pf.js";
let a = parseInt(io.read());

if (a > 0){
  io.write("+");

}
if  (a < 0){
  io.write("-");
}