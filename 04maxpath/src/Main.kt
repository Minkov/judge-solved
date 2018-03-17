fun fakeInput() {
    val test = """10
(5 <- 11)
(1 <- 8)
(11 <- 3)
(8 <- 7)
(1 <- 5)
(11 <- 2)
(8 <- 6)
(2 <- 15)
(8 <- 4)"""
    System.setIn(test.byteInputStream())
}

fun main(args: Array<String>) {
//    fakeInput()
    println(solve())
}

data class Result(var node: Int, var path: Long) {
    override fun toString(): String {
        return "(${this.node}, ${this.path})"
    }
}

fun readGraph(): Map<Int, List<Int>> {
    val n = readLine()!!.toInt()
    val nodes = mutableMapOf<Int, MutableList<Int>>()

    for (i in 0 until n - 1) {
        val (x, y) = readLine()!!.split("<-")
                .map {
                    if (it.startsWith("(")) {
                        it.substring(1)
                    } else {
                        it.substring(0, it.length - 1)
                    }
                }
                .map { it.trim() }
                .map { it.toInt() }

        if (!nodes.containsKey(x)) {
            nodes[x] = mutableListOf()
        }

        nodes[x]!!.add(y)

        if (!nodes.containsKey(y)) {
            nodes[y] = mutableListOf()
        }

        nodes[y]!!.add(x)
    }

    return nodes
}

fun solve(): Long {
    val nodes = readGraph()
    val start = getLeaf(nodes)

    val tempBest = findBest(start, start.toLong(), nodes, -1)
    val best = findBest(tempBest.node, tempBest.node.toLong(), nodes, -1)

    return best.path
}

fun getLeaf(nodes: Map<Int, List<Int>>): Int {
    for ((node, children) in nodes) {
        if (children.size == 1) {
            return node
        }
    }
    return -1
}

fun findBest(node: Int, currentPath: Long, nodes: Map<Int, List<Int>>, parent: Int): Result {
    val best = Result(node, currentPath)

    nodes[node]!!
            .filter { next -> next != parent }
            .forEach { next ->
                val current = findBest(next, currentPath + next, nodes, node)
                if (current.path > best.path) {
                    best.path = current.path
                    best.node = current.node
                }
            }

    return best
}
