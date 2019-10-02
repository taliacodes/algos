class Node {
  constructor(val) {
    (this.val = val), (this.next = null), (this.prev = null);
  }
}

class DoublyLinkedList {
  constructor() {
    (this.head = null), (this.tail = null), (this.length = 0);
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    let oldTail = this.tail;
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      oldTail.prev = null;
      this.tail.next = null;
    }
    this.length--;
    return oldTail;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  //SHIFT - to remove
  shift() {
    let oldHead = this.head;
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      oldHead.next = null;
      this.head.prev = null;
    }
    this.length--;
    return oldHead;
  }
  //GET - takes in an index and returns the node at that index
  get(index) {
    if (index < 0 || index >= this.length) return null;
    if (index <= this.length / 2) {
      let count = 0;
      let current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
      return current;
    } else {
      let count = 0;
      let current = this.length - 1;
      while (count !== index) {
        current = current.prev;
        count--;
      }
      return current;
    }
  }
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    } else {
      return false;
    }
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      return !!this.unshift(val);
    }
    if (index === this.length) {
      return this.push(val);
    }
    let newNode = new Node(val);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    //use get to check if something is closer to the end or the beginning
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) this.shift();
    if (index === this.length - 1) this.pop();
    else {
      let toBeRemoved = this.get(index);
      toBeRemoved.next.prev = toBeRemoved.prev;
      toBeRemoved.prev.next = toBeRemoved.next;
      toBeRemoved.next = null;
      toBeRemoved.prev = null;
    }
    this.length--;
    return true;
  }
}

let list = new DoublyLinkedList();
list.push(50);
list.push(30);
list.push(80);
list.insert(1, 5000);
console.log(list);
