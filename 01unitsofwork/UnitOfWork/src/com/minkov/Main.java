import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Main {

  public static void main(String[] args) {

    Scanner in = new Scanner(System.in);
    Map<Integer, Integer> counts = new HashMap<>();
    int n = in.nextInt();
    int max = 0;
    int best = -1;
    for (int i = 0; i < n; i++) {
      int x = in.nextInt();
      if (!counts.containsKey(x)) {
        counts.put(x, 0);
      }
      counts.put(x, counts.get(x) + 1);
      if (counts.get(x) > max) {
        best = x;
        max = counts.get(x);
      }
    }

    System.out.printf("%d (%d times)", best, max);
  }
}