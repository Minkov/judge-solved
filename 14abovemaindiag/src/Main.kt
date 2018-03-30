fun main(args: Array<String>) {
    val n = readLine()!!.toInt()

    var sum = 0L
    for (row in 0 until n) {
        for (col in row + 1 until n) {
            sum += 1 shl (col + row)
        }
    }

    println(sum)
}
