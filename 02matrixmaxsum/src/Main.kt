import java.lang.Math.abs

fun readMatrix(): List<List<Int>> {
    val n = readLine()!!.toInt()
    return (1..n)
            .map {
                readLine()!!.split(' ')
                        .map { it.toInt() }
            }
}

fun readMoves(): List<List<Int>> {
    val movesSingle = readLine()!!.split(' ').map { it.toInt() - 1 }
    println(movesSingle)

    return (0 until movesSingle.size step 2)
            .map { it ->
                println(it)
                listOf(movesSingle[it], movesSingle[it + 1])
            }
}

fun main(args: Array<String>) {
    val matrix = readMatrix();
    val moves = readMoves()

    println(moves)

    for ((targetRow, targetCol) in moves) {
//        var targetRow = abs(move[0])
//        val targetCol = abs(move[1])

        val colDir = targetCol / abs(targetCol)
        val rowDir = -targetRow / abs(targetRow)

        var row = abs(targetRow)
        var col = 0

        if (targetRow < 0) {
            col = matrix.size
        }

        var sum = 0;

        while (col != targetCol) {
            sum += matrix[row][col]
            col += colDir
        }

        while (row != targetRow) {
            sum += matrix[row][col]
            row += rowDir
        }

        println(sum)

    }
}