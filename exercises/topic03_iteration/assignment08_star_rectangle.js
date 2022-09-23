"use strict";
/*
# Star Rectangle
Write a program that asks for two numerical inputs (`int`): the height and
the width of a rectangle. Print such a rectangle on screen using `*`.

The program has no output if either the height or the width is negative  or zero.

## Example:
    > 4
    > 3
    ***
    ***
    ***
    ***
*/
import io from "../../utils/io-for-pf.js";
let width = parseInt(io.read());
let height = parseInt(io.read());
let str = "*";

for (let i = 1; i <= height; i++){
  str *= width;
  io.write(str);
}