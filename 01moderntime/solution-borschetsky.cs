using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModernTime
{
    class Program
    {
        static void Main(string[] args)
        {
            var male = new List<Person>();
            var female = new List<Person>();

            int n = int.Parse(Console.ReadLine());

            for (int i = 0; i < n; i++)
            {
                string name = Console.ReadLine();
                char gender = char.Parse(Console.ReadLine());
                int countInterests = int.Parse(Console.ReadLine());
                var interests = Console.ReadLine().Split(',').ToList();
                var person = new Person();
                person.Interests = interests;
                person.Name = name;
                person.Gender = gender;
                person.CountInterests = countInterests;
                if (gender == 'm')
                {
                    male.Add(person);
                }
                if (gender == 'f')
                {
                    female.Add(person);
                }
            }
            
            var bgResult = new SortedDictionary<string, string>();
            var bestCounter = 0;
            foreach (var m in male)
            {
                foreach (var f in female)
                {
                    var counter = 0;
                    foreach (var interstsM in m.Interests)
                    {
                        foreach (var interestF in f.Interests)
                        {
                            if (interestF == interstsM)
                            {
                                counter++;
                                
                            }

                        }
                    }
                    if (counter > bestCounter)
                    {
                        bestCounter = counter;
                    }
                    if (counter == bestCounter && counter != 0)
                    {
                        bgResult.Add(m.Name, $"{m.Name} and {f.Name} have {counter} common interests!");
                        //result.AppendLine($"{m.Name} and {f.Name} have {counter} common interests!");

                    }
                    
                }
            }

            Console.WriteLine(bgResult.Values.First());
        }
    }
    internal struct Person
    {
        public string Name { get; set; }
        public char Gender { get; set; }
        public int CountInterests { get; set; }
        public List<string> Interests { get; set; }

        public override string ToString()
        {

            return $"{this.Name} -- {this.Gender} -- {this.CountInterests} -- {string.Join(", ", this.Interests)}";
        }
    }
    //public class Couple
    //{
    //    private Person male;
    //    private Person female;
    //    private int common;
    //    private string result;

    //    public Couple(Person male, Person female)
    //    {
    //        this.Male = male;
    //        this.Female = female;
    //        this.Common = common;
    //        this.Result = result;
    //    }
    //    public int Common { get; set; }
    //    public string Result { get; set; }
    //    internal Person Female { get => female; set => female = value; }
    //    internal Person Male { get => male; set => male = value; }
    //}
}
