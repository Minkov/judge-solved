using System;
using System.Collections.Generic;
using System.Linq;

namespace _CokiSkoki
{
	class CokiSkokiSolution
	{
		static int[] ReadBuildings()
		{
			Console.ReadLine();
			return Console.ReadLine()
						  .Split(' ')
						  .Select(int.Parse)
						  .ToArray();
		}

		public static void Main()
		{
			var buildings = ReadBuildings();
			var d = new int[buildings.Length];

			var s = new Stack<int>();

			for (var i = buildings.Length - 1; i >= 0; i--)
			{
				var current = buildings[i];

				while (s.Count > 0 && current >= buildings[s.Peek()])
				{
					s.Pop();
				}

				if (s.Count > 0)
				{
					d[i] = d[s.Peek()] + 1;
				}
				s.Push(i);
			}

			Console.WriteLine(d.Max());
			Console.WriteLine(string.Join(" ", d));
		}
	}
}