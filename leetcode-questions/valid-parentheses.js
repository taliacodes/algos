// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.



const validParenthesis = (str) => {
  let parentheses = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  let stack = []
  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (char in parentheses) stack.push(char)
    else if (char === parentheses[stack[stack.length - 1]]) stack.pop()
    else return false
  }
  return true
}


// "()[]{}"
// stack = ["("]


console.log(validParenthesis('()')) //true
console.log(validParenthesis('()[]{}')) //true
console.log(validParenthesis('([)]')) //false
console.log(validParenthesis('(]')) //false
console.log(validParenthesis('{[]}')) //true
