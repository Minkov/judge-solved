import java.util.*
import kotlin.math.min

fun fakeInput() {
    val test = """3 2 1
1
1 2 1
3 2 2
5 8 2
1 2
1 2 5
4 1 2
1 3 1
3 4 4
4 5 1
2 4 3
5 2 1
2 3 20"""
    val stream = test.byteInputStream()

    System.setIn(stream)
}

fun main(args: Array<String>) {
//    fakeInput()
//    println(solve())
//    println("-".repeat(15))
    println(solve())
}

class Node(var name: Int, var distance: Int) {
    override fun toString(): String {
        return "(${this.name} ${this.distance})"
    }
}

fun solve(): Int {
    val (n, m, _) = readLine()!!.split(" ").map { it.toInt() }
    val hospitals = readLine()!!.split(" ").map { it.toInt() }.toSet()
    val nodes = Array(n + 1) { mutableListOf<Node>() }

    for (i in 0 until m) {
        val (x, y, d) = readLine()!!.split(" ").map { it.toInt() }
        nodes[x].add(Node(y, d))
        nodes[y].add(Node(x, d))
    }

    var best = 1 shl 20

    hospitals
            .asSequence()
            .map { getDistancesFrom(it, nodes) }
            .map { distances ->
                distances.indices
                        .filterNot { hospitals.contains(it).or(it == 0) }
                        .sumBy { distances[it] }
            }
            .forEach { best = min(best, it) }

    return best
}

fun getDistancesFrom(startNode: Int, nodes: Array<MutableList<Node>>): Array<Int> {
    val infinity = 1 shl 20
    val used = mutableSetOf<Int>()
    val queue = TreeSet<Node>(kotlin.Comparator { x, y -> x.distance.compareTo(y.distance) })

    val distances = Array(nodes.size) { infinity }

    distances[startNode] = 0

    queue.add(Node(startNode, 0))

    while (!queue.isEmpty()) {
        val node = queue.first()
        queue.remove(node)
        if (used.contains(node.name)) {
            continue
        }

        used.add(node.name)
        nodes[node.name]
                .forEach { next ->
                    if (distances[next.name] > distances[node.name] + next.distance) {
                        distances[next.name] = distances[node.name] + next.distance
                        queue.add(Node(next.name, distances[next.name]))
                    }
                }
    }

    return distances
}
