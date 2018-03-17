fun main(args: Array<String>) {
    var text = readLine()!!
    val n = readLine()!!.toInt()
    for (k in 0 until n) {
        val word = readLine()!!
        var result = ""
        var isDone = true
        var index = -1;

        for (ch in word) {
            val newIndex = text.indexOf(ch, index + 1)
            if (newIndex < 0) {
                isDone = false
                break
            }

            result += text.substring(index + 1, newIndex)

            index = newIndex
        }

        if (isDone) {
            result += text.substring(index + 1)
            text = result
            println(text)
        } else {
            println("No such title found!")
        }
    }
}
