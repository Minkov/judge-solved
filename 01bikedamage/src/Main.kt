fun fakeInput() {
    System.setIn("""4
3
2 3 1
5 4 6
9 0 3
8 5 2
4
4
1 8 9 6
1 4.3 2.7 -3
1 -64 3 3
1 1 1 1
""".byteInputStream())
}

fun readMatrix(): ArrayList<List<Int>> {
    val r = readLine()!!.toInt()
    val c = readLine()!!.toInt()
    val matrix = arrayListOf<List<Int>>()
    for (i in 0 until r) {
        val row = readLine()!!.split(" ").map { it.toInt() }
        matrix.add(row)
    }

    return matrix
}

fun main(args: Array<String>) {
    fakeInput()

    val matrix = readMatrix()

    var row = 0
    var col = 0

    val d = Array(matrix.size) { Array(matrix[0].size) { 1 << 30 } }


}