// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

const moveZeroes2 = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] !== 0) {
          let temp = arr[j];
          arr[j] = arr[i];
          arr[i] = temp;
          break;
        }
      }
    }
  }
  return arr;
};

const swap = (arr, i, j) => {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

const moveZeroes = (arr) => {
  let lastNonZeroIdx = 0
  for (let curr = 0; curr < arr.length; curr++) {
    if (arr[curr] !== 0) {
      swap(arr, lastNonZeroIdx, curr)
      lastNonZeroIdx++
    }
  }
  return arr
}

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1,3,12,0,0,0]

console.log(moveZeroes([1, 3, 0, 0, 45, 0, 6])); // [1,3,45,6,0,0,0]
                        // n
                        // c

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.
