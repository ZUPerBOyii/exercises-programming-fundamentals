/*
# Sentinel Extreme Pro
Keep on asking for input (`int`) until a zero is
entered or when 10 numbers have been entered.
Finally, print both the smallest and the largest
number that was entered (zero does not count).

If no numbers were entered (only zero), you should print two zeros.
*/
import io from "../../utils/io-for-pf.js";

let input = parseInt(io.read());
let highestNumber = 0;
let lowestNumber = 0;
let numbers = [];

while (input !== 0 && numbers.length < 10){
  numbers.push(input);
  input = parseInt(io.read());
}

lowestNumber = numbers[0];
highestNumber = numbers[0];

for (let i = 0; i <= numbers.length; i++){
  if (numbers[i] <= lowestNumber){
    lowestNumber = numbers[i];
  }else if (numbers[i] >= highestNumber) {
    highestNumber = numbers[i];
  }
}
io.write(lowestNumber);
io.write(highestNumber);