fun fakeInput() {
    System.setIn("""111
222
333
444
555
112
523
999
432
351""".byteInputStream())
}

fun main(args: Array<String>) {
    solve()
}

fun solve() {
    val result = Array(0) { 0 }
            .map {
                readLine()!!.map { it - '0' }
                        .reduce { product, digit -> product * digit } % 10
            }.joinToString("")

    println(result)
}
