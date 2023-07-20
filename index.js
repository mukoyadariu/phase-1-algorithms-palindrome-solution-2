function isPalindrome(word) {
  // Write your algorithm here
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/// index.js

// Function to check if a string is a palindrome
function isPalindrome(str) {
  // Convert the string to lowercase to make the comparison case-insensitive
  str = str.toLowerCase();

  // Two pointers to check characters from both ends of the string
  let left = 0;
  let right = str.length - 1;

  // Loop until the two pointers meet in the middle
  while (left < right) {
    // If characters at the two pointers are not equal, the string is not a palindrome
    if (str[left] !== str[right]) {
      return false;
    }

    // Move the pointers inward
    left++;
    right--;
  }

  // If the loop completes, the string is a palindrome
  return true;
}

module.exports = isPalindrome;


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
