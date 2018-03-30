fun main(args: Array<String>) {
    val (n, m) = readLine()!!.split(' ').map { it.toLong() }

    var sum = 1L
    var row = 1L
    var col = 1L

    var dRow = +1
    var dCol = +1

    while (row < n) {
        sum += 3 * (row + col) + 1

        if (col == m - 1 || col == 0L) {
            dCol *= -1
            dRow = +1
        } else {
            dRow *= -1
        }

        row += dRow
        col += dCol
    }

    println(sum)
}