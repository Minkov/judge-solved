class Node:
    def __init__(self):
        self.parents = 0
        self.children = []

class Graph:
    def __init__(self, nodes_count):
        self.nodes = {}
        self.sources = set()

        for vertex in range(0, nodes_count):
            self.nodes[vertex] = Node()
            self.sources.add(vertex)

    def add_edge(self, f, t):
        self.nodes[f].children.append(t)
        if t in self.sources:
            self.sources.remove(t)
        self.nodes[t].parents += 1

    def get_ordered(self):
        path = []
        while len(self.sources) > 0:
            source = min(self.sources)
            self.sources.remove(source)
            path.append(source)
            for child in self.nodes[source].children:
                self.nodes[child].parents -= 1

                if self.nodes[child].parents == 0:
                    self.sources.add(child)

        return path


def read_graph():
    import sys
    nodes_count, edges_count = map(int, sys.stdin.readline().split(' '))
    graph = Graph(nodes_count)
    for _ in range(edges_count):
        x, y = map(int, sys.stdin.readline().split(' '))
        graph.add_edge(x, y)
    return graph

def solve():
    graph = read_graph()
    for node in graph.get_ordered():
        print(node)

solve()
