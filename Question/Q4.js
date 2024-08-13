//Check if a given string is a palindrome.

function isPalindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Reverse the cleaned string
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    // Check if the cleaned string is equal to its reversed version
    return cleanedStr === reversedStr;
  }
  
  // Test examples
  console.log(isPalindrome('A man, a plan, a canal: Panama')); // Output: true
  console.log(isPalindrome('hello')); // Output: false
  console.log(isPalindrome('Racecar')); // Output: true