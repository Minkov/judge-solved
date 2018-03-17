import java.lang.Math.pow

fun fact(n: Int): Double {
    var fact = 1.0

    for (j in 2..n) {
        fact *= j.toDouble()
    }

    return fact
}

fun main(args: Array<String>) {
    val n = readLine()!!.toDouble()
    val x = readLine()!!.toDouble()

    var sum = 1.0

    for (i in 1..n.toInt()) {
        sum += fact(i) / pow(x, i.toDouble())
    }

    println("%.5f".format(sum))
}