class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size++;
    return this;
  }
  pop() {
    if (this.first === null) return undefined;
    let oldFirst = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = oldFirst.next;
      oldFirst.next = null;
    }
    this.size--;
    return oldFirst;
  }
}

let stack = new Stack();
stack.push(20);
// console.log(stack)
stack.push(30);
// console.log('this is the stack after the second item is pushed', stack)
stack.push(50);
// console.log('this is the stack after the third item is pushed', stack)
stack.pop();
// console.log('this is the stack after the first item is popped', stack)
stack.pop();
// console.log('this is the stack after the second item is popped', stack)
stack.pop();
// console.log('this is the stack after the last item is popped', stack)
stack.pop();
// console.log('this is the stack when no items are left', stack)
