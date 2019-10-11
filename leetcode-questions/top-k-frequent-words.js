// NOTES: you can devise your own sort method


// Given a non-empty list of words, return the k most frequent elements.

// Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.


const topKFrequent = (array, k) => {
  let hashMap = {}
  let wordArr = []
  for (let i = 0; i < array.length; i++) {
    let word = array[i]
    if (!(word in hashMap)) {
      hashMap[word] = 1
    }
    else {
      hashMap[word]++
    }
  }
  for (let key in hashMap) {
    wordArr.push(key)
  }
  console.log('this is the wordArr', wordArr)
  wordArr = wordArr.sort((a,b) => {
    if (hashMap[a] === hashMap[b]) {
      if (a > b) {
        return 1
      }
      else {
        return -1
      }
    }
    else {
      return hashMap[b] - hashMap[a]
    }
  }).slice(0, k)
  // console.log('this is the word array', wordArr)
  return wordArr
}

console.log('this is the final result\n\n', topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2))
console.log('this is the final result\n\n', topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4))
console.log('this is the final result\n\n', topKFrequent(["one", "two", "three", "one", "five", "one", "five", "four"], 3))

// one: 3
// two: 1
// three: 1
// four: 1
// five: 2

//  [ [ 'one', 3 ],
//   [ 'five', 2 ],
//   [ 'two', 1 ],
//   [ 'three', 1 ],
//   [ 'four', 1 ] ]

// console.log('this is the final result\n\n', topKFrequent(["banana", "apple", "mango", "banana", "avocado", "apple", "mango", "apple", "mango", "berries", "berries", "apple"], 3))

// apple: 3
// banana: 2
// berries: 1
// mango: 3
// avocado: 1

// [ [ 'apple', 4 ],
//   [ 'mango', 3 ],
//   [ 'banana', 2 ],
//   [ 'berries', 2 ],
//   [ 'avocado', 1 ] ]

// Example 1:
// Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
// Output: ["i", "love"]
// Explanation: "i" and "love" are the two most frequent words.
//     Note that "i" comes before "love" due to a lower alphabetical order.
// Example 2:
// Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
// Output: ["the", "is", "sunny", "day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words,
//     with the number of occurrence being 4, 3, 2 and 1 respectively.
// Note:
// You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
// Input words contain only lowercase letters.
// Follow up:
// Try to solve it in O(n log k) time and O(n) extra space.