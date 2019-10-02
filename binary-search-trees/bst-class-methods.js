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
}

let bst = new BinarySearchTree();

bst.insert(20);
bst.insert(10);
bst.insert(5);
bst.insert(16);
bst.insert(30);
bst.insert(28);
bst.insert(40);

console.log(bst.bfs()); //[20, 10, 30, 5, 16, 28, 40]

console.log(bst.dfsIn()); //[5,10,16,20,28,30,40]
