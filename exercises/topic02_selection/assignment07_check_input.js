"use strict";
/*
# Check Input

Ask the user for one line of input.
Now let the user know if the input was a number or not.


> 123
'yes'
> test
'no'

*/
import io from "../../utils/io-for-pf.js";
let a = io.read();
a = a / 1;

if (a !== a){
  io.write("No");
}else{
  io.write("Yes");
}