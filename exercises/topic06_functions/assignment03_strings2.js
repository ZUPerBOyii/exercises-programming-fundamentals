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

import {substring} from "./assignment02_strings.js";

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

function substringOfLength(a, start){
  // start pos + length
  let subString;
  let wordLength = 0;

  subString = (a,start);
  wordLength = subString.length;
  return subString + " " + wordLength;
}

function find(a, word){
  // find substring and give the pos
  let counter = "";
  for (let i = 0; i < word.length; i++){
    for (let j = 0; j < word.length; j++){
      if (a[i] === word[j]){
        counter += j;
      }
    }
  }
  return counter + 1;
}

function findAll(){
  // give all the positions with strings in it

}

function replace(word, a, b){
  // substring replaced by another
  let originalWord = [];
  for (let i = 0; i < word.length; i++){
    originalWord.push(word[i]);
  }
  for (let j = 0; j < originalWord.length; j++){
    if (a === originalWord[j]){
      originalWord[j] = b;
    }
  }
  let newWord = "";
  for (let k = 0; k < originalWord.length; k++){
    newWord += originalWord[k];
  }
  return newWord;
}

function decompose(a){
  // get the string and get each letter separately
  let letters = "";
  for (let i = 0; i < a.length; i++){
    letters += a[i] + " ";
  }
  return a + " " + letters;
}