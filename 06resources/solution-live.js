/* globals Map, Set */

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
    `8
index.html needs main.css
main.css needs sub2.css
main.css needs sub1.css
index.html needs main.js
index.html needs logo.png
main.js needs player.png
main.js needs partial.html
partial.html needs partial.js`.split('\n');

/* eslint-disable */
const gets = this.gets || getGets(test);
const print = this.print || console.log;
const quit = this.quit || (() => {});
/* eslint-enable */

class Graph {
    constructor() {
        this._nodes = new Map();
        this._counts = new Map();
        this._allVertices = new Set();
    }

    addEdge(from, to) {
        /**
         * Maybe this is the first edge out of **from**
         **/
        if (!this._nodes.has(from)) {
            this._nodes.set(from, []);
        }

        /**
         * If counts.get(v) is 0, the vertex has no incoming edges
         **/
        if (!this._counts.has(to)) {
            this._counts.set(to, 0);
        }

        /**
         * If counts.get(v) is 0, the vertex has no incoming edges
         **/
        if (!this._counts.has(from)) {
            this._counts.set(from, 0);
        }

        /**
         * **to** has an incoming edge
         **/
        this._counts.set(to,
            this._counts.get(to) + 1
        );

        this._nodes.get(from)
            .push(to);

        this._allVertices.add(from);
        this._allVertices.add(to);
    }

    getSortedGraph() {
        const path = [];
        const used = new Set();

        while (true) {
            /**
             * select the next best vertex
             *  - with no incoming edges
             *  - smallest lexicographical order
             **/
            const best = this._getBest(used);

            if (best === null) {
                break;
            }

            path.push(best);

            /**
             * break all edges, out of **best**
             **/
            this._remove(best, used);
        }

        return path;
    }

    _getBest(used) {
        const vertices = [];

        for (const [vertex, count] of this._counts) {
            if (count > 0 || used.has(vertex)) {
                continue;
            }

            vertices.push(vertex);
        }

        return vertices.sort()[0] || null;
    }

    _getBest2(used) {
        const vertices = new Set([...this._allVertices]);
        for (const usedVertex of [...used]) {
            vertices.delete(usedVertex);
        }

        for (const vertex of this._allVertices) {
            if (!this._nodes.has(vertex)) {
                continue;
            }

            if (used.has(vertex)) {
                continue;
            }

            for (const next of this._nodes.get(vertex)) {
                vertices.delete(next);
            }
        }

        return [...vertices].sort()[0] || null;
    }

    _remove(vertex, used) {
        used.add(vertex);

        if (!this._nodes.has(vertex)) {
            return;
        }

        this._nodes.get(vertex)
            .forEach((next) => {
                this._counts.set(next,
                    this._counts.get(next) - 1
                );
            });
    }
}


const readGraph = () => {
    const graph = new Graph();
    const edgesCount = +gets();
    for (let i = 0; i < edgesCount; i += 1) {
        const [x, y] = gets().split('needs').map((v) => v.trim());
        graph.addEdge(x, y);
    }

    return graph;
};

const graph = readGraph();

console.log(graph.getSortedGraph());