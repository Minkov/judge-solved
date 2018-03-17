const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = `5
3 4 3
0 3 4
0 2 6
1 4 9`.split('\n');

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const quit = this.quit || (() => {});

class Graph {
    constructor() {
        this.nodes = [];
    }

    addEdge(x, y, weight) {
        this.addDirectedEdge(x, y, weight);
        this.addDirectedEdge(y, x, weight);
    }

    addDirectedEdge(from, to, weight) {
        if (typeof this.nodes[from] === 'undefined') {
            this.nodes[from] = [];
        }

        this.nodes[from].push({
            vertex: to,
            weight,
        });
    }

    getLongestPath() {
        const dfs = (v, used, sum) => {
            let bestSum = sum;

            this.nodes[v]
                .forEach((next) => {
                    if (used.has(next.vertex)) {
                        return;
                    }

                    used.add(next.vertex);
                    const currentSum = dfs(next.vertex, used, sum + next.weight);
                    bestSum = Math.max(bestSum, currentSum);
                    used.delete(next.vertex);
                });

            return bestSum;
        };

        let bestSum = 0;
        for (const start of this.nodes.keys()) {
            if (this.nodes[start].length > 1) {
                continue;
            }

            bestSum = Math.max(
                bestSum,
                dfs(start, new Set([start]), 0)
            );
        };

        return bestSum;
    }
}

const readGraph = () => {
    const edgesCount = gets() - 1;
    const graph = new Graph();

    for (let i = 0; i < edgesCount; i += 1) {
        const [x, y, w] = gets()
            .split(' ')
            .map(Number);
        graph.addEdge(x, y, w);
    }

    return graph;
};

const solve = () => {
    const graph = readGraph();
    return graph.getLongestPath();
}

print(solve());