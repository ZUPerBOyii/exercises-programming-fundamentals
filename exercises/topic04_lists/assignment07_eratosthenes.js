/*
# Sieve of Eratosthenes
Write a program that expects a positive integer as input.
This input is the upper bound.
Then, the program prints all prime-numbers below that upper bound.

**Hint 1:** Look up "Sieve of Eratosthenes" and implement this algorithm.
**Hint 2:** Skip this exercise if you have other exercises left to make.

    > 14
    2
    3
    5
    7
    11
    13
*/
import io from "../../utils/io-for-pf.js";

let i;
let n = parseInt(io.read());
const primeNumbers = new Array(n).fill(1);

while (n <= 1) {
  n = parseInt(io.read());
}
for (i = 2; i <= Math.sqrt(n); i++) {
  if (primeNumbers[i] === 1) {
    for (let j = 2; i * j <= n; j++) {
      primeNumbers[i * j] = 0;
    }
  }
}
for (i = 0; i <= primeNumbers.length; i++) {
  if (primeNumbers[i] === 1) {
    io.write(primeNumbers[i]);
  }
}


