/*
# Basic text functions
Write the functions
`isDigit`,
`toUpper`,
`toLower`,
`isAlpha`,
`isInt`, and
`trim`.
All these functions should be written such that the tests succeed.
The goal of this exercise is to create a lot of
small helper functions and to re-use them.

You can make use of `char2ascii` and `ascii2char`
that respectively turn a character into an integer, and vice versa.

First play with these two functions until you understand how they work.
Then try to write a function `isBetween` this function can be used
to make extreme simple implementations of ``isDigit` and `isAlpha`.

Further, for `trim`, you can make use of `isWhitespace`. Which might come in
handy, since the `trim` function should remove all leading and trailing whitespaces,
but should the whitespaces in between.
*/



function isWhitespace (ch) {
  return ch === " " || ch === "\t" || ch === "\r" || ch === "\n";
}

function char2ascii (ch) {
  if (ch.length !== 1) { // expects strings of length one!
    return -1;
  }

  return ch.charCodeAt(0);
}

function ascii2char (n) {
  return String.fromCharCode(n);
}

export {
  isDigit,
  toUpper,
  toLower,
  isAlpha,
  isInt,
  trim,

  substring
};


function isDigit(a){
  a = a / 1;

  if (a !== a){
    return false;
  }else{
    return true;
  }

}

function toUpper(a){
  a.toUpperCase();
}

function toLower(){

}

function isAlpha(){

}

function isInt(){

}

function trim(){

}

function substring(){

}

