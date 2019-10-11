//Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

//without using a hashmap
const isValid = (str) => {
  let stack = []
  for (let i = 0; i < str.length; i++) {
    let el = str[i]
    let lastEl = stack[stack.length - 1]
    // console.log('this is the stack', stack)
    // console.log('this is the last element', lastEl)
    if (el === '{' || el === '(' || el === '[') {
      stack.push(el)
      // console.log('this is the stack if el is pushed in', stack)
    }
    else if (el === '}' && lastEl === '{') stack.pop()
    else if (el === ')' && lastEl === '(') stack.pop()
    else if (el === ']' && lastEl === '[') stack.pop()
    else return false
  }
  if (stack.length === 0) return true
  else return false
}

/* TEST CASES
console.log('this is the first one', isValid('()')) //true
console.log('this is the second one',isValid('()[]{}')) //true
console.log('this is the third one', isValid('(]')) //false
console.log(isValid('([)]')) //false
console.log(isValid('{[]}')) //true
*/


const isValid2 = (str) => {
  let stack = []
  let hashMap = {
    '(': ')',
    '{': '}',
    '[': ']'
  }
  for (let i = 0; i < str.length; i++) {
    let lastElInStack = stack[stack.length - 1]
    if (str[i] in hashMap) stack.push(str[i])
    else if (str[i] === hashMap[lastElInStack]) stack.pop()
    else return false
  }
  return stack.length === 0
}

console.log('this is the first one', isValid2('()')) //true
console.log('this is the second one',isValid2('()[]{}')) //true
console.log('this is the third one', isValid2('(]')) //false
console.log(isValid2('([)]')) //false
console.log(isValid2('{[]}')) //true

