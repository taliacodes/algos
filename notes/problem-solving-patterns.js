//SLIDING WINDOW PATTERN

/*

1. You've been asked to find the longest, shortest substring or subarray, or a desired value
2. Input is linear data structure such as a linked list, array, or string

Ex: 
- Maximum sum subarray of size K (easy)
- Longest Substring with "K" distinct characters (medium)
- String anagrams (hard)

*/

//TWO POINTERS OR ITERATORS

/*

1. When you're asked to compare each element of an array to its other elements and find a pair
2. It will feature problems where you deal with sorted arrays (or Linked Lists) and need to find a set of elements that fulfill certain constraints
3. The set of elements in the array is a pair, a triplet, or even a subarray

Ex:
-Squaring a sorted array (easy)
-Triplets that sum to zero (medium)
-Comparing strings that contain backspaces (medium)

*/

//FAST AND SLOT POINTERS/HARE & TORTOISE ALGORITHM

/*

1. Uses two pointers which move through the array (or sequence/linked list) at different speeds
2. Can be used when dealing with cyclic linked lists or arrays
3. Loop in a linked list or array
4. When you need to know the position of a certain element or the overall length of the linked list
5. If you're trying to determine if a linked lsit is a palindrome

Ex:

- Linked List Cycle (easy)
- Palindrome Linked List (medium)
- Cycle in a Circular Array (hard)

*/

//Merge Intervals

/*

1. When you need to find the overlapping intervals or merge intervals if they overlap
   - a and b do not overlap
   - a and b overlap, b ends after a
   - a completely overlaps b
   - a and b overlap, a ends after b
   - b completely overlaps a
   - a and b do not overlap
2. When you're inserting intervals to optimize interval merges
3. If you're asked to produce a list with only mutually exclusive intervals
4. If you hear the term "overlapping intervals"

Ex:
- Intervals Intersection (medium)
- Maximum CPU (hard)

*/

//CYCLIC SORT

/*

1. Problems involving arrays containing numbers in a given range
2. Iterates over the array one number at a time, and if the current number you are iterating is not at the correct index, you swap it with the number at its correct index
3. Problems involving a sorted array with numbers in a given range
4. Find the missing/duplicate/smallest number in a sorted/rotated arrray

Ex:
- Find the Missing Number (easy)
- Find the Smallest Missing Positive Number (medium)

*/

//REVERSAL OF A LINKED LIST

/*

1. Reverse a linked list in place without using extra memory
2. Use a current pointer pointing to the head and one variable, previous === null

Ex:
- Reverse a Sub-list (medium)
- Reverse every K-element Sub-list (medium)

*/

//TREE BFS

/*

1. This pattern is based on the breadth-first-search technique to traverse a tree and uses a queue to keep track of all the nodes of a level before jumping onto the next level
2. Works by pushing the root node to the queue and then continually iterating until the queue is empty
3. If you're asked to traverse a tree in a level-by-level fashion (or level order traversal)

Ex:
- Binary Tree Level Order (easy)
- ZigZag Traversal (medium)

*/

//TREE DFS

/*

1. Decde whether to process in-order, pre-order, or post-order
2. Make two recursive calls for both the children of the current node
3. If you're asked to traverse a tree with dfs traversal
4. If the problem requires searching for something where the node is closer to a leaf

Ex:
- Sum of Path Numbers (medium)
- All Paths for a Sum (medium)

*/

//TWO HEAPS

/*

1. Given a set of elements divided into two parts, find the smallest element in one part and the biggest element in the other part
2. Use a min heap to find the smallest element and a Max Heap to find the biggest element
3. Store the first half of numbers in a min heap and the second half in a max heap
4. Then median of the current list of numbers can be calculated from the top element of the two heaps
5. Useful in situations like priority queue, scheduling
6. Finding the smallest/largest/median elements of a set
7. Sometimes, useful in problems featuring a binary tree data strcuture

Ex:
- Find the Median of a Number Stream (medium)

*/

//SUBSETS

/*

1. Permutations and Combinations of a given set of elements
2. Finding all the subsets of a set

  ** Given a set [1,5,3]

  1. Start with empty set [[]]
  2. Add the first number (1) to all the existing subsets to create new subsets [[], [1]]
  3. Add the second number (5) to all the existing subsets: [[], [1], [5], [1,5]]
  4. Add the third number (3) to all the existing subsets: [[], [1], [5], [1,5], [3]. [1,3], [5,3], [1,5,3]]

  Ex:
- Subsets with Duplicates (easy)
- String Permutations by changing case (medium)

*/

//MODIFIED BINARY SEARCH

/*

1. Given a sorted array, linked list, or matrix, find a certain element

Ex:
- Order-agnostic Binary Search (easy)
- Search in a Sorted Infinite Array (medium)

*/

//TOP K ELEMENTS

/*

1. When you're asked to find the top/smallest/frequent K elements among a given set
2. 

Ex:
- Top K Numbers
- Top K Frequent numbers

*/

//K-WAY MERGE

/*

1. Given K sorted arrays, you can use a Heap to efficiently perform a sorted traversal of all the elements of all the arrays

Ex:
-

*/
