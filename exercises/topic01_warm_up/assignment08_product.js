/*
# Product
Write a program that expects two numeric inputs from the user.
The program prints the product (result of a multiplication) on screen.
*/
import io from "../../utils/io-for-pf.js";
let a = io.read();
let b = io.read();
let c = a * b;

io.write(c);
