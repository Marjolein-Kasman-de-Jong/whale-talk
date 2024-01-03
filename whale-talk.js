const input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

// Double all e's and u's and compare input to vowels
for (let i = 0; i < input.length; i++) {
  // Double all e's
  if (input[i] === 'e') {
    resultArray.push(input[i]);
  }
  // Double all u's
  if (input[i] === 'u') {
    resultArray.push(input[i]);
  }
  // Push input[i] to resultArray if it matches vowels[j]
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
}

// Log resultArray to the console
console.log(resultArray);

// Join resultArray into a single string and capitalize all of its letters
const resultString = (resultArray.join('')).toUpperCase();

// Log resultString to the console
console.log(resultString);