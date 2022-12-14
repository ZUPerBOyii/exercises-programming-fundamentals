"use strict";
/*
# Oh-point-three
Write a program that takes two numbers (`float`) as input.
The program outputs `equal` if the sum of both numbers equals 0.3 or
`not equal` in the other case.

**Hint:** reflect on how a computer stores decimal numbers when
your program behaves unexpectedly.

## Examples:
    > 0.5
    > -0.2
    equal

    > 0.3
    > 0
    equal

    > 0.4
    > -0.2
    not equal
*/
import io from "../../utils/io-for-pf.js";
let a = parseFloat(io.read());
let b = parseFloat(io.read());    // we need to use floats in an if statement, but that can't work :(

let c = a + b;

if (c === 0.3){    // Floats cannot be a 100% precise
  io.write("Equal");
}else{
  io.write("Not equal");
}