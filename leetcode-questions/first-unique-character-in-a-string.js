// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.


const firstUniqChar = (str) => {
  let letters = {}
   for (let i = 0; i < str.length; i++) {
     let char = str[i]
     if (!(char in letters)) {
       letters[char] = 1
     }
     else {
       letters[char]++
     }
   }
   for (let i = 0; i < str.length; i++) {
     let char = str[i]
     if (letters[char] === 1) {
       return i
     }
   }
   return -1
}

console.log(firstUniqChar('leetcode')) // 0
console.log(firstUniqChar('loveleetcode')) //2


// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.
// Note: You may assume the string contain only lowercase letters.