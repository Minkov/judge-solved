#include<iostream>
#include<vector>
#include<set>
#include<map>

using namespace std;

class Graph {
    public:
        void addEdge(string from, string to);
        vector<string> getSorted();
    private:
        map<string, set< string > > nodes;

        set<string> getStartNodes(set<string> used) {
            set<string> startNodes;
            for(auto vertex = nodes.begin(); vertex != nodes.end(); ++vertex) {
                if (used.find(vertex->first) == used.end()) {
                    startNodes.insert(vertex->first);
                }
            }

            for(auto it = nodes.begin(); it != nodes.end(); ++it) {
                auto key = it->first;
                if(used.find(key) != used.end()) {
                    continue;
                }

                auto neighbors = it->second;

                for(auto next = neighbors.begin(); next != neighbors.end(); ++ next) {
                    startNodes.erase(*next);
                }
            }

            return startNodes;
        }
};

void Graph::addEdge(string from, string to) {
    if(nodes.find(from) == nodes.end()) {
        nodes[from] = set<string>();
    }
    if(nodes.find(to) == nodes.end()) {
        nodes[to] = set<string>();
    }
    nodes[from].insert(to);
}

vector<string> Graph::getSorted() {
    set<string> used;

    vector<string> path;

    while(true) {
        auto startNodes = getStartNodes(used);
        if(startNodes.empty()) {
            break;
        }

        auto vertex = startNodes.begin();

        path.push_back(*vertex);
        used.insert(*vertex);
    }

    return path;
}

Graph readGraph() {
    int m;

    cin >> m;

    Graph graph;

    for(auto i = 0; i < m; ++i) {
        string from, to;
        cin >> from >> to >> to;
        graph.addEdge(from, to);
    }
    return graph;
}

int main() {
    auto graph = readGraph();

    auto result = graph.getSorted();
    for(auto it = result.begin(); it != result.end(); ++ it) {
        cout << *it;
        if(it != result.end() - 1) {
            cout << " ";
        }
    }
    cout << '\n';

    return 0;
}
