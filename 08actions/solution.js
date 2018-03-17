const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = `8 3
0 7
0 4
7 4`.split('\n');

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const quit = this.quit || (() => {});

class Graph {
    constructor(verticesCount) {
        this.nodes = [];
        this.sources = new Set();

        for (let i = 0; i < verticesCount; i += 1) {
            this.nodes.push({
                parents: 0,
                children: [],
            });

            // mark all vertices as potential sources
            this.sources.add(i);
        }
    }

    addEdge(from, to) {
        this.nodes[from].children.push(to);
        this.nodes[to].parents += 1;

        // to has an incoming edge, so it cannot be source...
        this.sources.delete(to);
    }

    getSorted() {
        // Save the result
        const path = [];

        while (this.sources.size > 0) {
            // Get the minimal source, by order 0, 1, 2, 3, 4, 5, 6, ....
            const source = Math.min(...this.sources);

            // Remove it from sources
            this.sources.delete(source);
            path.push(source);

            // Remove all edges outgoing of **source**
            for (const child of this.nodes[source].children) {
                // Update the prant
                this.nodes[child].parents -= 1;

                // **child** is a source (there are no incoming edges)
                if (this.nodes[child].parents === 0) {
                    this.sources.add(child);
                }
            }
        }

        return path;
    }
}

const readGraph = () => {
    const [verticesCount, edgesCount] = gets().split(' ')
        .map(Number);

    const graph = new Graph(verticesCount);
    for (let i = 0; i < edgesCount; i += 1) {
        const [from, to] = gets().split(' ').map(Number);
        graph.addEdge(from, to);
    }

    return graph;
};

const solve = () => {
    const graph = readGraph();
    return graph.getSorted();
};
print(solve().join('\n'));
quit(0);