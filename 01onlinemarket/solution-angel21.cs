using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;

namespace _003.Online_Market
{
    class Program
    {
        //add (no remove) - search by name for already existing
        static HashSet<string> setWithProductNames = new HashSet<string>();
        static HashSet<string> setWithProductTypes = new HashSet<string>();

        //sorted by Type; top 10 by Type
        static SortedDictionary<string, SortedSet<Product>> sDWProductsByType = new SortedDictionary<string, SortedSet<Product>>();
        static SortedSet<Product> sortedProducts = new SortedSet<Product>();


        //top 10 by Price in a given price RANGE - MIN/MAX top 10 Price from a given price
        //static OrderedDictionary<double, SortedSet<Product>> oDByPrice = new OrderedDictionary<double, SortedSet<Product>>();

        static StringBuilder result = new StringBuilder();

        static void Main(string[] args)
        {
            List<List<string>> commands = ReadCommands();

            foreach (var command in commands)
            {
                switch (command[0])
                {
                    case "add":
                        AddProduct(command);
                        break;
                    case "filter":
                        if (command[2] == "type")
                            FilterByType(command);
                        else
                            FilterByPrice(command);
                        break;
                    default:
                        break;
                }
            }
            Console.Write(result);
        }

        private static void FilterByPrice(List<string> args)
        {
            double minPrice;
            double maxPrice;

            if (args.Count() == 7)
                //from to
            {
                minPrice = double.Parse(args[4]);
                maxPrice = double.Parse(args[6]);
                result.Append("OK: ");
                result.AppendLine(string.Join(", ", sortedProducts.Where(x => x.Price >= minPrice && x.Price <= maxPrice).Take(10)));
            }
            else
            {
                if (args[3] == "to") //to
                {
                    maxPrice = double.Parse(args[4]);
                    result.Append("OK: ");
                    result.AppendLine(string.Join(", ", sortedProducts.Where(x => x.Price <= maxPrice).Take(10)));
                }
                else //from
                {
                    minPrice = double.Parse(args[4]);
                    result.Append("OK: ");
                    result.AppendLine(string.Join(", ", sortedProducts.Where(x => x.Price >= minPrice).Take(10)));
                }
            }
        }

        private static void FilterByType(List<string> args)
        {
            string type = args[3];
            if (setWithProductTypes.Contains(type))
                result.AppendLine("OK: " + string.Join(", ", sDWProductsByType[type].Take(10)));
            else
                result.AppendLine($"Error: Type {type} does not exists");
        }

        private static void AddProduct(List<string> args)
        {
            Product product = new Product(args[1], double.Parse(args[2]), args[3]);

            if (setWithProductNames.Contains(args[1]))
            {
                result.AppendLine($"Error: Product {args[1]} already exists");
                return;
            }
            setWithProductNames.Add(args[1]);
            if (!setWithProductTypes.Contains(args[3]))
            {
                setWithProductTypes.Add(args[3]);
                sDWProductsByType.Add(args[3], new SortedSet<Product>());
            }
            sDWProductsByType[args[3]].Add(product);

            //if (!oDByPrice.ContainsKey(double.Parse(command[2])))
            //    oDByPrice.Add(double.Parse(command[2]), new SortedSet<Product>());
            //oDByPrice[double.Parse(command[2])].Add(product);

            sortedProducts.Add(product);

            result.AppendLine($"Ok: Product {product.Name} added successfully");
        }

        private static List<List<string>> ReadCommands()
        {
            List<List<string>> commands = new List<List<string>>();
            string console = Console.ReadLine();
            while (console != "end")
            {
                List<string> command = console.Split().ToList();
                commands.Add(command);
                console = Console.ReadLine();
            }
            return commands;
        }
    }

    public class Product : IComparable<Product>
    {
        public Product(string name, double price, string type)
        {
            this.Name = name;
            this.Price = price;
            this.Type = type;
        }

        public string Name { get; set; }
        public double Price { get; set; }
        public string Type { get; set; }

        public int CompareTo(Product other)
        {
            int result = this.Price.CompareTo(other.Price);
            if (result == 0)
            {
                result = this.Name.CompareTo(other.Name);
                if (result == 0)
                    result = this.Type.CompareTo(other.Type);
            }
            return result;
        }

        public override string ToString()
        {
            string output = string.Format("{0}({1})", this.Name, this.Price);
            return output;
        }
    }

}
