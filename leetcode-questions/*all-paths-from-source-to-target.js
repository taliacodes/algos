// Given a directed, acyclic graph of N nodes.  Find all possible paths from node 0 to node N-1, and return them in any order.

// The graph is given as follows:  the nodes are 0, 1, ..., graph.length - 1.  graph[i] is a list of all nodes j for which the edge (i, j) exists.

const allPathsSourceTarget = graph => {
  let adjList = {};
  for (let i = 0; i < graph.length; i++) {
    adjList[i] = graph[i];
  }

  let current = [];
  let allPaths = [];

  function dfs(vertex) {
    // if (adjList[vertex] === []) allPaths.push(current)
    current.push(vertex);
    if (adjList[vertex] === []) return;
    console.log(current)
    adjList[vertex].forEach(neighbor => {
      dfs(neighbor);
    });
  }


  dfs('0');
  console.log(allPaths)
};

allPathsSourceTarget([['1', '2'], ['3'], ['3'], []]); // [[0,1,3],[0,2,3]]

// 0--->1
// |    |
// v    v
// 2--->3

// dfsRecursive(start) {
//   let visited = {};
//   let result = [];
//   let adjacencyList = this.adjacencyList;

//   (function dfs(vertex) {
//     if (!vertex) return null;
//     result.push(vertex);
//     visited[vertex] = true;
//     adjacencyList[vertex].forEach(neighbor => {
//       if (!visited[neighbor]) {
//         return dfs(neighbor);
//       }
//     });
//   })(start);

//   return result;
// }

// dfsIterative(start) {
//   let stack = [start];
//   let result = [];
//   let visited = {};
//   let currentVertex;
//   visited[start] = true;

//   while (stack.length) {
//     currentVertex = stack.pop();
//     result.push(currentVertex);

//     this.adjacencyList[currentVertex].forEach(neighbor => {
//       if (!visited[neighbor]) {
//         visited[neighbor] = true;
//         stack.push(neighbor);
//       }
//     });
//   }

//   return result;
// }

// Example:
// Input: [[1,2], [3], [3], []]
// Output: [[0,1,3],[0,2,3]]
// Explanation: The graph looks like this:
// 0--->1
// |    |
// v    v
// 2--->3
// There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.
// Note:

// The number of nodes in the graph will be in the range [2, 15].
// You can print different paths in any order, but you should keep the order of nodes inside one path.
