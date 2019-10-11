// Write a function that reverses a string. The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.

const reverseString = (strArr) => {
  let i = 0
  let j = strArr.length - 1
  while (i < j) {
    let temp = strArr[i]
    strArr[i] = strArr[j]
    strArr[j] = temp
    i++
    j--
  }
  return strArr
}
 

console.log(reverseString(["h","e","l","l","o"])) 
//["o","l","l","e","h"]
console.log(reverseString(["H","a","n","n","a","h"])) 
//["h","a","n","n","a","H"]


// [o e l l h]
// [o l l e h]

// [t h i s a r e a l l y l o n g s t r i n g]

// [g h i s a r e a l l y l o n g s t r i n t]

// [g n i s a r e a l l y l o n g s t r i h t]

// [g n i s a r e a l l y l o n g s t r i h t]

// [g n i r a r e a l l y l o n g s t r i h t]

