package com.minkov;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        String[] numberStrings = in.nextLine()
            .split(" ");

        int[] numbers = new int[numberStrings.length];

        for (int i = 0; i < numberStrings.length; i++) {
            numbers[i] = Integer.parseInt(numberStrings[i]);
        }

        int[] counts = {0, 0, 0};

        for (int x : numbers) {
            int remainder = x % 3;
            ++counts[remainder];
        }

        int[][] groups = {
            new int[counts[0]],
            new int[counts[1]],
            new int[counts[2]]
        };

        int[] indices = {0, 0, 0};

        for (int x : numbers) {
            int remainder = x % 3;
            int index = indices[remainder];
            int[] group = groups[remainder];
            group[index] = x;
            ++indices[remainder];
        }

        for (int[] group : groups) {
            if (group.length == 0) {
                continue;
            }

            for (int j = 0; j < group.length - 1; j++) {
                System.out.print(group[j] + " ");
            }

            System.out.println(group[group.length - 1]);
        }
    }
}