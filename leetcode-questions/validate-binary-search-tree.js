//REMEMBER TO PUSH ROOT.VAL WHEN TRAVERSING A BINARY SEARCH TREE

// Given a binary tree, determine if it is a valid binary search tree (BST).

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
 

const isValidBST = (root, lower = -Infinity, upper = Infinity) => {
  //do an in-order dfs of the binary search tree
  //then check if the array is sorted
  //if the array is sorted, then return true
  //else return false
  let data = []
  
  function dfs(root) {
      if (!root) return;
    if (root.left) {
      dfs(root.left)
    }
    data.push(root.val)
    if (root.right) {
      dfs(root.right)
    }
  }
  dfs(root)
  for (let i = 0; i < data.length; i++) {
    if (data[i+1] <= data[i]) {
      return false
    }
  }
  return true
}

// Example 1:

//     2
//    / \
//   1   3

// Input: [2,1,3]
// Output: true
// Example 2:

//     5
//    / \
//   1   4
//      / \
//     3   6

// Input: [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.