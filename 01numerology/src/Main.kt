fun main(args: Array<String>) {
    val number = readLine()!!
    val counts = Array(10) { 0 }

    count(number, counts)
    println(counts.joinToString(" "))
}

fun transform(a: Int, b: Int): Int {
    return (a + b) * (a xor b) % 10
}

fun count(number: String, counts: Array<Int>) {
    if (number.length == 1) {
        val digit = number.toInt()
        counts[digit] += 1
    }

    for (i in 0 until number.length - 1) {
        val a = number[i]
        val b = number[i + 1]
        val result = transform(a - '0', b - '0')
        val newNumber = number.substring(0, i) + result + number.substring(i + 2)

        count(newNumber, counts)
    }
}
