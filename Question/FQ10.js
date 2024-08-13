//Return the number of vowels in a string.

function countVowels(str) {
  // Define a regular expression to match vowels (case-insensitive)
  const vowelRegex = /[aeiou]/gi; // 'g' for global search, 'i' for case-insensitive
  const matches = str.match(vowelRegex); // Find all matches

  return matches ? matches.length : 0;
}

// Test examples
console.log(countVowels('Hello World')); // Output: 3
console.log(countVowels('JavaScript is awesome!')); // Output: 8
console.log(countVowels('')); // Output: 0
console.log(countVowels('Rhythm')); // Output: 0