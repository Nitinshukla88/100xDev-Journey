/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  if(str1.length !== str2.length) return false;

  // Brute Force

  for(var i = 0; i < str1.length; i++){
    var test = false
    for(var j = 0; j < str2.length; j++){
      if(str1[i].toLowerCase() === str2[j].toLowerCase()){
        test = true
        break;
      }
    }
    if(!test) return false;
  }
  return true;

  // Optimised 

    var chartoIntegerMap = new Map();

    for(var i = 0; i < str1.length; i++){
      if(!chartoIntegerMap.has(str1[i].toLowerCase())){
        chartoIntegerMap.set(str1[i].toLowerCase(), i);
      }
    }

    for(var j = 0; j < str2.length; j++){
      if(!chartoIntegerMap.has(str2[j].toLowerCase())){
        return false;
      }
    }
    return true;

}

module.exports = isAnagram;
