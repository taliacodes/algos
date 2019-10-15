// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// How many possible unique paths are there?

// Above is a 7 x 3 grid. How many possible unique paths are there?

// Note: m and n will be at most 100.

const uniquePaths = (m, n) => {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = new Array(m);
  }
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][0] = 1;
  }
  for (let i = 0; i < matrix[0].length; i++) {
    matrix[0][i] = 1;
  }
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[i].length; j++) {
      matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
    }
  }
  console.log(matrix[n - 1][m - 1]);
};

console.log(uniquePaths(7, 3));

// Example 1:

// Input: m = 3, n = 2
// Output: 3
// Explanation:
// From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Right -> Down
// 2. Right -> Down -> Right
// 3. Down -> Right -> Right
// Example 2:

// Input: m = 7, n = 3
// Output: 28
