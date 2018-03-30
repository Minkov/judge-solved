namespace GirlsGoneWild
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;

    public class Program
    {
        private static int numbers;
        private static List<List<int>> numberCombinations = new List<List<int>>();
        private static HashSet<string> lettersCombinations = new HashSet<string>();
        private static bool[] used;
        private static List<char> letters;

        public static void Main()
        {
            numbers = int.Parse(Console.ReadLine());
            letters = Console.ReadLine().ToCharArray()
                .OrderBy(l => l)
                .ToList();
            used = new bool[letters.Count()];

            var girlsCount = int.Parse(Console.ReadLine());

            CombNumbers(0, 0, girlsCount, new int[girlsCount]);
            CombLetters(0, 0, girlsCount, new StringBuilder());

            var result = new SortedSet<string>();

            foreach (var numCombination in numberCombinations)
            {


                foreach (var lets in lettersCombinations)
                {
                    var current = new StringBuilder();
                    for (int i = 0; i < numCombination.Count(); i++)
                    {
                        current.Append(numCombination[i]);
                        current.Append(lets[i]);
                        current.Append("-");
                    }

                    current.Length--;
                    result.Add(current.ToString());
                }

            }

            Console.WriteLine(result.Count);

            foreach (var item in result)
            {
                Console.WriteLine(item);
            }
        }

        static void CombNumbers(int index, int start, int girlCount, int[] arr)
        {
            if (index >= girlCount)
            {
                numberCombinations.Add(new List<int>(arr));
            }
            else
            {
                for (int i = start; i < numbers; i++)
                {
                    arr[index] = i;
                    CombNumbers(index + 1, i + 1, girlCount, arr);
                }
            }
        }

        static void CombLetters(int index, int start, int girlCount, StringBuilder combination)
        {
            if (index >= girlCount)
            {
                lettersCombinations.Add(combination.ToString());
            }
            else
            {
                for (int i = 0; i < letters.Count(); i++)
                {

                    if (!used[i])
                    {
                        used[i] = true;
                        combination.Append(letters[i]);
                        CombLetters(index + 1, i + 1, girlCount, combination);
                        combination.Length--;
                        used[i] = false;
                    }
                }
            }
        }
    }
}

