/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if(str.length === 0) return true;

  const filteredString = str.replace(/[^a-zA-Z0-9]/g, "");

  
  for(var i = 0; i < filteredString.length/2; i++
  ){
    if(filteredString[i].toLowerCase() !== filteredString[filteredString.length - 1 - i
    ].toLowerCase()){
      return false;
    }
  }
  return true;
}
module.exports = isPalindrome;
