/*
# Recursion

Fibonacci was an Italian mathematician who lived around 1200 A.D..
He devised a sequence of numbers, called the Fibonacci-numbers which can easily expressed
as a "meervoudig functievoorschrift". We do not need to understand the implications, need or even mathematics.

We should however be able to translate this into a recursive JavaScript function.

<pre>
          /
          | 0, for n = 0
          |
fib(n) = <  1, for n = 1
          |
          | fib(n-1) + fib(n-2), else
          \
</pre>

For bigger numbers, this solution is correct but too slow.
Write a second version `fibFast` that uses a loop rather than recursion.
**Hint:** Search the internet for help.
**Hint:** Skip this *fast* exercise if you are running behind!


*/


export {fib, fibFast};

let fibCalls = 0;

function fib(n, cache = []) {
  while(cache.length < n + 1) cache.push(NaN);
  fibCalls++;
  if(!isNaN(cache[n])) return cache[n];
  if(n === 0) return 0;
  if(n === 1) return 1;
  const res = fib(n-1, cache) + fib(n-2, cache);
  cache[n] = res;
  return res;
}

function fibX(n) {
  let fibn_2 = 0;
  let fibn_1 = 1;
  let fibn = fibn_1 + fibn_2;
  while(n>2) {
    fibn_2 = fibn_1;
    fibn_1 = fibn;
    fibn = fibn_1 + fibn_2;
    n--;
  }
  return fibn;
}


