from py


 class Graph:
    def __init__(self):
        self.nodes = {}


    def add_edge(self, from_vertex, to_vertex):
        if from_vertex not in self.nodes:
            self.nodes[from_vertex] = []
        if to_vertex not in self.nodes:
            self.nodes[to_vertex] = OrderedSet()

        self.nodes[from_vertex].append(to_vertex)w



# class Graph {
#     constructor() {
#         this._nodes = new Map();
#     }

#     addEdge(from, to) {
#         if (!this._nodes.has(from)) {
#             this._nodes.set(from, []);
#         }

#         if (!this._nodes.has(to)) {
#             this._nodes.set(to, []);
#         }

#         this._nodes.get(from).push(to);
#     }

#     sortNodes() {
#         for (const [vertex, nodes] of this._nodes) {
#             nodes.sort();
#         }
#     }

#     *[Symbol.iterator]() {
#         const dependencies = this._loadDependencies();
#         for (const dep of dependencies) {
#             yield dep;
#         }
#     }

#     _getStartNodes(used) {
#         let startNodes = new Set(this._nodes.keys());
#         [...this._nodes].forEach(([vertex, ends]) => {
#             if (used.has(vertex)) {
#                 return;
#             }

#             ends.forEach((end) => startNodes.delete(end));
#         });

#         startNodes = [...startNodes].filter((node) => !used.has(node));

#         return startNodes;
#     }

#     _loadDependencies() {
#         const used = new Set();

#         const path = [];

#         while (true) {
#             const startNodes = this._getStartNodes(used);
#             if (startNodes.length === 0) {
#                 break;
#             }

#             const nextNode = min(...startNodes);
#             path.push(nextNode);
#             used.add(nextNode);
#         }

#         return path;
#     }
# }

# const readGraph = () => {
#     const graph = new Graph();
#     const edgesCount = +gets();
#     for (let i = 0; i < edgesCount; i += 1) {
#         const [x, y] = gets().split('needs').map((v) => v.trim());
#         graph.addEdge(x, y);
#     }

#     graph.sortNodes();

#     return graph;
# };

# const solve = () => {
#     const graph = readGraph();
#     return [...graph];
# };

# print(solve().join(" "));

# quit(0);
