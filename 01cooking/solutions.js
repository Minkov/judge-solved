const units = {
    ls: 1,
    mls: 1000,
    tsps: 200,
    cups: 200 / 48,
    "fl ozs": 200 / 6,
    pts: 100 / 48,
    qts: 50 / 48,
    gals: 25 / 96,
    tbsps: 200 / 3,
    liters: 1,
    milliliters: 1000,
    teaspoons: 200,
    "fluid ounces": 200 / 6,
    pints: 100 / 48,
    quarts: 50 / 48,
    gallons: 25 / 96,
    tablespoons: 200 / 3,
}

InitLists(recipe, used);

Dictionary < string, Product > unused = new Dictionary < string, Product > ();
AddProducts(recipe, used, unused);
foreach(var item in unused) {
    Console.WriteLine("{0:F2}:{1}:{2}", item.Value.amount, item.Value.unit, item.Key);
}

private static void AddProducts(Dictionary < string, Product > recipe, Dictionary < string, Product > used, Dictionary < string, Product > unused) {
    foreach(var item in recipe) {
        if (used.ContainsKey(item.Key.ToLower())) {
            double recipeAmountInLitres = ConvertToLitres(item.Value.amount, item.Value.unit);

            string name = item.Key.ToLower();
            double usedAmount = used[name].amount;
            //string usedUnit = used[name].unit;

            //double usedAmountInLitres = ConvertToLitres(usedAmount, usedUnit);

            if (usedAmount < recipeAmountInLitres) {
                double difference = recipeAmountInLitres - usedAmount;
                double add = ConvertTo(difference, item.Value.unit);

                unused.Add(item.Key, new Product(add, item.Value.unit));
            }
        } else {
            unused.Add(item.Key, item.Value);
        }
    }
}

private static double ConvertTo(double difference, string unit) {
    double coef = units[unit];
    double result = difference * coef;
    return result;
}

private static double ConvertToLitres(double amount, string unit) {
    double coef = units[unit];
    double result = amount / coef;
    return result;
}

private static void InitLists(Dictionary < string, Product > recipe, Dictionary < string, Product > used) {
    string inputFileName = "input.txt";

    //using (StreamReader reader = new StreamReader(inputFileName))
    {
        string recipeCountString = Console.ReadLine(); // Console
        int recipeCount = int.Parse(recipeCountString);

        for (int i = 0; i < recipeCount; i++) {
            string productLine = Console.ReadLine();
            string[] elements = productLine.Split(':');
            double amount = double.Parse(elements[0]);
            string unit = elements[1];
            string name = elements[2];

            bool added = false;
            foreach(var item in recipe) {
                if (item.Key.ToLower() == name.ToLower()) {
                    double amountToLitres = ConvertToLitres(amount, unit);

                    double realAmount = ConvertTo(amountToLitres, item.Value.unit);

                    item.Value.amount += realAmount;

                    added = true;
                    break;
                }
            }
            if (added == false) {
                Product pr = new Product(amount, unit);
                recipe.Add(name, pr);
            }
        }

        string usedCountString = Console.ReadLine();
        int usedCount = int.Parse(usedCountString);

        for (int i = 0; i < usedCount; i++) {
            string productLine = Console.ReadLine();
            string[] elements = productLine.Split(':');

            double amount = double.Parse(elements[0]);
            string unit = elements[1];

            double amountToLitres = ConvertToLitres(amount, unit);

            string name = elements[2].ToLower();

            if (used.ContainsKey(name)) {
                used[name].amount += amountToLitres;
            } else {
                Product pr = new Product(amountToLitres, "ls");
                used.Add(name, pr);
            }
        }
    }
}
}

class Product {
    public double amount;
    public string unit;

    public Product(double amount, string unit) {
        this.amount = amount;
        this.unit = unit;
    }
}
}