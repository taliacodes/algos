//Write a function that takes a string as input and reverse only the vowels of a string.


const isAVowel = (char) => {
  let vowelsArr = ['a', 'e', 'i', 'o', 'u']
  return vowelsArr.includes(char.toLowerCase())
}

const reverseVowels = (str) => {
  let stack = []
  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (isAVowel(char)) {
      stack.push(char)
    }
  }
  let reversedStr = ''
  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (isAVowel(char)) {
      reversedStr += stack.pop()
    }
    else {
      reversedStr += char
    }
  }
  return reversedStr
}

//tried to do this with the set object
// const reverseVowels2 = (str) => {
//   let vowelSet = new Set(['a', 'e', 'i', 'o', 'u'])
//   let i = 0
//   let j = str.length - 1
//   while (i < j) {
//     while (i < j && !vowelSet.has(str[i])) {
//       i++
//     }
//     while (i < j && !vowelSet.has(str[j])) {
//       j--
//     }
//     let temp = str[i]
//     str[i++] = str[j]
//     str[j--] = temp
//   }
//   return str
// }

console.log(reverseVowels("hello")) // holle
console.log(reverseVowels("leetcode")) //leotcede


// h e l l o
// 0 1 2 3 4
// i       j

