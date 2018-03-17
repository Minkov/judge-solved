using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication4
{
    class Program
    {
        static List<int> list = new List<int>();

        static void Main(string[] args)
        {

            var digits = Console.ReadLine()
                                .Select(x => x - '0')
                                .ToList();

            var num = int.Parse(Console.ReadLine());

            var i = CountExp(digits, num, 1, digits[0], 1, 0, false);

            Console.WriteLine(i);
        }

        private static int CountExp(List<int> digits, int expectedResult, int index, int currentNumber, int currentProduct, int currentSum, bool negative)
        {
            if (index == digits.Length)
            {
                currentProduct *= currentNumber;
                currentSum += negative ? -currentProduct : currentProduct;

                if (currentSum == expectedResult)
                {
                    return 1;
                }

                return 0;
            }

            var result = 0;
            var nextSum = currentSum + currentProduct * currentNumber * (negative ? -1 : 1);
            result += CountExp(digits, expectedResult, index + 1, digits[index], 1, nextSum, false);
            result += CountExp(digits, expectedResult, index + 1, digits[index], 1, nextSum, true);

            var nextProduct = currentProduct * currentNumber;
            result += CountExp(digits, expectedResult, index + 1, digits[index], nextProduct, currentSum, negative);

            if (currentNumber != 0)
            {
                var nextNumber = currentNumber * 10 + digits[index];
                result += CountExp(digits, expectedResult, index + 1, nextNumber, currentProduct, currentSum, negative);
            }

            return result;
        }
    }
}
