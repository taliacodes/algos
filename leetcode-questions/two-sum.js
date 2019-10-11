// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

const twoSum2 = (arr, target) => {
  let holder = {}
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i]
    if (!(num in holder)) {
      holder[num] = i
    }
  }
  for (let j = 0; j < arr.length; j++) {
    let num = arr[j]
    let difference = target - num
    if (difference in holder) {
      return [j, holder[difference]]
    }
  }
  return -1
}


console.log(twoSum2([2,7,11,15], 9)) //[0,1]
console.log(twoSum2([3,5,7,8], 15)) //[2,3]

// {
//   2: 0,

// }


// {
//   3: 0,
//   5: 1,
//   7: 2,
//   8: 3
// }