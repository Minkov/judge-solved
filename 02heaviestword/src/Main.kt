fun main(args: Array<String>) {
    val n = readLine()!!.toInt()
    var bestWeight = 0
    var bestWord = ""
    for (i in 0 until n) {
        val word = readLine()!!
        val weight = word.toLowerCase()
                .map { it - 'a' + 1 }
                .reduce { weight, ch -> weight + ch }

        if (weight > bestWeight) {
            bestWeight = weight
            bestWord = word
        }
    }

    println("$bestWeight $bestWord")
}