//GRAPH TRAVERSAL USES

//peer to peer networking
//web crawlers
//finding "closest" matches/recommendations
//shortest path problems
// --- GPS Navigation
// --- Solving mazes
// --- AI (shortest path to win the game)

//DEPTH FIRST GRAPH TRAVERSAL - visiting children of each node rather than siblings

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
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2)
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1)
  }
  removeVertex(vertex) {
    let adjList = this.adjacencyList
    for (let i = 0; i < adjList[vertex].length; i++) {
      let edge = adjList[vertex][i]
      adjList[edge] = adjList[edge].filter(v => v !== vertex)
    }
    delete adjList[vertex]
  }
  dfsRecursive(vertex) {
    let visited = {}
    let results = []
    //if vertex is empty, return null
    //add vertex to results list
    //mark vertex as visited
    //for each neighbor in vertex's neighbors: if neighbor is not visited, recursively call DFS on neighbor

    if (!vertex) {
      return null
    }
    results.push(vertex)
    visited[vertex] = true
    for (let i = 0; i < this.adjacencyList[vertex].length; i++) {
      let neighbor = this.adjacencyList[vertex][i]
      if (!(neighbor in visited)) {
        this.dfsRecursive(neighbor)
      }
    }

  }
}

let newGraph = new Graph();

newGraph.addVertex('A')
newGraph.addVertex('B')
newGraph.addVertex('C')
newGraph.addVertex('D')
newGraph.addVertex('E')
newGraph.addVertex('F')




console.log(newGraph);