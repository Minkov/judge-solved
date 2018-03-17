class Graph {
    constructor() {
        this.nodes = [];
    }

    addEdge(x, y, w) {
        this.addDirectedEdge(x, y, w);
        this.addDirectedEdge(y, x, w);
    }

    addDirectedEdge(from, to, weight) {
        if (typeof this.nodes[from] === "undefined") {
            this.nodes[from] = [];
        }

        this.nodes[from].push({
            vertex: to,
            weight
        });
    }

    countTime(start, vertex) {
        const countTimeInternal = (v, level) => {
            if (start == v && level > 0 && level == n) {
                minSum = currentSum;
                return;
            }

            if (used[v] != 0) {
                return;
            }

            used[v] = 1;

            for (int k = 0; k < n; k++) {
                if (matrix[v, k] != 0 && k != v) {
                    currentSum += matrix[v, k];

                    if (currentSum < minSum) {
                        Hamiltonian(k, level + 1);
                    }

                    currentSum -= matrix[v, k];
                }
            }

            used[v] = 0;
        }

        return countTimeInternal(vertex, 0);
    }
}

const readGraph = () => {
    gets();
    const start = gets() - 1;
    const graph = new Graph();

    let line;
    while ((line = gets()) !== 'end') {
        const [x, y, w] = line.split(' ')
            .map(Number);

        graph.addEdge(x, y, w);
    }

    return {
        graph,
        start,
    };
}

const solve = () => {
    const {
        graph,
        start
    } = readGraph();

    const result = graph.countTime(start);
    return result;
}

print(solve());