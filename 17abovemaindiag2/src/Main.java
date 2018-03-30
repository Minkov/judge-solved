import java.io.ByteArrayInputStream;
import java.util.Scanner;

public class Main {
  static void fakeInput() {
    String[] input = {
      "3",
      "1 2 3",
      "4 5 6",
      "7 8 9",
    };

    System.setIn(new ByteArrayInputStream(String.join("\n", input).getBytes()));
  }

  static void main(String[] args) {
    Scanner in = new Scanner(System.in);
    int n = in.nextInt();

    int sum = 0;
    for (int row = 0; row < n; row++) {
      for (int col = row + 1; col < n; col++) {
        sum += 1 << (row + col);
      }
    }

    System.out.println(sum);
  }
}
