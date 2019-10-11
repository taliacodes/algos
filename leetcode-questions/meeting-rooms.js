//Given an array of meeting time intervals consisting of start and end times [[s1, e1], [s2,e2,]...]] where s1 < e1. determine if a person could attend all meetings

//Questions:
//1. Can a person attend a meeting if the difference between the times is 0? [7,10], [5, 7]


const canAttend = (times) => {
  //sort the arrays
  times.sort((a,b) => a[0] - b[0])
  // console.log(times)
  for (let i = 0; i < times.length; i++) {
    for (let j = 0; j < times[i].length; j++) {
      if (times[i+1]) {
        if (times[i+1][j] - times[i][j] < 0) return false
      }
    }
  }
  return true
}


//if the difference between any two times is < 0

console.log(canAttend(
[
  [0,30], //i = 0, j = 0, j = 1
  [5, 10], //1 = 1 j = 0, j = 1
  [15, 20] //i = 2 j = 0, j = 1
])) //false

console.log(canAttend([[7,10], [2, 4]])) //true



// const canAttend2 = (times) => {
//   for (let i = 0; i < times.length; i++) {
    
//   }
// }



// [2, 4], i = 0, j = 0, j = 1
// [7,10], i = 1, j = 0, j = 1

// first iteration
// i = 0, j = 0
// 2
// [i+1][j] === [1][0]

// second iteration
// i = 0 j = 1
// 4
// [i+1][j] === [1][1]

// third iteration 
// i = 1 j = 0
// 7
// [i+1][j] === [2][0]

// fourth iteration
// i = 1 j = 1
// 10
// [i+1][j] === [2][1]


// times[1][0] - times[0][0]
// times[2][0] - times[1][0]

// times[1][1] - times[0][1]
// times[2][1] - times[1][1]