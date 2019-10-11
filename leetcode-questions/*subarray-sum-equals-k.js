// Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.


const subarraySum = (arr, target) => {
  let count = 0 // 1
  let start = 0
  let end = 1
  let sum = arr[start] + arr[end] // 5
  while (end < arr.length) {
    // console.log('this is the sum', sum)
    // console.log('this is the count', count)
    if (sum < target) {
      // console.log('sum less than target')
      end++
      sum += arr[end]
      if (sum === target) {
        count++
      }
    }
    else if (sum > target) {
      // console.log('sum is greater than target')
      start++
      end++
      sum = arr[start] + arr[end]
      
    }
    else {
      // console.log('sum is equal to target')
      sum = sum - arr[start] + arr[end]
      start++
      end++
    }
    // console.log('this is the sum at the end', sum)
    // console.log('this is the count at the end', count)
  }
  return count
}

console.log(subarraySum([1,1,1], 2))
                         S
console.log(subarraySum([1,4,2,1,4,2,2], 7))
                   //      S E 
                         

// Example 1:
// Input:nums = [1,1,1], k = 2
// Output: 2
// Note:
// The length of the array is in range [1, 20,000].
// The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].