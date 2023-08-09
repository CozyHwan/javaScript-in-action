class Graph {
    constructor() {
        this.adjacencyList= {};
    }
    addVertex(vertex) {
        if (this)
        this.adjacencyList[vertex] = [];
    }
}