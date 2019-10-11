// Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.

// Note:
// The given integer is guaranteed to fit within the range of a 32-bit signed integer.
// You could assume no leading zero bit in the integer’s binary representation.

// const numComp = () => {
  
// }


// 2^5

// Example 1:
// Input: 5
// Output: 2

// Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.

// Example 2:
// Input: 1
// Output: 0
// Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.

// binary representation fo 5 is 101

//        2^2 2^1 2^0
//         4   2   1


// Quotient	 	Remainder	 
// 203 ÷ 2 =	101	1	 
// 101 ÷ 2 =	50	1	↑
// 50  ÷ 2 =	25	0	↑
// 25  ÷ 2 =	12	1	↑
// 12  ÷ 2 =	6	  0	↑
// 6   ÷ 2 =	3	  0	↑
// 3   ÷ 2 =	1	  1	↑
// 1   ÷ 2 =	0	  1	↑

//11001011

const numComplement = (num) => {
  let str = ''
  let remainder;
  while (num >= 1) {
    remainder = num % 2
    str += remainder.toString()
    num = (num - remainder)/2
  }
  str = str.split('').reverse()
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '0') str[i] = '1'
    else str[i] = '0'
  }
  str = str.reverse()
  let sum = 0
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === '1') {
      sum += Math.pow(2, i)
    }
  }
  return sum
}


console.log(numComplement(203))

