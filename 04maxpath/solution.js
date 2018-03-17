/* globals Symbol */

const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test =
    `10
(5 <- 11)
(1 <- 8)
(11 <- 3)
(8 <- 7)
(1 <- 5)
(11 <- 2)
(8 <- 6)
(2 <- 15)
(8 <- 4)`.split('\n');

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const quit = this.quit || (() => {});

class Graph {
    constructor() {
        this._nodes = new Map();
        this.leaves = new Set();
    }

    addEdge(x, y) {
        this.addDirectedEdge(x, y);
        this.addDirectedEdge(y, x);
        this.leaves.add(x);
        this.leaves.add(y);

        return this;
    }

    addDirectedEdge(from, to) {
        if (!this._nodes.has(from)) {
            this._nodes.set(from, []);
        }

        this._nodes.get(from).push(to);
        return this;
    }

    getMaxPath() {
        const dfs = (v, used, path) => {
            let max = path;
            this._nodes.get(v)
                .forEach((next) => {
                    if (used.has(next)) {
                        return;
                    }

                    used.add(next);

                    max = Math.max(
                        next,
                        max + next,
                        dfs(next, used, path + next)
                    );
                });
            return path;
        };

        let max = -1;

        this.leaves.forEach((leaf) => {
            const current = dfs(leaf, new Set(), leaf);
            max = Math.max(max, current);
        });

        return max;
    }
}

const readGraph = () => {
    const parseEdgeString = (edgeString) => {
        // (11 <- 2)
        const parts = edgeString.split('<-')
            .map((edgePart) => {
                if (edgePart.startsWith('(')) {
                    return +edgePart.substr(1).trim()
                } else {
                    return +edgePart.substr(0, edgePart.length - 1);
                }
            });

        return parts;
    };

    const graph = new Graph();

    const verticesCount = +gets();
    for (let i = 0; i < verticesCount - 1; i += 1) {
        const [x, y] = parseEdgeString(gets());
        graph.addEdge(x, y);
    }

    return graph;
};

const solve = () => {
    const graph = readGraph();
    const result = graph.getMaxPath();

    return result;
}
console.log(solve());