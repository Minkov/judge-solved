package com.minkov

import java.lang.StringBuilder

fun hexToBinDigit(digit: Char): String {
    val maps = HashMap<Char, Int>()
    maps['A'] = 10
    maps['B'] = 11
    maps['C'] = 12
    maps['D'] = 13
    maps['E'] = 14
    maps['F'] = 15

    var bin = (digit - '0').toString(2)

    if (digit in 'A'..'Z')
        bin = maps[digit]!!.toString(2)

    bin = bin.padStart(4, '0')

    return bin
}

fun main(args: Array<String>) {
    val hex = readLine()!!
    val bin = StringBuilder()

    for (ch in hex) {
        val binDigit = hexToBinDigit(ch)
        bin.append(binDigit)
    }

    println(bin)
//    println("000110100010101100111100010011010101111001101111")
}