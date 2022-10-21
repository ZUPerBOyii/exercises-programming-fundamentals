/*
# Rework your old exercises
Write the functions `gcd` (the greatest common divisor),
`swapDigits`,
`factorial`,
`variation`,
`avg` (average), and
`largestPrime`.

All these functions should be written such that the tests succeed.
Take a look at your previous programs for the algorithms.
The focus of this exercise, is to decide which parameters to use
and what your function should return.

When working on `variation` keep performance in mind! When the
tests for both `factorial` and `variation` succeed, take a
look at both functions: can you see that they share a big part
of code? Try to extract a function that I would call
`productRange` and use it in both `factorial` and `variation`.
Your tests should still succeed:
 this means your code still works. Changing a program
 (to improve its quality) without changing its solutions or
 outcomes is called *refactoring*.

 On exams, you are expected to do these refactorings (extract and reuse code)
 even when you are not explicitly asked to do so.
*/


export { gcd, swapDigits, factorial, variation, avg, largestPrime };

let a;
let b;

function gcd(a, b){
  a = Math.abs(a);
  b = Math.abs(b);

  while(b !== 0){
    let c = b;
    b = a % b;
    a = c;
  }
  return a;
}

function swapDigits(a, b){

  let rightDigit = 0;             // we want a right digit out of the input
  let sign = 1;                   // we save the sign

  if (a < 0){                      //we save the sign
    sign = -1;
    a = sign * a;
  }

  if (a >= 10 && a <= 99){        //check if the input is between the required range
    rightDigit = a % 10;          // get the right digit
    a = Math.floor(a / 10);     // get the left digit
    rightDigit *= 10;             //right digit needs to become the left digit
    return sign * (rightDigit + a);    //cout this with the sign
  }else{
    return(a * sign);     //if not in range, write it normally
  }
}

function factorial(a){
  if (a <= 0){
    return("Does not compute");
  }
  if (a === 1){
    return(a);
  }

  for (let i = a - 1; i >= 1; i--){
    a = a * i;
  }
  return(a);
}

function variation(){
  // nothing yet
}

function avg(){
  let total = 0;
  let amountOfInputs = 0;

  do {
    a = 5;
    total += a;
    amountOfInputs += 1;
  }while (a !== 0);
  amountOfInputs -= 1;
  return(total / amountOfInputs);
}

function largestPrime(){
  //no idea which one's largest Prime
}