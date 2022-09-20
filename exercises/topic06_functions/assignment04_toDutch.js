/*
# To Dutch
Write the function`toDutch`, such that all tests succeed.

The key of this exercise is to start small: make your
function work for simple and small input.
E.G., make your `toDutch` function first for digits,
than for 2-digit numbers, etc.

Just like in the previous exercises the key is to reuse existing functions.
On exams, you are expected to do these refactorings (extract and reuse code) even when you are not explicitly asked to do so.

*If the functionality you need already exists in
(a) JavaScript (library), try to implement it yourself.
The exercise here is to write code, not to borrow it.*
*/

const SMALL = [
  "nul", "een", "twee", "drie", "vier",
  "vijf", "zes", "zeven", "acht", "negen",

  "tien", "elf", "twaalf", "dertien", "veertien",
  "vijftien", "zestien", "zeventien", "achttien", "negentien"
];

const TENS = ["nul", "tien", "twintig", "dertig", "veertig",
  "vijftig", "zestig", "zeventig", "tachtig", "negentig"];

const SCALES = ["een", "tien", "honderd", "duizend ", " miljoen ",
  " miljard ", " biljoen ", " biljard ", " triljoen ", " triljard "];


export { toDutch };
