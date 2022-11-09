/*
# Sentinel Extreme
Keep on asking for input (`int`) until a zero is entered.
Finally, print both the smallest and the largest number
that was entered (zero does not count).

If no numbers were entered (only zero), you should print two zeros.

## Example:
    > -1
    > -2
    > 0
    -2
    -1
*/
import io from "../../utils/io-for-pf.js";


let input = parseInt(io.read());
let highestNumber = 0;
let lowestNumber = 0;
let numbers = [];

while (input !== 0){
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

