"use strict";
/*
# Odd or Even
A number is even when it is divisible by two.
Make a program print `odd` or `even` depending on the input (`int`).

**Hint:** Use the `%`-operator.

## Examples
    > 2
    even

    > 3
    odd
*/
import io from "../../utils/io-for-pf.js";
let a = parseInt(io.read());
let b = a % 2;

if (b === 0){
  io.write("Even");
}else{
  io.write("Odd");
}