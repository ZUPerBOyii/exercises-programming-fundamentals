/*
# Reverse sequence
Write a program that asks for 100 numerical inputs and
outputs them in reverse order.
*/
import io from "../../utils/io-for-pf.js";
let numbers = new Array();
let nrCounter = 0;
let maxCounter = 4;


do {
  let input = parseInt(io.read());
  numbers[nrCounter] = input;
  nrCounter++;
}while(nrCounter <= maxCounter);

for (let i = numbers.length - 1; i >= 0; i--){
  io.write(numbers[i]);
}


