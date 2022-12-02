class Graph {
  constructor(){
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (vertex in this.adjacencyList) return false;
    this.adjacencyList[vertex] = [];
    return true;
  }
  addEdge(vertex1, vertex2){
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
    return this;
  }
  removeEdge(vertex1, vertex2){
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(edge => edge !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(edge => edge !== vertex1);
  }
  removeVertex(vertex){
    while (this.adjacencyList[vertex].length){
      const adjacencyVertex = this.adjacencyList.pop()
      this.removeEdge( vertex, adjacencyVertex);
    }
    delete this.adjacencyList[vertex]
  }
}