"use strict";
/*
# Check Sign (2)
Read one integer (int).
The program prints a `+` when the number is positive.
The program prints a `-` when the number is negative.
The program prints a `0` when the number is zero.
*/
import io from "../../utils/io-for-pf.js";
let a = parseInt(io.read());

if (a > 0){
  io.write("+");
}else if(a === 0){
  io.write("0");
}else if  (a < 0){
  io.write("-");
}