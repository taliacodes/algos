// A peak element is an element that is greater than its neighbors.

// Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.

// The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

// You may imagine that nums[-1] = nums[n] = -∞.

//O(n) compplexity and doesn't account for edge cases like [1] or [1, 2] or [2,1]
const findPeakElement = (nums) => {
  let peak = 1
  let left = peak - 1
  let right = peak + 1
  while (peak < nums.length - 1) {
    if (nums[left] < nums[peak] && nums[right] < nums[peak]) {
      return peak
    }
    else {
      peak++
      left++
      right++
    }
  }
  return 0
}

/*TEST CASES
console.log(findPeakElement([1]))
console.log(findPeakElement([1,2,3,1])) //2
console.log(findPeakElement([1,2,1,3,5,6,4])) //1 or 5 
*/

const findPeakElement2 = (nums) => {
let left = 0
let right = nums.length - 1
while (left < right) {
  let mid = Math.floor((left + right)  / 2)
  if (nums[mid] < nums[mid + 1]) {
    left = mid + 1
  }
  else {
    right = mid
  }
}
return left
}

// console.log(findPeakElement2([1]))
console.log(findPeakElement2([1,2,3,1])) //2
console.log(findPeakElement2([1,2,1,3,5,6,4])) //1 or 5   
                                    l m r