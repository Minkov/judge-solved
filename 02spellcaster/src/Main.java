import java.util.Arrays;
import java.util.Comparator;
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);
    String message = in.nextLine();
//    String message = "Hi exam";
    String[] words = message.split(" ");

    StringBuilder extractedLetters = extractLetters(words);
    String movedLetters = MoveLetters(extractedLetters);

    System.out.println(movedLetters);
  }

  private static StringBuilder extractLetters(String[] words) {
    StringBuilder extractedLetters = new StringBuilder();
    int maxWordLength = Arrays.stream(words)
      .map(String::length)
      .max(Comparator.comparingInt(x -> x)).get();

    for (int characterIndex = 0; characterIndex < maxWordLength; characterIndex++) {
      for (int wordIndex = 0; wordIndex < words.length; wordIndex++) {
        if (characterIndex < words[wordIndex].length()) {
          int index = words[wordIndex].length() - 1 - characterIndex;
          extractedLetters.append(words[wordIndex].charAt(index));
        }
      }
    }

    return extractedLetters;
  }

  private static String MoveLetters(StringBuilder extractedLetters) {
    for (int characterIndex = 0; characterIndex < extractedLetters.length(); characterIndex++) {
      char character = extractedLetters.charAt(characterIndex);

      int index = Character.toLowerCase(character) - 'a' + 1;
      int mover = (index + characterIndex) % extractedLetters.length();
      extractedLetters.deleteCharAt(characterIndex);
      extractedLetters.insert(mover, character);
    }

    return extractedLetters.toString();
  }
}

