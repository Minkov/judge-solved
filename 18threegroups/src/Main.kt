fun main(args: Array<String>) {
    val arr = readLine()!!.split(' ').map { it.toInt() }

    val groups = Array(3) { mutableListOf<Int>() }

    arr.forEach { number ->
        val index = number % 3
        groups[index].add(number)
    }

    groups.map { it.joinToString(" ") }
            .forEach { println(it) }
}