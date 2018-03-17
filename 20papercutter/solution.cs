using System;
using System.Collections.Generic;

namespace PaperCutter.Task
{
    public class Solution
    {
        public static void Main()
        {
            var n = int.Parse(Console.ReadLine());

            var sizes = 10;
            var sheets = new List<int>();

            for (int power = 0; power <= sizes; power++)
            {
                var number = Math.Pow(2, sizes - power);
                var converted = Convert.ToInt32(number);
                sheets.Add(converted);
            }

            for (int size = 0; size <= sizes; size++)
            {
                if (n < sheets[size])
                {
                    Console.WriteLine(string.Format("A{0}", size));
                }
                else
                {
                    n = n - sheets[size];
                }
            }
        }
    }
}
