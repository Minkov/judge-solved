import java.util.ArrayList;
import java.util.Scanner;
import java.util.stream.Collectors;

public class Main {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        String line = getPrimes(n)
            .stream()
            .map(Object::toString)
            .collect(Collectors.joining(" "));

        System.out.println(line);

    }

    static ArrayList<Integer> getPrimes(int max) {
        ArrayList<Boolean> isPrime = new ArrayList<>(max + 1);
        for (int i = 0; i < max + 1; i++) {
            isPrime.add(true);
        }

        for (int number = 2; number < isPrime.size(); number++) {
            if (isPrime.get(number)) {
                for (int notPrimeNumber = number * 2; notPrimeNumber < isPrime.size(); notPrimeNumber += number) {
                    isPrime.set(notPrimeNumber, false);
                }
            }
        }
        ArrayList<Integer> primeNumbers = new ArrayList<>();

        for (int i = 1; i < isPrime.size(); i++) {
            if (isPrime.get(i)) {
                primeNumbers.add(i);
            }
        }

        return primeNumbers;
    }
}
