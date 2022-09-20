"use strict";
/*
# Reverse Sequence
Write a program that reads five numbers (`int`) and
that outputs them in reverse order.

## Example:
### Input
    1
    2
    3
    4
    5

### Output:
    5
    4
    3
    2
    1
*/
import io from "../../utils/io-for-pf.js";
let a, b, c, d, e;
a = io.read();
b = io.read();
c = io.read();
d = io.read();
e = io.read();

io.write(e + d + c + b + a);
