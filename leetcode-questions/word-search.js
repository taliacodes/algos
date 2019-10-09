/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
// Given a 2D board and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

const exist = (board, word) => {
  let doesExist = false
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0]) {
        dfs(board, word, i, j, 0)
      }
    }
  }
  return doesExist
};

function dfs(board, word, i, j, count) {
  console.log(board)
  // console.log('this is the board', board); //0,0
  if (
    i < 0 ||
    i >= board.length ||
    j < 0 ||
    j >= board[i].length ||
    board[i][j] !== word[0]
  ) {
    return false;
  }

  if (count === word.length) {
    return true;
  }

  let temp = board[i][j];
  board[i][j] = ' ';

  dfs(board, word.slice(1), i + 1, j, count + 1)
  dfs(board, word.slice(1), i - 1, j, count + 1)
  dfs(board, word.slice(1), i, j + 1, count + 1)
  dfs(board, word.slice(1), i, j - 1, count + 1)

  board[i][j] = temp;
}

// BCCED

board = [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']];

console.log(exist(board, 'SEE'));

// Given word = "ABCCED", return true.
// Given word = "SEE", return true.
// Given word = "ABCB", return false.
// [
//   ([0,   0,  0, 'E'],
//   ['S', 'F', 0, 'S'],
//   ['A', 'D', 0, 'E'])
// ];

// [
//   [ 0, 0, 0, E ],
//   [ S, F, 0, S ],
//   [ 0, 0, 0, E ] ]

// [
//   [ 0, 0, 0, E ],
//   [ S, F, 0, S ],
//   [ 0, 0, 0, E ] ]

// [ [ 'A', 'B', 'C', 'E' ],
//   [ 'S', 'F', 'C', 'S' ],
//   [ 'A', 'D', 'E', 'E' ] ]

// [ [ 'A', 'B', 'C', 'E' ],
//   [ 0, 'F', 'C', 'S' ],
//   [ 'A', 'D', 'E', 'E' ] ]

// [ [ 'A', 'B', 'C', 'E' ],
//   [ 0, 'F', 'C', 'S' ],
//   [ 'A', 'D', 'E', 'E' ] ]

// [ [ 'A', 'B', 'C', 'E' ],
//   [ 0, 'F', 'C', 'S' ],
//   [ 'A', 'D', 'E', 'E' ] ]

// [ [ 'A', 'B', 'C', 'E' ],
//   [ 0, 'F', 'C', 'S' ],
//   [ 'A', 'D', 'E', 'E' ] ]

// [ [ 'A', 'B', 'C', 'E' ],
//   [ 0, 'F', 'C', 'S' ],
//   [ 'A', 'D', 'E', 'E' ] ]


// [ [ 'A', 'B', 'C', 'E' ],
//   [ 'S', 'F', 'C', 'S' ],
//   [ 'A', 'D', 'E', 'E' ] ]

// [ [ 'A', 'B', 'C', 'E' ],
//   [ ' ', 'F', 'C', 'S' ],
//   [ 'A', 'D', 'E', 'E' ] ]

// [ [ 'A', 'B', 'C', 'E' ],
//   [ ' ', 'F', 'C', 'S' ],
//   [ 'A', 'D', 'E', 'E' ] ]

// [ [ 'A', 'B', 'C', 'E' ],
//   [ ' ', 'F', 'C', 'S' ],
//   [ 'A', 'D', 'E', 'E' ] ]

// [ [ 'A', 'B', 'C', 'E' ],
//   [ ' ', 'F', 'C', 'S' ],
//   [ 'A', 'D', 'E', 'E' ] ]

// [ [ 'A', 'B', 'C', 'E' ],
//   [ 'S', 'F', 'C', 'S' ],
//   [ 'A', 'D', 'E', 'E' ] ]

// [ [ 'A', 'B', 'C', 'E' ],
//   [ 'S', 'F', 'C', ' ' ],
//   [ 'A', 'D', 'E', 'E' ] ]

// [ [ 'A', 'B', 'C', 'E' ],
//   [ 'S', 'F', 'C', ' ' ],
//   [ 'A', 'D', 'E', ' ' ] ]

// [ [ 'A', 'B', 'C', 'E' ],
//   [ 'S', 'F', 'C', ' ' ],
//   [ 'A', 'D', 'E', ' ' ] ]

// [ [ 'A', 'B', 'C', 'E' ],
//   [ 'S', 'F', 'C', ' ' ],
//   [ 'A', 'D', 'E', ' ' ] ]

// [ [ 'A', 'B', 'C', 'E' ],
//   [ 'S', 'F', 'C', ' ' ],
//   [ 'A', 'D', 'E', ' ' ] ]

// [ [ 'A', 'B', 'C', 'E' ],
//   [ 'S', 'F', 'C', ' ' ],
//   [ 'A', 'D', ' ', ' ' ] ]

// [ [ 'A', 'B', 'C', 'E' ],
//   [ 'S', 'F', 'C', ' ' ],
//   [ 'A', 'D', ' ', ' ' ] ]

// [ [ 'A', 'B', 'C', 'E' ],
//   [ 'S', 'F', 'C', ' ' ],
//   [ 'A', 'D', ' ', ' ' ] ]
  
// [ [ 'A', 'B', 'C', 'E' ],
//   [ 'S', 'F', 'C', ' ' ],
//   [ 'A', 'D', ' ', ' ' ] ]

// [ [ 'A', 'B', 'C', 'E' ],
//   [ 'S', 'F', 'C', ' ' ],
//   [ 'A', 'D', 'E', 'E' ] ]

// [ [ 'A', 'B', 'C', ' ' ],
//   [ 'S', 'F', 'C', ' ' ],
//   [ 'A', 'D', 'E', 'E' ] ]

// [ [ 'A', 'B', 'C', ' ' ],
//   [ 'S', 'F', 'C', ' ' ],
//   [ 'A', 'D', 'E', 'E' ] ]

// [ [ 'A', 'B', 'C', ' ' ],
//   [ 'S', 'F', 'C', ' ' ],
//   [ 'A', 'D', 'E', 'E' ] ]

// [ [ 'A', 'B', 'C', ' ' ],
//   [ 'S', 'F', 'C', ' ' ],
//   [ 'A', 'D', 'E', 'E' ] ]

// [ [ 'A', 'B', 'C', 'E' ],
//   [ 'S', 'F', 'C', ' ' ],
//   [ 'A', 'D', 'E', 'E' ] ]

// [ [ 'A', 'B', 'C', 'E' ],
//   [ 'S', 'F', 'C', ' ' ],
//   [ 'A', 'D', 'E', 'E' ] ]
