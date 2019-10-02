class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = null;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let curr = this.head;
    let newTail = curr;
    while (curr.next) {
      newTail = curr;
      curr = curr.next;
    }
    newTail.next = null;
    this.tail = newTail;

    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return curr;
  }

  //removing a node from the beginning of a list
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

  //adds a node to the beginning of a list
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let oldHead = this.head;
      newNode.next = oldHead;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index >= this.length || index < 0) return undefined;
    let curr = this.head;
    let count = 0;
    while (count !== index) {
      console.log('this is the current', curr.val);
      curr = curr.next;
      console.log('this is the count', count);
      count++;
    }
    return curr;
  }

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
    }
    return this;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let previousNode = get(index - 1);
    let removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }
  
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}
