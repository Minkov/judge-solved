fun fakeInput() {
    val test = """8
7
3
2
3
5
2
2
4"""
    System.setIn(test.byteInputStream())
}

fun main(args: Array<String>) {
    fakeInput()

    val n = readLine()!!.toInt()

    var bestLength = 0

    var number = readLine()!!.toInt()
    var currentLength = 1

    for (i in 0 until n - 1) {
        val current = readLine()!!.toInt()
        if (number < current) {
            currentLength++
            bestLength = maxOf(bestLength, currentLength)
        } else {
            currentLength = 1
            bestLength = maxOf(bestLength, currentLength)
        }

        number = current
    }

    println(bestLength)
}