using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace ModernTime
{
    class MainClass
    {
        class Graph
        {
            private readonly IDictionary<string, List<string>> vertices;

            public Graph()
            {
                this.vertices = new Dictionary<string, List<string>>();
                this.StartVertices = new List<string>();
            }

            public IList<string> StartVertices { get; private set; }

            public void AddEdge(string from, string to)
            {
                if (this.vertices.ContainsKey(from) == false)
                {
                    this.vertices[from] = new List<string>();
                }
                this.vertices[from].Add(to);
            }

            public void AddStartVertex(string vertex)
            {
                this.StartVertices.Add(vertex);
            }

            public IDictionary<string, int> FindPathsFrom(string vertex)
            {
                var paths = new Dictionary<string, int>();
                paths[vertex] = 0;
                Dfs(vertex, paths);
                return paths;
            }

            private void Dfs(string vertex, IDictionary<string, int> paths)
            {
                if (this.vertices.ContainsKey(vertex) == false)
                {
                    return;
                }

                this.vertices[vertex]
                    .ToList()
                    .ForEach(next =>
                    {
                        if (paths.ContainsKey(next) == false)
                        {
                            paths[next] = 0;
                        }
                        paths[next] += 1;
                        Dfs(next, paths);
                    });
            }
        }

        public static void Main(string[] args)
        {
            FakeInput();
            Graph graph = readGraph();

            var longestPaths = graph.StartVertices
                 .Select(boy =>
                 {
                     var paths = graph.FindPathsFrom(boy);
                     var max = 0;
                     var girl = "";

                     foreach (var path in paths)
                     {
                         if (max < path.Value)
                         {
                             girl = path.Key;
                             max = path.Value;
                         }
                     }

                     return new
                     {
                         Boy = boy,
                         Girl = girl,
                         PathLength = max
                     };
                 });

            var best = longestPaths.First();
            longestPaths.ToList()
                        .ForEach(connection =>
                        {
                            if (best.PathLength == connection.PathLength)
                            {
                                if (string.Compare(best.Boy, connection.Boy, StringComparison.Ordinal) > 0)
                                {
                                    best = connection;
                                }
                            }
                            else if (best.PathLength < connection.PathLength)
                            {
                                best = connection;
                            }
                        });

            Console.WriteLine($"{best.Boy} and {best.Girl} have {best.PathLength} common interests!");
        }

        private static Graph readGraph()
        {
            var graph = new Graph();
            Action<string, string> maleFunc = (boy, interest) => graph.AddEdge(boy, interest);
            Action<string, string> femaleFunc = (girl, interest) => graph.AddEdge(interest, girl);

            var n = int.Parse(Console.ReadLine());
            for (var i = 0; i < n; i++)
            {
                var name = Console.ReadLine();
                var isMale = Console.ReadLine() == "m";

                var addEdgeFunc = isMale
                    ? maleFunc
                    : femaleFunc;

                Console.ReadLine();
                Console.ReadLine().Split(',')
                       .ToList()
                       .ForEach(interest => addEdgeFunc(name, interest));

                if (isMale)
                {
                    graph.AddStartVertex(name);
                }
            }

            return graph;
        }

        private static void FakeInput()
        {
            string input = @"6
Bay Rik, the big Tele
m
2
chalga,cars
Anakin Skywalker
m
2
The Force, Galaxy Domination
Wonder Woman
f
3
heels,Ares,world peace
Batman
m
3
Beating bad guys,technology,world peace
Jane
f
4
heels,cars,chalga
Harmayani
f
3
books,learning,magic";
            Console.SetIn(new StringReader(input));
        }
    }
}
