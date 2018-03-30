package com.minkov;

import java.util.Arrays;
import java.util.Scanner;

public class Main {
    static void fakeInput() {
//        String input = "1 2 3 4 5 6 7 8";

//        System.setIn(stream);
    }

    public static void main(String[] args) {
//        fakeInput();
        Scanner in = new Scanner(System.in);
        String[] numbers = in.nextLine()
            .split(" ");

        for (int i = numbers.length - 1; i > 0; i--) {
            System.out.print(numbers[i] + ", ");
        }

        System.out.println(numbers[0]);
    }
}
