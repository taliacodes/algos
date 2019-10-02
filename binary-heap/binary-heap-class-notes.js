/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
//there are many groups of trees and many types of trees -- 
//one type of tree is a binary heap

//there are lots of different types of heaps but we will focus on BINARY HEAPS

//WHAT IS A BINARY HEAP?

//In a MAX binary heap, the parent nodes are always larger than the children
//In a MIN binary heap, the parent nodes are smaller than the children

/*

MAX BINARY HEAP

          41
       /      \
     39        33
   /    \    /    \  
 18     27  12



*/

/*

-Each parent has at most two child nodes
-The value of each parents node is always greater than the child nodes in a MAX Binary Heap
-In a max Binary Heap, the parent is greater than the children, but there are no guarantees between sibling nodes
-A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first
-We can use arrays to store binary heaps
*/


//For any parent in a binary heap array, its left child is stored at (2n+1) and the right child is stored at (2n+2)
//For any child in a binary heap array, its parent is stored at Math.floor((n-1)/2)