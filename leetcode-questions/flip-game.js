//You are playing the following Flip Game with your friend: Given a string that contains only these two characters: + and -, you and your friend take turns to flip two consecutive "++" into "--". The game ends when a person can no longer make a move and therefore the other person will be the winner.

//Write a function to compute all possible states of the string after one valid move

const flipGame = (str) => {
  let storage = {}
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '+' && str[i+1] === '+') {
      storage[i] = true
    }
  }
  let flippedStr = ''
  for (let i = 0; i < str.length; i++) {
    if (i in storage) {
      flippedStr += '-'
    }
  }
}

console.log(flipGame('++++')) // ['--++'. '+--+', '++--']

let str = 'goodbye'
str[2] = 'z'
console.log(str)

// ++++
// ij

// ++-+

// +++-++
// '--+-++'
// '+---++'
// '+++---'

// place a pointer at 0 and a pointer at 1
// compare the element at idx 0 and idx 1
// if they are both equal to "+", 
