using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace Resources
{
    class MainClass
    {
        public static void Main(string[] args)
        {
            //FakeInput();
            var m = int.Parse(Console.ReadLine());
            var graph = new Dictionary<string, HashSet<string>>();
            for (var i = 0; i < m; i++)
            {
                var edge = Console.ReadLine().Split(' ');
                AddEdge(graph, edge[0], edge[2]);
            }

            var sortedGraph = Sort(graph);
            Console.WriteLine(String.Join(" ", sortedGraph));

        }

        private static List<string> Sort(IDictionary<string, HashSet<string>> graph)
        {
            var used = new HashSet<string>();
            var path = new List<string>();
            while (true)
            {
                var starts = GetStarts(graph, used);
                if (starts.Count == 0)
                {
                    break;
                }

                var start = starts.First();
                path.Add(start);
                used.Add(start);
            }

            return path;
        }

        private static ISet<string> GetStarts(IDictionary<string, HashSet<string>> graph, HashSet<string> used)
        {
            var starts = new SortedSet<string>(
                graph.Keys
                .Where(v => used.Contains(v) == false)
            );

            foreach (var vertex in graph)
            {
                if (used.Contains(vertex.Key))
                {
                    continue;
                }

                foreach (var next in vertex.Value)
                {
                    starts.Remove(next);
                }
            }

            return starts;
        }

        private static void AddEdge(Dictionary<string, HashSet<string>> graph, string v1, string v2)
        {
            if (graph.ContainsKey(v1) == false)
            {
                graph[v1] = new HashSet<string>();
            }

            if (graph.ContainsKey(v2) == false)
            {
                graph[v2] = new HashSet<string>();
            }

            graph[v1].Add(v2);
        }

        public static void FakeInput()
        {
            string input = @"8
index.html needs main.css
main.css needs sub1.css
index.html needs main.js
main.css needs sub2.css
index.html needs logo.png
main.js needs player.png
main.js needs partial.html
partial.html needs partial.js";

            Console.SetIn(new StringReader(input));


        }
    }
}

