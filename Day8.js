// Write an algorithm that computes the reversal of a directed graph.
// For example, if a graph consists of A -> B -> C, it should become A <- B <- C.

class graphReversal {
  constructor(size) {
    this.givenGraph = new Array(size).fill([]);
    this.reversedGraph = new Array(size).fill([]);
  }

  addEdge(u, v, isReversed = false) {
    if (isReversed) this.reversedGraph[u] = this.reversedGraph[u].concat(v);
    else this.givenGraph[u] = this.givenGraph[u].concat(v);
  }

  reverseGraph() {
    for (let i = 0; i < this.givenGraph.length; i++) {
      for (let j = 0; j < this.givenGraph[i].length; j++) {
        this.addEdge(this.givenGraph[i][j], i, true);
      }
    }
  }

  printGraph(reversed = false) {
    let graph;
    console.log(this.reversedGraph);
    if (reversed) graph = this.reversedGraph;
    else graph = this.givenGraph;
    for (let i = 0; i < this.givenGraph.length; i++) {
      console.log(i + "-->");
      for (let j = 0; j < graph[i].length; j++) {
        console.log(graph[i][j] + " ");
      }
    }
  }
}

const obj = new graphReversal(6);
obj.addEdge(0, 1);
obj.addEdge(1, 2);
obj.addEdge(2, 3);
obj.addEdge(3, 4);
obj.addEdge(4, 5);
obj.printGraph();
obj.reverseGraph();
obj.printGraph(true);
