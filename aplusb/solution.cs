using System;
using System.Linq;

public class APlusBSolution
{
    public static void Main()
    {
        var n = int.Parse(Console.ReadLine());
        for(var i = 0; i < n; i++)
        {
            var arr = Console.ReadLine()
                .Split(' ')
                .Select(int.Parse)
                .ToArray();
            Console.WriteLine(arr[0] + arr[1]);
        }
    }
}
