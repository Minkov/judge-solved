
using System;
using System.Collections.Generic;
using System.Linq;

public class Solution
{
    public static void Main()
    {
        var s = int.Parse(Console.ReadLine());
        var numbers = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
        var sums = new bool[s + 1];
        sums[0] = true;
        foreach (var number in numbers) {
            for (var i = s; i >= 0; i--)
            {
                if (!sums[i])
                {
                    continue;
                }
                if(i + number > s) {
                    continue;
                }

                sums[i + number] = true;
            }
        }

        if (sums[s])
        {
            Console.WriteLine("yes");
        }
        else
        {
            Console.WriteLine("no");
        }
    }
}