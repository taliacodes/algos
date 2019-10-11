// Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
    } else {
      let curr = this.root;
      while (true) {
        if (val < curr.val) {
          if (curr.left === null) {
            curr.left = newNode;
            return this;
          }
          curr = curr.left;
        }
        if (val > curr.val) {
          if (curr.right === null) {
            curr.right = newNode;
            return this;
          } else {
            curr = curr.right;
          }
        }
      }
    }
  }
  bfs() {
    if (!this.root) {
      return [];
    } else {
      let queue = [];
      let data = [];
      let node = this.root;
      queue.push(node)

      while (queue.length) {
        // console.log('this is the data', data)
        node = queue.shift();
        data.push([node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
      return data
    }
  }
  bstRightSideView() {
    let visibleValues = [];
    if (this.root === null) return visibleValues;
    let queue = [];
    queue.push(this.root)
    while (queue.length) {
      // console.log(queue)
      // console.log(visibleValues)
      let size = queue.length;
      for (let i = 0; i < size; i++) {
        let curr = queue.shift();
        if (i === size - 1) {
          visibleValues.push(curr.val);
        }
        if (curr.left !== null) {
          queue.push(curr.left)
        }
        if (curr.right !== null) {
          queue.push(curr.right)
        }
      }
    }
    return visibleValues
  }
  bstRightSideView() {
    //create an array to hold all the values
    let visibleValues = []
    //if the root doesn't exist, return an empty array
    if (this.root === null) return visibleValues
    //create a queue to hold left and right nodes
    let queue = []
    //push the root into the queue
    queue.push(this.root)
    //while there is something in the queue, there are still nodes to process
    while(queue.length) {
      //create variable to hold queues length
      let size = queue.length
      //loop through the queue, in the first iteration, the queue will have 1 thing in it
      for (let i = 0; i < size; i++) {
        let curr = queue.shift()
        if (i === size - 1) {
          visibleValues.push(curr.val)
        }
        if (curr.left) {
          queue.push(curr.left)
        }
        if (curr.right) {
          queue.push(curr.right)
        }
      }
    }
    return visibleValues
  }
  bst() {
    let data = []
    if (!this.root) {
      return;
    }
    let queue = []
    queue.push(this.root)
    while (queue.length) {
      let curr = queue.shift()
      data.push(curr)
      if (curr.left) {
        queue.push(curr.left)
      }
      if (curr.right) {
        queue.push(curr.right)
      }
    }
    traverse(this.root)
    return data
  }
}

queue: [5, 16, 28, 40]
size: 2
curr: 30
visibleValues: [20, 30]

let bst = new BinarySearchTree();
bst.insert(10)
bst.insert(6)
bst.insert(15)
bst.insert(20)
bst.insert(3)
bst.insert(8)
console.log('this is the bst', bst)


console.log('this is the bfs method being run', bst.bfs())

/*
Example:

Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]
Explanation:

   1            <---
 /   \
2     3         <---
 \     \
  5            <---

*/
