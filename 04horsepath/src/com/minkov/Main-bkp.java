package com.minkov;

import java.util.Arrays;
import java.util.Scanner;
import java.util.stream.Collectors;

public class Main {

  private static boolean isPassable(int row, int col, int[][] matrix) {
    return 0 <= row && row < matrix.length &&
      0 <= col && col < matrix[row].length &&
      matrix[row][col] == 0;
  }

  private static int walk(int row, int col, int count, int[][] matrix) {
    Integer[] dRows = {-2, -2, -1, -1, +1, +1, +2, +2};
    Integer[] dCols = {-1, +1, -2, +2, -2, +2, -1, +1};

    while (isPassable(row, col, matrix)) {
      matrix[row][col] = count;
      count += 1;

      for (int di = 0; di < dRows.length; di++) {
        int nextRow = row + dRows[di];
        int nextCol = col + dCols[di];

        if (isPassable(nextRow, nextCol, matrix)) {
          row = nextRow;
          col = nextCol;
          break;
        }
      }
    }

    return count;
  }

  public static void main(String[] args) {
//    solve();
    new Generator().generate(15);
  }

  public static void solve() {
    Scanner in = new Scanner(System.in);
    int n = in.nextInt();

    int[][] matrix = new int[n][n];

    int count = 1;

    for (int r = 0; r < n; r++) {
      for (int c = 0; c < n; c++) {
        count = walk(r, c, count, matrix);
      }
    }

    for (int[] row : matrix) {
      System.out.println(
        Arrays.stream(row)
          .mapToObj(x -> x + "")
          .collect(Collectors.joining(" "))
      );
    }
  }
}
