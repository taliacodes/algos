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
  contains(val) {
    if (!this.root) return false;
    else {
      let curr = this.root;
      let treeContains = false;
      while (curr && !treeContains) {
        if (val === curr.val) {
          treeContains = true;
        } else if (val < curr.val) {
          curr = curr.left;
        } else {
          curr = curr.right;
        }
      }
      return treeContains;
    }
  }
  find(val) {
    if (!this.root) return -1;
    else {
      let curr = this.root;
      while (curr) {
        if (val === curr.val) {
          return curr.val;
        } else if (val < curr.val) {
          curr = curr.left;
        } else {
          curr = curr.right;
        }
      }
      return -1;
    }
  }
  bfs() {
    if (!this.root) return [];
    else {
      let data = [];
      let queue = [];
      let node = this.root;
      queue.push(node);
      while (queue.length) {
        console.log(queue.length);
        node = queue.shift();
        data.push(node.val);
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }
      console.log(data);
    }
  }
  dfsIn() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  bstRightSideView() {
    let visibleValues = [];
    if (this.root === null) return visibleValues;
    let queue = [];
    queue.push(this.root)
    while (queue.length) {
      console.log(queue)
      console.log(visibleValues)
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
}

let bst = new BinarySearchTree();

bst.insert(20);
bst.insert(10);
bst.insert(5);
bst.insert(16);
bst.insert(30);
bst.insert(28);
bst.insert(40);

// console.log(bst.bfs()); //[20, 10, 30, 5, 16, 28, 40]

console.log(bst.bstRightSideView())

// console.log(bst.dfsIn()); //[5,10,16,20,28,30,40]
