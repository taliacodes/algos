// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

const minPathSum = grid => {
  if (grid === null || grid.length === 0) return 0

  let sum = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      sum += dfs(grid, i, j)
    }
  }

  return sum

  function dfs(grid, i, j) {
    let sum = 0
    if (i < 0 || i > grid.length || j < 0 || j > grid[i].length) {
      return 0
    }

    if (grid[i + 1][j] > grid[i][j + 1]) {
      sum += grid[i][j + 1]
    }
    else {
      sum += grid[i + 1][j]
    }
    
  }


};



console.log(minPathSum([
  [1, 3, 1], 
  [1, 5, 1], 
  [4, 2, 1]])) // 7 because 1-3-1-1-1

