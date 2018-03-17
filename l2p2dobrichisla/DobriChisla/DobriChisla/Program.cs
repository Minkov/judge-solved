using System;
using System.Linq;

namespace DobriChisla
{
    class MainClass
    {
        public static void Main(string[] args)
        {
            var range = Console.ReadLine()
                               .Split(' ')
                               .Select(int.Parse)
                               .ToList();

            var count = 0;

            for (int n = range[0]; n <= range[1]; n++)
            {
                count +=
                    isDobroChislo(n)
                    ? 1
                    : 0;
            }

            Console.WriteLine(count);
        }

        private static bool isDobroChislo(int n)
        {
            var number = n;

            while (number > 0)
            {
                var digit = number % 10;
                if (digit != 0 && n % digit != 0)
                {
                    return false;
                }

                number /= 10;
            }

            return true;
        }
    }
}
