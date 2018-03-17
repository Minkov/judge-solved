using System;
using System.Collections.Generic;
using System.Linq;

namespace numerology
{
    class MainClass
    {
        public static void Main(string[] args)
        {
            var n = "18790314".Select(x => x - '0')
                              .ToList();

            var result = new int[10];
            Numerology(n, result);

            Console.WriteLine(string.Join(" ", result));
        }

        private static void Numerology(List<int> n, int[] result)
        {
            if (n.Count == 1)
            {
                result[n[0]] += 1;
                return;
            }

            for (int i = 0; i < n.Count - 1; i++)
            {
                int a = n[0];
                int b = n[1];
                var nextN = new List<int>();
                for (int j = 0; j < n.Count; j++)
                {
                    if (i == j)
                    {
                        nextN.Add((a + b) * (a ^ b) % 10);
                        continue;
                    }
                    else if (j == i + 1)
                    {
                        continue;
                    }
                    nextN.Add(n[j]);
                }
                Numerology(nextN, result);
            }
        }
    }
}
