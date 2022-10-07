/*
# Centered Square (partial exam)

Create a JavaScript program that prints a square.
The edges should be pluses (`+`) and in the exact center,
there should be an oh (`o`).

It is only possible to place the `o` in the exact center if
the size of the square is odd. Moreover, the `o` is only visible, for sizes of 3 or higher.

Hence, keep asking for input, until it will yield a square with correctly drawn 'oh'.

These are the three smallest possible squares:
> 3
+++
+o+
+++

> 5
+++++
+   +
+ o +
+   +
+++++

> 7
+++++++
+     +
+     +
+  o  +
+     +
+     +
+++++++
*/
import io from "../../utils/io-for-pf.js";



const size = 7;
let str = "";

for (let row = 0; row < size; row++) {
  str += "+";
}
for (let col = 0; col < size; col++){
  io.write(str);
}














