package com.minkov;

import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        printTriangle(n);

        getPrimes(15)
            .forEach(System.out::println);
    }

    private static void printTriangle(int n) {
        for (int i = 1; i < n + 1; i++) {
            printLine(i);
        }

        for (int i = n - 1; i > 0; i--) {
            printLine(i);
        }
    }

    private static void printLine(int size) {
        for (int i = 1; i < size + 1; i++) {
            System.out.printf("%d ", i);
        }
        System.out.println();
    }

    static int sum(ArrayList<Integer> numbers) {
        int sum = 0;
        for (int number : numbers) {
            sum += number;
        }

        return sum;
    }
}
