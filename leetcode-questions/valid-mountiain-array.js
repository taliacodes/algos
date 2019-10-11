// Given an array A of integers, return true if and only if it is a valid mountain array.

// Recall that A is a mountain array if and only if:

// A.length >= 3
// There exists some i with 0 < i < A.length - 1 such that:
// A[0] < A[1] < ... A[i-1] < A[i]
// A[i] > A[i+1] > ... > A[A.length - 1]
 
const validMountainArray = (arr) => {
  let i = 0
  let j = arr.length - 1
  while (i < j) {
    if (arr[i] >= arr[i + 1]) {
      return false
    } 
    else {
      i++
    }
    if (arr[j] >= arr[j - 1]) {
      return false
    }
    else {
      j--
    }
  }
  return true
}

console.log(validMountainArray([2,1])) //false
console.log(validMountainArray([3,5,5])) //false
console.log(validMountainArray([0,3,2,1])) //true

console.log(validMountainArray([1,4,7,8,10,12,5,3])) //true
                                    i       j 

// Example 1:

// Input: [2,1]
// Output: false
// Example 2:

// Input: [3,5,5]
// Output: false
// Example 3:

// Input: [0,3,2,1]
// Output: true

// [0,3,4,5,6,7,8]