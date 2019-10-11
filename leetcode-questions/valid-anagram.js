// Given two strings s and t , write a function to determine if t is an anagram of s.

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false
  let hashMap = {}
  for (let i = 0; i < s.length; i++) {
    let el = s[i]
    if (!(el in hashMap)) hashMap[el] = 1
    else hashMap[el]++
  }
  for (let j = 0; j < t.length; j++) {
    let el2 = t[j]
    if (!(el2 in hashMap)) return false
    else hashMap[el2]--
  }
  for (let key in hashMap) {
    if (hashMap[key] !== 0) return false
  }
  return true
}

/*
TEST CASES:
console.log(isAnagram('anagram', 'nagaram')) // true
console.log(isAnagram('rat', 'car'))
*/

const isAnagram2 = (s, t) => {
  if (s.length !== t.length) return false
  let alphabetArr = new Array(26).fill(0)
  for (let i = 0; i < s.length; i++) {
    let sIndex = s.charCodeAt(i) - 97
    alphabetArr[sIndex]++
    let tIndex = t.charCodeAt(i) - 97
    alphabetArr[tIndex]--
  }
  for (let j = 0; j < alphabetArr.length; j++) {
    if (alphabetArr[j] !== 0) return false
  }
  return true
}

console.log(isAnagram2('anagram', 'nagaram')) // true
console.log(isAnagram2('rat', 'car'))