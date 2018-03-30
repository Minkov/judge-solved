package com.minkov;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Main {
    static int k;
    private static List<List<String>> gList = new ArrayList<>();

    public static void fakeInput() {
        System.setIn(new ByteArrayInputStream(("1122\n" +
            "A1B12C11D2").getBytes()));
    }

    public static void main(String[] args) throws IOException {
        fakeInput();
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        String message = in.readLine();     // "1122"
        String codeStr = in.readLine();     // "A1B12C11D2"

        String[] secretCode = codeStr.split("[^A-Z0-9]+|(?<=[A-Z])(?=[0-9])|(?<=[0-9])(?=[A-Z])");
        int n = secretCode.length / 2;
        String[] letters = new String[n];  // [A  B   C   D]
        String[] codes = new String[n];    // [1  12  11  2]
        for (int i = 0; i < 2 * n; i += 2) {
            letters[i / 2] = secretCode[i];
            codes[i / 2] = secretCode[i + 1];
        }

        System.out.println(Arrays.stream(letters)
            .collect(Collectors.joining(", ")));

        System.out.println(Arrays.stream(codes)
            .collect(Collectors.joining(", ")));

        k = 0;
        gList.add(new ArrayList<>());
        codesCheck(message, letters, codes);
        gList.remove(gList.size() - 1);

        System.out.println(gList.size());
        for (List<String> aGList : gList) {
            for (String anAGList : aGList) {
                System.out.print(anAGList);
            }

            System.out.println();
        }
    }


    private static void codesCheck(String message, String[] letters, String[] codes) {
        for (int i = 0; i < codes.length; i++) {
            if (message.startsWith(codes[i])) {
                gList.get(k).add(letters[i]);
                String newMessage = message.substring(codes[i].length());
                if (newMessage.equals("")) {
                    gList.add(new ArrayList<>());
                    k++;
                    return;
                }

                codesCheck(newMessage, letters, codes);
            }

        }
    }

}