package com.minkov;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class Main {

  private static Integer readInt(BufferedReader reader) {
    try {
      return Integer.parseInt(reader.readLine());
    } catch (IOException e) {
      return 0;
    }
  }

  public static void main(String[] args) throws IOException {
    BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
    int n = Integer.parseInt(reader.readLine());

    List<Integer> speeds = IntStream.generate(() -> readInt(reader))
      .limit(n)
      .mapToObj(x -> Integer.parseInt(String.valueOf(x)))
      .collect(Collectors.toList());

    int bestGroup = 0;
    int current = speeds.get(0);

    if (speeds.get(speeds.size() - 2) < speeds.get(speeds.size() - 1)) {
      bestGroup = Math.max(bestGroup, current + speeds.get(speeds.size() - 1));
    }

    System.out.println(bestGroup);
  }
}
