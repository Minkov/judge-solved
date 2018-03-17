using System;
using System.IO;
using System.Linq;

namespace _MinMaxSum
{
	class MinMaxSolution
	{
		static bool IsValidSplit(int[] numbers, int m, int sum)
		{
			var current = 0;
			var count = 1;
			foreach (var number in numbers)
			{
				current += number;
				if (current > sum)
				{
					current = number;

					++count;

					if (count > m)
					{
						return false;
					}
				}
			}

			return true;
		}

		static int FindBestMinMaxSum(int[] numbers, int m, int l, int r)
		{
			while (l < r)
			{
				var mid = (l + r) / 2;
				if (IsValidSplit(numbers, m, mid))
				{
					r = mid;
				}
				else
				{
					l = mid + 1;
				}
			}

			return r;
		}

		public static void Solve()
		{
			var testsCount = int.Parse(Console.ReadLine());

			for (int i = 0; i < testsCount; i++)
			{
				var nm = Console.ReadLine()
								.Split(' ')
								.Select(int.Parse)
								.ToArray();

				var m = nm[1];

				var numbers = Console.ReadLine()
									 .Split(' ')
									 .Select(int.Parse)
									 .ToArray();

				var maxNumber = int.MinValue;
				var maxSum = 0;

				foreach (var number in numbers)
				{
					maxNumber = Math.Max(maxNumber, number);
					maxSum += number;
				}

				var best = FindBestMinMaxSum(numbers, m, maxNumber, maxSum);
				Console.WriteLine(best);
			}
		}

		public static void Main()
		{
			//Console.SetIn(new StringReader(@"1
//5 2
//7 2 5 10 8"));

			Solve();
		}
	}
}
