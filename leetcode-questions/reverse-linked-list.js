//Reverse a singly linked list.
class Node {
  constructor(val) {
    this.val = val
    this.next = null
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
  reverse() {
    let node = this.head
    this.head = this.tail
    this.tail = node
    let next;
    let prev = null
    for (let i = 0; i < this.length; i++) {
      next = node.next
      node.next = prev
      prev = node
      node = next
    }
    this.print()
  }
  print() {
    let arr = []
    let curr = this.head
    while (curr) {
      arr.push(curr.val)
      curr = curr.next
    }
    console.log(arr)
  }
}



let newList = new SinglyLinkedList()
console.log(newList)
newList.push(1)
newList.push(2)
newList.push(3)
newList.push(4)
newList.push(5)
newList.reverse()

//SinglyLinkedList {
  // head: Node { val: 1, next: Node { val: 2, next: [Node] } },
  // tail: Node { val: 5, next: null },
  // length: 5 }
// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// Follow up:

// A linked list can be reversed either iteratively or recursively. Could you implement both?