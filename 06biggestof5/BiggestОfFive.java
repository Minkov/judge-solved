import java.util.Scanner;

public class BiggestОfFive {
    public static void main(String[] args){
            Scanner in = new Scanner(System.in);

            float a = in.nextFloat();
            float b = in.nextFloat();
            float c = in.nextFloat();
            float d = in.nextFloat();
            float e = in.nextFloat();

            if (a >= b && a >= c && a >= d && a >= e){
                PrintNumber(a);
            } else if(b >= a && b >= c && b >= d && b >= e){
                PrintNumber(b);
            } else if (c >= a && c >= b && c >= d && c >= e){
                PrintNumber(a);
            } else if(d >= a && d >= b && d >= c && d >= e) {
                PrintNumber(c);
            } else {
                PrintNumber(d);
            }
    }

    private static void PrintNumber(float number){
        String result = Float.toString(number);

        for (int i = 0; i < result.length(); i++){
            if (result.charAt(i) == '.' && i <= result.length() - 2){
                boolean isZero = true;
                for(int j = i + 1; j < result.length(); j++){
                    if (result.charAt(j) != '0'){
                        isZero = false;
                        break;
                    }
                }
                if (isZero){
                    int finalResult = (int)number;
                    System.out.println(finalResult);
                    break;
                } else {
                    System.out.println(number);
                    break;
                }
            }
        }
    }
}
