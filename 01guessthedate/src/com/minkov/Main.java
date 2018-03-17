package com.minkov;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);
    int year = in.nextInt();
    int month = in.nextInt();
    int day = in.nextInt();
    Calendar calendar = Calendar.getInstance();
    calendar.set(year, month - 1, day);
    calendar.add(Calendar.DAY_OF_YEAR, -1);

    System.out.println(new SimpleDateFormat("dd-MMM-yyyy").format(calendar.getTime()));
  }
}
