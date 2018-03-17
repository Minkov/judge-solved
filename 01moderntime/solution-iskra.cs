using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Wintellect.PowerCollections;

namespace Orders
{
    public class Order:IComparable<Order>
    {

        public Order(string name, decimal price, string consumer)
        {
            this.Name = name;
            this.Price = price;
            this.Consumer = consumer;
        }

        public string Name { get; set; }
        public decimal Price { get; set; }
        public string Consumer { get; set; }

        public int CompareTo(Order other)
        {
            if (this.Price == other.Price)
            {
                return this.Name.CompareTo(other.Name);
            }
            return this.Price.CompareTo(other.Price);
        }

        public override string ToString()
        {
            return "{" + string.Format("{0};{1};{2}", this.Name, this.Consumer, string.Format("{0:0.00}", this.Price)) + "}";
        }
    }
    class Program
    {
        static StringBuilder result = new StringBuilder();
        static void Main(string[] args)
        {
            var orders = new OrderedBag<Order>();
            var ordersByCustomer = new Dictionary<string, OrderedBag<Order>>();

            int n = int.Parse(Console.ReadLine());
            for (int i = 0; i <n; i++)
            {
                var input = Console.ReadLine().Split(new char[] { ' ' }, 2).ToList();

                var command = input[0];

                switch (command)
                {
                    case "AddOrder":
                        //AddOrder name ;price;consumer
                        var parameters = input[1].Split(';');
                        var name = parameters[0];
                        var price = decimal.Parse(parameters[1]);
                        var consumer = parameters[2];
                        AddOrder(name, price, consumer, orders, ordersByCustomer);
                        break;

                    case "DeleteOrders":
                        //DeleteOrders consumer
                        var consumerToDeleteFrom = input[1];
                        DeleteOrdersFromConsumer(consumerToDeleteFrom, orders, ordersByCustomer);
                        break;

                    case "FindOrdersByPriceRange":
                        //FindOrdersByPriceRange fromPrice;toPrice
                        var parametersForFindindOrders = input[1].Split(';');
                        var fromPrice = decimal.Parse(parametersForFindindOrders[0]);
                        var toPrice = decimal.Parse(parametersForFindindOrders[1]);

                        FindOrdersByPriceRange(fromPrice, toPrice, orders);
                        break;

                    case "FindOrdersByConsumer":
                        var consumerToFindFrom = input[1];
                        FindOrdersByConsumer(consumerToFindFrom, ordersByCustomer);
                        break;
                }
            }

            Console.WriteLine(result.ToString());
        }

        private static void FindOrdersByConsumer(string consumerToFindFrom, Dictionary<string, OrderedBag<Order>> ordersByCustomer)
        {
            if(!ordersByCustomer.ContainsKey(consumerToFindFrom) || ordersByCustomer[consumerToFindFrom].Count == 0)
            {
                result.AppendLine("No orders found");
            }
            else
            {
                result.AppendLine(string.Join("\n", ordersByCustomer[consumerToFindFrom]));
            }
        }

        private static void FindOrdersByPriceRange(decimal fromPrice, decimal toPrice, OrderedBag<Order> orders)
        {
            var first = orders.FirstOrDefault(x =>
                    {
                    return x.Price >= fromPrice;
                    });
            var last = orders.LastOrDefault(x => x.Price <= toPrice);

            var list =orders.Range(first, true, last, true);

            if (list.Count == 0)
            {
                result.AppendLine("No orders found");
            }

            result.AppendLine(string.Join("\n", list));

        }

        private static void DeleteOrdersFromConsumer(string consumerToDeleteFrom, OrderedBag<Order> orders, Dictionary<string, OrderedBag<Order>> ordersByCustomer)
        {
            var count = ordersByCustomer[consumerToDeleteFrom].Count;
            if (count == 0)
            {
                result.AppendLine("No orders found");
            }
            else
            {
                var ordersToDelete = ordersByCustomer[consumerToDeleteFrom];
                ordersByCustomer[consumerToDeleteFrom].Clear();
                result.AppendLine(string.Format("{0} orders deleted", count));

                orders.RemoveMany(ordersToDelete);
            }
        }

        private static void AddOrder(string name, decimal price, string consumer, OrderedBag<Order> orders, Dictionary<string, OrderedBag<Order>> ordersByConsumer)
        {
            var order = new Order(name, price, consumer);
            orders.Add(order);

            if (!ordersByConsumer.ContainsKey(consumer))
            {
                ordersByConsumer[consumer] = new OrderedBag<Order>();
            }
            ordersByConsumer[consumer].Add(order);

            result.AppendLine("Order added");

        }
    }
}
