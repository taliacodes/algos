// Given a collection of intervals, merge all overlapping intervals.


const mergeIntervals = (intervals) => {
  //make sure they are sorted
  intervals.sort((a,b) => a[0] > b[0])
  let mergedArr = []
  for (let i = 0; i < intervals.length - 1; i++) {
    for (let j = 0; j < intervals[i].length; j++) {
      // console.log('this is the iteration num', i)
      // console.log('here now', intervals[i][j])
      if (intervals[i+1][j] && intervals[i][j+1]) {
        // console.log('these are the numbers of interest', intervals[i+1][j], intervals[i][j+1])
        if (intervals[i+1][j] - intervals[i][j+1] <= 0) {
          mergedArr.push([intervals[i][j], intervals[i+1][j+1]])
        }
      }
    }
  }
  return mergedArr
}


const mergeIntervals2 = (intervals) => {
  intervals.sort((a,b) => a[0] - b[0])
  let resultArr = []
  let curr = intervals[0] // [1,3]
  for (let i = 1; i < intervals.length; i++) {
    console.log(intervals[i])
    let currStart = intervals[i][0]
    let lastEnd = intervals[i-1][1]
    if (currStart <= lastEnd) {
      curr[1] = intervals[i][1]
    }
    //start new interval
    else {
      resultArr.push(curr)
      curr = intervals[i]
      if (i === intervals.length - 1) {
        resultArr.push(curr)
      }
    }
  }
  return resultArr
}

console.log(mergeIntervals2([[1,3],[2,6],[8,10],[15,18]])) // [[1,6],[8,10],[15,18]]
console.log(mergeIntervals([[1,4],[4,5]])) // [[1,5]]


trainA: [[1,3], [5,7], [8,10]]
trainB: [[2,4], [6,7], [11,12]]
trainC: [[3,5], [5,6], [8,10]]




