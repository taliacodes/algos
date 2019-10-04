//Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string


//this should have a O(n) complexity as the lookup for vowels should be O(1) and the loop through each character in the string is O(n)

let vowels = {
  a: true,
  e: true,
  i: true,
  o: true,
  u: true
};

const removeVowels = str => {
  let vowelLessStr = '';
  for (let i = 0; i < str.length; i++) {
    if (!(str[i] in vowels)) {
      vowelLessStr += str[i];
    }
  }
  return vowelLessStr;
};


//this has an O(m*n) complexity because it will loop through each vowel once (n) and each letter in the string once (m)
const removeVowels2 = str => {
  let vowelLessStr = '';
  let vowelSet = new Set(['a', 'e', 'i', 'o', 'u']);
  for (let i = 0; i < str.length; i++) {
    if (!vowelSet.has(str[i])) {
      vowelLessStr += str[i];
    }
  }
  return vowelLessStr;
};



console.log(removeVowels('leetcodeisacommunityforcoders')); // ltcscmmntyfrcdrs
console.log(removeVowels('thisisacat')); // thssct
console.log(removeVowels('aeiou')); //
