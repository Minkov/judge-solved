fun main(args: Array<String>) {
    val n = readLine()!!.toInt()

    for (i in 0 until n) {
        val (x, y) = readLine()!!.split(' ')
                .map { it.toInt() }
        println(x + y)
    }
}