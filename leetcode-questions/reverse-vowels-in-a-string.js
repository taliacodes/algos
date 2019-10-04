//Write a function that takes a string as input and reverse only the vowels of a string.

//Note: changed the time complexity of this algorithm from O(m*n) because we're looping through the string and then looping through the vowels (using .includes) to O(n) because the Set object has O(1) lookup

const reverseVowels = (str) => {
  let vowelSet = new Set(['a', 'e', 'i', 'o', 'u'])
  let stack = []
  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (vowelSet.has(char)) {
      stack.push(char)
    }
  }
  let reversedStr = ''
  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (vowelSet.has(char)) {
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

