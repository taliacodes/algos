class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    let adjList = this.adjacencyList;
    if (!(vertex in adjList)) {
      adjList[vertex] = [];
    }
  }
  addEdge(vertex1, vertex2) {
    //check if the vertex exists, push the edge into the vertex
    let adjList = this.adjacencyList;
    if (vertex1 in adjList) {
      adjList[vertex1].push(vertex2);
    } else {
      adjList[vertex1] = [vertex2];
    }
    if (vertex2 in adjList) {
      adjList[vertex2].push(vertex1);
    } else {
      adjList[vertex2] = [vertex1];
    }
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      v => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      v => v !== vertex1
    );
  }
  removeVertex(vertex) {
    let adjList = this.adjacencyList;
    for (let i = 0; i < adjList[vertex].length; i++) {
      let edge = adjList[vertex][i];
      adjList[edge] = adjList[edge].filter(v => v !== vertex);
    }
    delete adjList[vertex];
  }
  dfsRecursive(start) {
    //if vertex is empty, return null
    //add vertex to results list
    //mark vertex as visited
    //for each neighbor in vertex's neighbors: if neighbor is not visited, recursively call DFS on neighbor

    let visited = {};
    let result = [];
    let adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      result.push(vertex);
      visited[vertex] = true;
      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);

    return result;
  }
  dfsIterative(start) {
    let stack = []
    let result = []
    let visited = {}
    let currentVertex;
    stack.push(start)
    visited[start] = true

    while (stack.length) {
      console.log(stack)
      currentVertex = stack.pop()
      result.push(currentVertex)

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true
          stack.push(neighbor)
        }
      })
    }
    return result
  }
}

let newGraph = new Graph();

newGraph.addVertex('A');
newGraph.addVertex('B');
newGraph.addVertex('C');
newGraph.addVertex('D');
newGraph.addVertex('E');
newGraph.addVertex('F');
newGraph.addEdge('A', 'B');
newGraph.addEdge('B', 'D');
newGraph.addEdge('A', 'C');
newGraph.addEdge('C', 'E');
newGraph.addEdge('D', 'E');
newGraph.addEdge('D', 'F');
newGraph.addEdge('F', 'E');

newGraph.dfsIterative('A');

// console.log(newGraph);


// this.adjacencyList = {
//   A: [ 'B', 'C' ],
//   B: [ 'A', 'D' ],
//   C: [ 'A', 'E' ],
//   D: [ 'B', 'E', 'F' ],
//   E: [ 'C', 'D', 'F' ],
//   F: [ 'D', 'E' ]
// }
