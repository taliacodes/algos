//with a graph class, there are any number of nodes/edges within a graph

//adjacency matrix vs. adjacency list

//ADJACENCY MATRIX: two dimensional structure usually implemented as nested arrays

/*

We are storing edges and every time we add a new row or column, we have to describe the edges

- A B C D E F
A 0 1 0 0 0 1
B 1 0 1 0 0 0
C 0 1 0 1 0 0
D 0 0 1 0 1 0
E 0 0 0 1 0 1
F 1 0 0 0 1 0

*/

//ADJACENCY LIST:

/*
You can store them in a nested array if they are number-based:

[
//0 [1,5]
//1 [0,2]
//2 [1,3]
//3 [2,4]
//4 [3,5]
//5 [4,0]
]

Or as an object if you have nodes that aren't numeric:

{
  A: [B, F],
  B: [A, C],
  C: [B, D],
  D: [C, E],
  E: [D, F],
  F: [E, A]
}

*/


/*

Operation     | Adjacency List  | Adjacency Matrix
Add Vertex    |      O(1)       |     O(|V^2|) // this is a 2D structure -- adding a new vertex means adding new row+col
Add Edge      |      O(1)       |       O(1)
Remove Vertex | O(|V|) + O(|E|) |     O(|V^2|)
Remove Edge   |      O(|E|)     |       O(1)
Query         | O(|V|) + O(|E|) |       O(1)
Storage       | O(|V|) + O(|E|) |     O(|V^2|)

*/

//If you don't have a lot of connections/edges, don't use an adjacency matrix


/*

  Adjacency List            vs.    Adjacency Matrix

  Can take up less space     |     Takes up more space
  (in sparse graphs)         |     (in sparse graphs)
                             |
  Faster to iterate over     |     Slower to iterate
  all edges                  |     over all edges
                             |
  Can be slower to lookup    |     Faster to lookup
  specific edge              |     specific edge

*/

//Real world data tends to be sparse -- sparse means doesn't have many connections so it's better to use an adjacency list to display the data - an adjacency matrix has a lot of useless information (edge connections) that take up more space and is slower to tell us about those connections

