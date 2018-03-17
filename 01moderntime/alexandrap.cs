using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Wintellect.PowerCollections;


namespace OrderSystem
{
    class OrderSystem
    {
        static Dictionary<string, SortedSet<Order>> byConsumer = new Dictionary<string, SortedSet<Order>>();
        static OrderedDictionary<decimal, SortedSet<Order>> byPrice = new OrderedDictionary<decimal, SortedSet<Order>>();
        static StringBuilder output = new StringBuilder();

        const string AddOrderCmd = "AddOrder";
        const string FindOrdersByConsumerCmd = "FindOrdersByConsumer";
        const string FindOrdersByPriceRangeCmd = "FindOrdersByPriceRange";
        const string DeleteOrdersCmd = "DeleteOrders";

        static void Main(string[] args)
        {
            int numberOfLines = int.Parse(Console.ReadLine());

            string input;

            for (int i = 0; i < numberOfLines; i++)
            {
                input = Console.ReadLine();

                if (input.StartsWith("AddOrder"))
                {
                    string parameters = input.Substring(AddOrderCmd.Length + 1);

                    List<string> parametersList = parameters
                        .Split(new[] { ';' }, StringSplitOptions
                        .RemoveEmptyEntries).ToList();

                    AddOrder(parametersList);
                }
                else if (input.StartsWith("FindOrdersByConsumer"))
                {
                    string parameters = input.Substring(FindOrdersByConsumerCmd.Length + 1);

                    List<string> parametersList = parameters
                        .Split(new[] { ';' }, StringSplitOptions
                        .RemoveEmptyEntries).ToList();

                    FindOrdersByConsumer(parametersList);
                }
                else if (input.StartsWith("FindOrdersByPriceRange"))
                {
                    string parameters = input.Substring(FindOrdersByPriceRangeCmd.Length + 1);

                    List<string> parametersList = parameters
                        .Split(new[] { ';' }, StringSplitOptions
                        .RemoveEmptyEntries).ToList();

                    FindOrdersByPriceRange(parametersList);
                }
                else if (input.StartsWith("DeleteOrders"))
                {
                    string parameters = input.Substring(DeleteOrdersCmd.Length + 1);

                    List<string> parametersList = parameters
                        .Split(new[] { ';' }, StringSplitOptions
                        .RemoveEmptyEntries).ToList();

                    DeleteOrders(parametersList);
                }
            }

            output.Length--;

            Console.WriteLine(output.ToString());
        }

        static void AddOrder(List<string> parameters)
        {
            string nameOfProduct = parameters[0];
            decimal priceOfProduct = decimal.Parse(parameters[1]);
            string nameOfConsumer = string.Join(" ", parameters.Skip(2));

            Order product = new Order(nameOfProduct, nameOfConsumer, priceOfProduct);

            if (byConsumer.ContainsKey(nameOfConsumer))
            {
                byConsumer[nameOfConsumer].Add(product);
            }
            else
            {
                byConsumer.Add(nameOfConsumer, new SortedSet<Order>());
                byConsumer[nameOfConsumer].Add(product);
            }

            if (byPrice.ContainsKey(priceOfProduct))
            {
                byPrice[priceOfProduct].Add(product);
            }
            else
            {
                byPrice.Add(priceOfProduct, new SortedSet<Order>());
                byPrice[priceOfProduct].Add(product);
            }

            output.AppendLine("Order added");
        }

        static void FindOrdersByConsumer(List<string> parameters)
        {
            string consumer = string.Join(" ", parameters);

            if (byConsumer.ContainsKey(consumer))
            {
                foreach (var order in byConsumer[consumer])
                {
                    output.AppendLine("{" + order.ToString() + "}");
                }
            }
            else
            {
                output.AppendLine("No orders found");
            }
        }

        static void FindOrdersByPriceRange(List<string> parameters)
        {
            decimal fromPrice = decimal.Parse(parameters[0]);
            decimal toPrice = decimal.Parse(parameters[1]);

            var result = byPrice.Range(fromPrice, true, toPrice, true);
            SortedSet<Order> orders = new SortedSet<Order>();

            foreach (var item in result)
            {
                foreach (var order in item.Value)
                {
                    orders.Add(order);
                }
            }

            foreach (var item in orders)
            {
                output.AppendLine("{" + item.ToString() + "}");
            }
        }

        static void DeleteOrders(List<string> parameters)
        {
            string consumer = string.Join(" ", parameters);

            if (byConsumer.ContainsKey(consumer))
            {
                string format = string.Format("{0} orders deleted", byConsumer[consumer].Count);

                byConsumer.Remove(consumer);

                output.AppendLine(format);
            }
            else
            {
                output.AppendLine("No orders found");
            }
        }
    }

    class Order : IComparable<Order>
    {
        private string nameOfProduct;
        private decimal price;
        private string nameOfConsumer;

        public Order(string nameOfProduct, string nameOfConsumer, decimal price)
        {
            this.NameOfPRoduct = nameOfProduct;
            this.NameOfConsumer = nameOfConsumer;
            this.Price = price;
        }

        public string NameOfPRoduct
        {
            get { return this.nameOfProduct; }
            set { this.nameOfProduct = value; }
        }

        public decimal Price
        {
            get { return this.price; }
            set { this.price = value; }
        }

        public string NameOfConsumer
        {
            get { return this.nameOfConsumer; }
            set { this.nameOfConsumer = value; }
        }

        public int CompareTo(Order other)
        {
            int result = this.NameOfPRoduct.CompareTo(other.NameOfPRoduct);
            return result;
        }

        public override string ToString()
        {
            return string.Format("{0};{1};{2:0.00}", this.NameOfPRoduct, this.NameOfConsumer, this.Price);
        }
    }
}
