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
    if (!this.root) {
      return [];
    } else {
      let queue = [];
      let data = [[1, 1], [2, 2], [3, 2], [4, 3]];
      let hash = {
        1: 1,
        2: 3,
        3: 4
      }
      let node = this.root;
      let currentLevel;
      queue.push(node)

      while (queue.length) {
        // console.log('this is the data', data)
        node = queue.shift();
        data.push([node.val, currentLevel]);
        if (node.left) queue.push([node.left, currentLevel + 1]);
        if (node.right) queue.push(node.right);
      }
      return data
    }
  }
  bstRightSideView() {
    if (!this.root) {
      return []
    }
    let queue = [[this.root, 1]]
    let data = []
    
    while () {

    }
  }
}

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
