package com.minkov

import java.io.File

class Generator {
    fun generate(tests: Int) {
        for (testIndex in 1..tests) {
            var testName = "00$testIndex"
            testName = testName.substring(testName.length - 3, testName.length)
            val testPath = "test.$testName.in.txt"

            val test = this.generateTest(testIndex)
            File(testPath).printWriter().use { it.print(test) }
        }
    }

    private fun generateTest(testIndex: Int): String {
        return (1 shl testIndex).toString()
    }
}