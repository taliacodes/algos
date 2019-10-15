/* eslint-disable complexity */
// Given a string, reduce the string by removing 3 or more consecutive identical characters. You should greedily remove characters from left to right.

const crushIt = str => {
  if (!str.length || str.length < 3) {
    return str;
  }
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    
    let curr = str[i];
    let lastIdx = stack.length - 1;
    if (stack.length && stack[lastIdx].char === curr) {
      stack[lastIdx].value++;
    } else {
      if (
        stack.length &&
        stack[lastIdx].char !== curr &&
        stack[lastIdx].value >= 3
      ) {
        stack.pop();
        lastIdx = stack.length - 1;
      }
      if (stack.length && stack[lastIdx].char === curr) {
        stack[lastIdx].value++;
      } else {
        stack.push({ char: curr, value: 1 });
      }
    }
    if (i === str.length - 1 && stack[lastIdx].value >= 3) stack.pop();
    console.log('this is the stack', stack)
  }
  return stack.map(elem => elem.char.repeat(elem.value)).join('');
};

//recrusive solution

const crushIt2 = str => {
  if (str.length < 3) return str
  for (let start = 0; start < str.length - 2; start++) {
    if (str[start] === str[start + 1] && str[start] === str[start+2]) {
      let end = start + 2
      while (end < str.length - 1 && str[end + 1] === str[end]) {
        end++
      }
      return crushIt(str.slice(0,start) + str.slice(end+1))
    }
  }
  return str
}


const crushIt3 = str => {
  if (!str.length || str.length === 1) {
    return str
  }
  let stack = []
  for (let i = 0; i < str.length; i++) {
    let curr = str[i]
    let lastId = stack.length - 1

    //check if equal
    if (stack.length && stack[lastId].char === curr) {
      stack[lastId].value++
    } else {
      if (stack.length && stack[lastId].char !== curr && stack[lastId].value >= 3) {
        stack.pop()
        lastId = stack.length - 1
      }
      if (stack.length && stack[lastId].char === curr) {
        stack[lastId].value++
      } else {
        stack.push( {char: curr, value: 1})
      }
      
      if (i === str.length - 1 && stack[lastId].value >= 3) stack.pop()
    }
  }
  return stack.map(elem => elem.char.repeat(elem.value)).join('')
}

// // eslint-disable-next-line max-statements
// const crushIt = str => {
//   str = str.split('')
//   console.log(str)
//   let count = 1 // 3
//   let nextLetterCount = 0 // 3
//   let nextLetter = '' // a
//   let currLetter = str[0] // b
//   let stack = []
//   for (let i = 1; i < str.length; i++) {
//     console.log('this is the string', str)
//     console.log('this is the stack', stack)
//     let char = str[i]
//     if (char === currLetter) {
//       count++
//     }
//     else if (char !== currLetter && count < 3) {
//       stack.push([currLetter, count])
//       count = 1
//       currLetter = char
//     }
//     else if (char !== currLetter && count >= 3) {
//       if (stack.length && char === stack[stack.length - 1][0]) {
//         nextLetter = currLetter
//         nextLetterCount = 1
//         for (let j = i + 1; j < str.length; j++) {
//           let nextChar = str[j]
//           if (nextChar === nextLetter) {
//             nextLetterCount++
//           }
//           else {
//             break;
//           }
//         }
//         if (nextLetterCount + stack[stack.length - 1][1] >= 3) {
//           str.splice(i - count - stack[stack.length - 1][1], i + nextLetterCount)
//         stack.pop()
//         nextLetterCount = 0
//         nextLetter = ''
//         count = 1
//         currLetter = char
//         }
//       }
//       else {
//         str.splice(i, i + count)
//         nextLetterCount = 0
//         nextLetter = ''
//         count = 1
//         currLetter = char

//       }
//     }
//   }
//   return str.join('')
// }

// aabbbacc
//      i
// stack = [['a', 2]]

console.log(crushIt('aabbbaaacc')); // cc
console.log(crushIt('aaabbbaaccc')); // aa
console.log(crushIt('aabbcccaaabbaa')); //''
console.log(crushIt('abbaccbbbcc')) // abba

//put it in a hashmap
