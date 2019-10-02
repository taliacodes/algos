class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  //this is the enqueue, which is basically a push on an SLL
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
  //this is the dequeue which is basically a shift on an SLL
  shift() {
    let oldHead = this.head;
    if (!this.head) return undefined;
    else {
      this.head = this.head.next;
      oldHead.next = null;
    }
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return oldHead;
  }
}

let queue = new Queue();
queue.push(20);
// console.log(queue)
queue.push(30);
// console.log('this is the queue after the second item is pushed', queue)
queue.push(50);
// console.log('this is the queue after the third item is pushed', queue)
queue.shift()
// console.log('this is the queue after the first item is popped', queue)
queue.shift()
// console.log('this is the queue after the second item is popped', queue)
queue.shift()
// console.log('this is the queue after the last item is popped', queue)
queue.shift()
// console.log('this is the queue when no items are left', queue)
