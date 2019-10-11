// Given a binary tree

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

// Initially, all next pointers are set to NULL.
 

// Example:
//    5
//    / \
//   1-> 4
//      / \
//     3-> 6



function connect(root) {
	var prevNode = null;
	var firstNextLevel = null;
	var curt = root;

    while (curt != null) {
                
      if (curt.left != null) {
          if (prevNode != null) {
              prevNode.next = curt.left;
          }
          prevNode = curt.left;
          if (firstNextLevel == null) { // firstNextLevel only need to be assigned once 
              firstNextLevel = curt.left;
          }
      }
      
      if (curt.right != null) {
          if (prevNode != null) {
              prevNode.next = curt.right;
          }
          prevNode = curt.right;
          if (firstNextLevel == null) {
              firstNextLevel = curt.right;
          }
      }
      
      if (curt.next != null) { // when curt.next != null, go to next TreeLinkNode
          curt = curt.next;
      } else {
          curt = firstNextLevel; // iterate the next level
          firstNextLevel = null;
          prevNode = null;
      }
        
    }
}