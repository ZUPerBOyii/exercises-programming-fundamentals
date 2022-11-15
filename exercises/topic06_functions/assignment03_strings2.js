/*
Write the functions
`reverse`,
`isPalindrome`,
`substringOfLength`,
`find`,
`findAll`,
 `replace`, and
 `decompose`
 such that all tests succeed.

The key of this exercise is to start small: make your
function work for simple and small inputs. Just like in
the previous exercise the key is to reuse existing functions.

*If the functionality you need already exists in
(a) JavaScript (library), try to implement it yourself.
The exercise here is to write code, not to borrow it.*
*/

export {
  reverse,
  isPalindrome,
  substringOfLength,
  find,
  findAll,
  replace,
  decompose
};

function reverse(a){
  let b = "";
  for(let i = a.length; i >= 0; i--){
    b += a[i];
  }
  return b;
}

function  isPalindrome(a){
  let b = "";
  for(let i = a.length; i >= 0; i--){
    b += a[i];
  }
  if (b === a){
    return true;
  }else{
    return false;
  }
}

function substringOfLength(){
  // start pos + length
}

function find(){
  // find substring and give the pos
}

function findAll(){
  // give all the positions with strings in it

}

function replace(){
  // substring replaced by another
}

function decompose(){
  // get the string and get each letter separately
}