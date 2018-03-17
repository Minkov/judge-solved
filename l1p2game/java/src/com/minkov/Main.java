package com.minkov;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {

  public static void main(String[] args) throws IOException {
    BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

    int n = Integer.parseInt(reader.readLine());

    int x = n % 10;
    n /= 10;
    int y = n % 10;
    n /= 10;
    int z = n;

    int max = x + y + z;

    if (max < x * y + z) {
      max = x * y + z;
    }
    if (max < x * y * z) {
      max = x * y * z;
    }
    if (max < x + y * z) {
      max = x + y * z;
    }

    System.out.println(max);
  }
}
