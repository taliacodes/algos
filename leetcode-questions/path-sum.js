// Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

// Note: A leaf is a node with no children.

// Given the below binary tree and sum = 22,

//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \      \
// 7    2      1
// return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.

class Node {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

const hasPathSum = (root, sum) => {
  if (!root) return false;
  if (!root.left && !root.right && sum - root.val === 0) {
    return true;
  } else {
    return (
      hasPathSum(root.left, sum - root.val) || (root.right, sum - root.val)
    );
  }
};
