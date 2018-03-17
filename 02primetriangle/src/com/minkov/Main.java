package com.minkov;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

public class Main {

  public static void main(String[] args) throws IOException {
//    Scanner in = new Scanner(System.in);
    BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));


    int n = Integer.parseInt(reader.readLine());
    List<String> digits = new ArrayList<>();

    List<Integer> primes = getAllPrimes(n);
  }

  private static List<Integer> getAllPrimes(int n) {
    // initially assume all integers are prime
    boolean[] isPrime = new boolean[n + 1];
    for (int i = 2; i <= n; i++) {
      isPrime[i] = true;
    }

    // mark non-primes <= n using Sieve of Eratosthenes
    for (int factor = 2; factor * factor <= n; factor++) {

      // if factor is prime, then mark multiples of factor as nonprime
      // suffices to consider mutiples factor, factor+1, ...,  n/factor
      if (isPrime[factor]) {
        for (int j = factor; factor * j <= n; j++) {
          isPrime[factor * j] = false;
        }
      }

      List<Integer> primes = new ArrayList<>();

      for (int i = 2; i < n + 1; i++) {
        if (isPrime[i]) {
          primes.add(i);
        }
      }

      return primes;
    }

    // count primes
    int primes = 0;
    for (int i = 2; i <= n; i++) {
      if (isPrime[i]) primes++;
    }
    System.out.println("The number of primes <= " + n + " is " + primes);
  }

  private static boolean isPrime(int index) {
    for (int j = 2; j <= Math.sqrt(index); j++) {
      if (index % j == 0) {
        return false;
      }
    }

    return true;
  }

  static String getLine(List<String> digits) {
    StringBuilder builder = new StringBuilder();
    for (int i = 0; i < digits.size(); i++) {
//    digits.forEach(builder::append);
      builder.append(digits.get(i));
    }
    return builder.toString();
  }
}
