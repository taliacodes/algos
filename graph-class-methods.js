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
}

let newGraph = new Graph();

newGraph.addVertex('A');

newGraph.addVertex('A');
newGraph.addVertex('B');
newGraph.addEdge('C', 'A');
newGraph.addEdge('D', 'B');
newGraph.addEdge('D', 'C');
newGraph.removeVertex('D')

console.log(newGraph);

let arr = ['A', 'C', 'D'];
let filteredArr = arr.filter(edge => {
  return edge !== 'A';
});
// console.log('this is the filtered array', filteredArr);
/*

vertex1 = "A" 
vertex2 = "B"

{
  A: ["B", "C"],
  B: ["A", "C", "D"],
}

{
  A: [ 'C' ],
  B: [ 'D' ],
  C: [ 'A', 'D' ],
  D: [ 'B', 'C' ]
}

*/
