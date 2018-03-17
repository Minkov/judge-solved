fun fakeInput() {
    val test = """14
2 1 2 4 3 5 2 6
10
1 1 1 1 1 1 1 1 1 11"""
    System.setIn(test.byteInputStream())
}

fun main(args: Array<String>) {
//    fakeInput()
//    println(if (solve()) "yes" else "no")
//    println("-".repeat(11))
    println(if (solve()) "yes" else "no")
}

fun solve(): Boolean {
    val target = readLine()!!.toInt()
    val values = readLine()!!.split(" ").map { it.toInt() }

    val sums = Array(target + 1) { false }
    sums[0] = true

    for (value in values) {
        sums.indices.reversed()
                .filter { sums[it] && it + value <= target }
                .forEach { sums[it + value] = true }
    }

    return sums[target]
}