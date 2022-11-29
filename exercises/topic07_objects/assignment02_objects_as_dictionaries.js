/*
Objects can be used to represent 'dictionary' like data, whose main purpose is looking up data,
but you will also have to store new data and occasionally remove some. These objects are usually
homogeneous: all keys are the same type, but all values have the same type as well.

Write a function `countLetters` that takes a piece of text as input and produces an object that
contains the frequency for each letter. This function is case-insensitive, and does not consider
punctuations, numbers and/or any other special characters.

Second, write a function `popMostFrequent` that, given a frequency table of letters, computes the most frequent one.
As a result the frequency table should be updated such that the most frequent letter is removed.

Finally, write a function `orderLettersByFrequency` that, given a piece of text, returns all the letters it contains in
order of frequency (i.e., the most frequent letter first). We could use "array" as return-type, but because all the elements are "chars" (letters),
we can also use a string as return type. (on an exam it would be your job to deduce this requirement from the tests.)
*/


export {countLetters, orderLettersByFrequency, popMostFrequent};


function countLetters(text) {
  const res = {};
  for (const ch of text) {
    if(isAlpha(ch)) {
      const lowerCase = toLower(ch);
      if(lowerCase in res)
        res[lowerCase]++;
      else
        res[lowerCase] = 1;
    }
  }
  return res;
}

function findMostFrequent(frequencies) {
  let maxFrequency = 0;
  let mostFrequentChar = "";
  for (const ch in frequencies) {
    if(frequencies[ch] > maxFrequency) {
      mostFrequentChar = ch;
      maxFrequency = frequencies[mostFrequentChar];
    }
  }
  return mostFrequentChar;
}

function popMostFrequent(frequencies) { //CQS violation though
  const mostFrequentChar = findMostFrequent(frequencies);
  delete frequencies[mostFrequentChar];
  return mostFrequentChar;
}

function orderLettersByFrequency(text) {
  let res = "";
  const frequencies = countLetters(text);
  let ch = popMostFrequent(frequencies);
  while(ch !== "") {
    res += ch;
    ch = popMostFrequent(frequencies);
  }
  return res;
}

