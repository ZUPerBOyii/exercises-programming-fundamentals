/*
# Euclid
Write a program that reads two positive integers (no need to check the input).
Print out the largest divisor that both numbers have in common
(the greatest common divisor, GCD or "grootste gemene deler")

**Hint:** use Euclid's algorithm:
    https://en.wikipedia.org/wiki/Euclidean_algorithm
    https://nl.wikipedia.org/wiki/Algoritme_van_Euclides#Het_algoritme
*/
import io from "../../utils/io-for-pf.js";
let a = parseInt(io.read());
let b = parseInt(io.read());

a = Math.abs(a);
b = Math.abs(b);

while(b){
  let c = b;
  b = a % b;
  a = c;
}
io.write(a);


