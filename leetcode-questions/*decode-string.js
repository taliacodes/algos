// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

// Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].


const decode = (str) => {
  let resultStr = ''
  let bracketStack = []
  let multiplierStack = []
  let currStr = ''

  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (!bracketStack.length && !multiplierStack.length && isLetter(char)) {
      resultStr += char
    }
    if (isNum(char)) {
      multiplierStack.push(parseInt(char))
    }
    else if (char === '[') {
      bracketStack.push(char)
    }
    else if (isLetter(char)) {
      currStr += char
    }
    else {
      bracketStack.pop()
      let multiplier = multiplierStack.pop()
      resultStr += currStr.repeat(multiplier)
      currStr = ''
    }
    
  }
  return resultStr
}

function isLetter(str) {
  return (/[a-z]/.test(str));
}
function isNum(str) {
  return (/[2-9]/g).test(str)
}
console.log(decode('3[a]2[bc]')) //"aaabcbc"

// bracketStack ['['
// currentMultiplier [3]
// letterHolder ['a']

// resultStr = 'acc'

// console.log('Chorus lyrics for "Happy": ' + chorus.repeat(27));


console.log(decode('3[a2[c]]')) // "accaccacc"
console.log(decode('2[abc]3[cd]ef')) //"abcabccdcdcdef"

console.log()

// Examples:

// s = "3[a]2[bc]", return "aaabcbc".
// s = "3[a2[c]]", return "accaccacc".
// s = "2[abc]3[cd]ef", return "abcabccdcdcdef".