// Given an array nums and a value val, remove all instances of that value in-place and return the new length.

const removeElement = (arr, val) => {
  let index = 0
  for (let i = 0; i < arr.length; i++) {
    console.log('this is the index', index)
    let el = arr[i]
    if (el !== val) {
      console.log('this is the index before ++', index)
      arr[index++] = el

      console.log('this is the index after ++', index)
      console.log('this is the arr after setting arr[index] == el', arr)
    }
  }
  return index
  
}

console.log(removeElement([3,2,0,3,4,2], 3)) //2 [2,2,3,3]
// console.log(removeElement([0,1,2,2,3,0,4,2], 2)) //5 [0,1,3,0,4]


// const arr = [1,2,3,4,5,6]
// arr[arr.length + 1] = arr[2]
// console.log(arr)