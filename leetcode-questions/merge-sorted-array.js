// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.

const merge2 = (nums1, nums2) => {
  let one = 0;
  let two = 0;
  let sortedArr = [];
  while (two < nums2.length && nums1[one]) {
    if (nums1[one] < nums2[two]) {
      sortedArr.push(nums1[one]);
      one++;
    } else if (nums1[one] > nums2[two]) {
      sortedArr.push(nums2[two]);
      two++;
    } else {
      sortedArr.push(nums1[one]);
      one++;
    }
  }
  return sortedArr.concat(nums2.slice(two));
};

const merge = (nums1, m, nums2, n) => {
  m--;
  n--;
  for (let k = nums1.length - 1; k >= 0; k--) {
    if (m >= 0 && n >= 0) {
      if (nums1[m] >= nums2[n]) {
        nums1[k] = nums1[m];
        m--;
      } else {
        nums1[k] = nums2[n];
        n--;
      }
    } else if (m < 0 && n >= 0) {
      nums1[k] = nums2[n];
      n--;
    }
  }
  console.log(nums1)
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

// Example:

// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]

// [1,2,3]
//        i
// [2,5,6]
//    j
// [1, 2, 2, 3, ]
