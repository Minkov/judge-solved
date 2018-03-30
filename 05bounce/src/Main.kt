fun main(args: Array<String>) {
    val (n, m) = readLine()!!.split(' ').map { it.toInt() }

    if (n == 1 || m == 1) {
        println(1)
        return
    }

    var row = 1
    var col = 1


    var sum = 1
    var dRow = 1
    var dCol = 1


    while (true) {
        sum += 1 shl (row + col)

        if ((row == 0 || row == n - 1) && (col == 0 || col == m - 1)) {
            break
        }

        if (row == n - 1 || row == 0) {
            dRow *= -1
        }

        if (col == m - 1 || col == 0) {
            dCol *= -1
        }

        row += dRow
        col += dCol
    }

    println(sum)
}