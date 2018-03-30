package com.minkov;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
  private static void findSequence(List<Integer> list) {
    var isChecked = new boolean[list.size()];
    var indexes = new ArrayList<>(list);

    int length = list.size();
    int index = 0;
    boolean hasCycle = false;
    int indexOfTheCycle = -1;
    do {
      if (!isInRange(length, index)) {
        break;
      }

      if (isChecked[index]) {
        hasCycle = true;
        indexOfTheCycle = index;
        break;
      }

      indexes.add(index);
      isChecked[index] = true;
      index = list.get(index);
    } while (true);


    if (hasCycle) {
      printSequenceWithCycle(indexes, indexOfTheCycle);

    } else {
      printSequence(indexes);
    }
  }

  private static void printSequenceWithCycle(List<Integer> seq, int startIndex) {
    var array = new ArrayList<>(seq);
    int index = 0;

    var str = new StringBuilder();

    for (int i = 0; i < array.size(); i++) {
      if (array.get(i) == startIndex) {
        index = i;
        break;
      }

      str.append(array.get(i))
        .append(" ");
    }

   String sequence = str.toString()
      .trim();

    str = new StringBuilder();

    str.append("(");

    for (int i = index; i < array.size(); i++) {
      str.append(array.get(i))
        .append(" ");
    }
    var cycle = str.toString()
      .trim();

    System.out.println(sequence + cycle + ")");
  }

  private static void printSequence(List<Integer> seq) {
    StringBuilder sequence = new StringBuilder();
    for (int index : seq) {
      sequence.append((char) index)
        .append(" ");
    }

    System.out.println(sequence.toString().trim());
  }


  private static boolean isInRange(int length, int index) {
    return index >= 0 && index < length;
  }

  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);
    int n = in.nextInt();
    List<Integer> list = new ArrayList<>();

    for (int i = 0; i < n; i++) {
      list.add(in.nextInt());
    }

    findSequence(list);
  }
}
