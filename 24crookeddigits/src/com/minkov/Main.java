package com.minkov;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {

  public static void main(String[] args) throws IOException {
    BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
    String[] digits = reader.readLine().split("");
    int n = Arrays.stream(digits)
      .filter(x -> !x.equals(".") && !x.equals("-"))
      .map(Integer::parseInt)
      .reduce(0, (x, y) -> x + y);

    while (n > 9) {
      int x = 0;
      while (n > 0) {
        x += n % 10;
        n /= 10;
      }
      n = x;
    }

    System.out.println(n);

    double b = 3.4;
    if (b == (int) b) {
      System.out.println((int) b);
    } else {
      System.out.println(b);
    }

  }
}
