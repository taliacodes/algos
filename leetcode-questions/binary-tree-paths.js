//Given a binary tree, return all root-to-leaf paths.

//Note: A leaf is a node with no children.


// Example:

// Input:

//           1
//         /   \
//        2     3
//      /   \
//     6      5

// Output: ["1->2->5", "1->3"]

// Explanation: All root-to-leaf paths are: 1->2->5, 1->3

binaryTreePaths() {
  let list = []
  if (!root) {
    return list
  }

  function dfs(root, path, list) {
    path += root.val
    if (root.left === null && root.right === null) {
      list.push(path)
    }
    if (root.left !== null) {
      dfs(root.left, path + '->', list)
    }
    if (root.right !== null) {
      dfs(root.right, path + '->', list)
    }
  }

  dfs(root, '', list)
  return list
}



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
        node = queue.shift();
        data.push(node.val);
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }
      return data;
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
  binaryTreePaths() {
    let list = []
    if (!this.root) {
      return list
    }

    function dfs(root, path, list) {
      path += root.val
      if (root.left === null && root.right === null) {
        list.push(path)
      }
      if (root.left !== null) {
        dfs(root.left, path + '->', list)
      }
      if (root.right !== null) {
        dfs(root.right, path + '->', list)
      }
    }

    dfs(this.root, '', list)
    return list
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

// console.log(bst.dfsIn()); //[5,10,16,20,28,30,40]

console.log(bst.binaryTreePaths())




// let curr = this.root
// if (!root) {
//   return;
// }
// while (curr.next) {

// }