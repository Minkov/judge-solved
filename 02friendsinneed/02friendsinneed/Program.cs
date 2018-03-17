using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using friendsinneed.Heap;

namespace friendsinneed
{
    namespace Heap
    {
        public class DelegateComparer<T> : IComparer<T>
        {
            private readonly Func<T, T, int> predicate;

            public DelegateComparer(Func<T, T, int> predicate)
            {
                this.predicate = predicate;
            }

            public int Compare(T x, T y)
            {
                return this.predicate(x, y);
            }
        }

        public class Heap<T> where T : IComparable<T>
        {
            private List<T> values;
            private IComparer<T> comparer;

            public Heap()
                : this(Comparer<T>.Default)
            {
            }

            public Heap(Func<T, T, int> predicate)
                : this(new DelegateComparer<T>(predicate))
            {
            }

            public Heap(IComparer<T> comparer)
            {
                this.comparer = comparer;
                this.values = new List<T>();
            }

            public Heap(IEnumerable<T> collection)
                : this()
            {
                this.values.ToList()
                           .ForEach(this.Push);
            }

            public int Count
            {
                get
                {
                    return this.values.Count;
                }
            }

            public void Push(T item)
            {
                this.values.Add(item);
                int index = this.Count - 1;

                while (index > 0)
                {
                    var parentIndex = (index - 1) / 2;
                    if (this.comparer.Compare(this.values[parentIndex], this.values[index]) <= 0)
                    {
                        break;
                    }
                    this.Swap(parentIndex, index);
                    index = parentIndex;
                }
            }

            public T Pop()
            {
                int currentIndex = 0;

                T value = this.values[currentIndex];
                this.values[currentIndex] = this.values[this.Count - 1];
                this.values.RemoveAt(this.Count - 1);

                while (currentIndex < this.Count)
                {
                    bool hasFoundSmaller = false;
                    int newIndex = currentIndex;

                    for (int i = 1; i <= 2; i++)
                    {
                        int nextIndex = (2 * currentIndex) + i;
                        if (nextIndex >= this.Count)
                        {
                            continue;
                        }
                        if (this.comparer.Compare(this.values[newIndex], this.values[nextIndex]) > 0)
                        {
                            newIndex = nextIndex;
                            hasFoundSmaller = true;
                        }
                    }
                    if (hasFoundSmaller)
                    {
                        this.Swap(currentIndex, newIndex);
                        currentIndex = newIndex;
                    }
                    else
                    {
                        break;
                    }
                }
                return value;
            }

            public T Peek()
            {
                if (this.values.Count == 0)
                {
                    throw new NullReferenceException("No items in the heap");
                }

                return this.values[1];
            }

            public void Print()
            {
                this.Print(0, "-");
            }

            private void Print(int index, string indent)
            {
                if (index >= this.Count)
                {
                    return;
                }
                Console.WriteLine("{0}{1}", indent, this.values[index]);
                this.Print(2 * index + 1, indent + "-");
                this.Print(2 * index + 2, indent + "-");
            }

            private void Swap(int i, int j)
            {
                T temp = this.values[j];
                this.values[j] = this.values[i];
                this.values[i] = temp;
            }
        }
    }

    class MainClass
    {
        struct Node : IComparable<Node>
        {

            public Node(int name, int distance)
                : this()
            {
                this.Name = name;
                this.Distance = distance;
            }

            public int Name { get; set; }
            public int Distance { get; set; }

            public int CompareTo(Node other)
            {
                return this.Distance.CompareTo(other.Distance);
            }
        }

        static void FakeInput()
        {
            var input = @"5 8 2
1 2
1 2 5
4 1 2
1 3 1
3 4 4
4 5 1
2 4 3
5 2 1
2 3 20
3 2 1
1
1 2 1
3 2 2";
            Console.SetIn(new StringReader(input));
        }

        public static void Main(string[] args)
        {
            //FakeInput();
            //Solve();
            Solve();
        }

        static void Solve()
        {
            var nmh = Console.ReadLine()
                             .Split(' ')
                             .Select(int.Parse)
                             .ToList();
            var n = nmh[0];
            var m = nmh[1];
            var h = nmh[2];
            var hospitals = new HashSet<int>(Console.ReadLine()
                                             .Split(' ')
                                             .Select(int.Parse)
                                             .Select(x => x - 1));
            var nodes = Enumerable.Range(0, n)
                                  .Select(_ => new List<Node>())
                                  .ToList();

            for (var i = 0; i < m; i++)
            {
                var edge = Console.ReadLine()
                                  .Split(' ')
                                  .Select(int.Parse)
                                  .ToList();
                var x = edge[0] - 1;
                var y = edge[1] - 1;
                var d = edge[2];
                nodes[x].Add(new Node(y, d));
                nodes[y].Add(new Node(x, d));
            }

            var best = 1 << 20;
            foreach (var hospital in hospitals)
            {
                var path_sum = 0;
                var distances = Dijkstra(nodes, hospital);

                for (var node = 0; node < distances.Count; node++)
                {
                    if (hospitals.Contains(node))
                    {
                        continue;
                    }

                    path_sum += distances[node];
                }

                best = Math.Min(best, path_sum);
            }

            Console.WriteLine(best);
        }

        private static List<int> Dijkstra(List<List<Node>> nodes, int hospital)
        {
            const int INFINITY = 1 << 20;
            var queue = new Heap<Node>();
            var distances = Enumerable.Repeat(INFINITY, nodes.Count)
                                      .ToList();

            var used = new HashSet<int>();

            distances[hospital] = 0;
            queue.Push(new Node(hospital, 0));

            while (queue.Count > 0)
            {
                var top = queue.Pop();
                if (used.Contains(top.Name))
                {
                    continue;
                }

                used.Add(top.Name);

                nodes[top.Name]
                    .ForEach((next) =>
                    {
                        if (distances[next.Name] > distances[top.Name] + next.Distance)
                        {
                            distances[next.Name] = distances[top.Name] + next.Distance;
                            queue.Push(new Node(next.Name, distances[next.Name]));
                        }
                    });
            }

            return distances;

        }
    }
}
