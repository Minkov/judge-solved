def generate_combinations(n, k):
    def combinations(x, index, n, k, current, all):
        if index == k:
            all.append(current[:])
            return

        for nextx in range(x, n + 1):
            current[index] = nextx
            combinations(nextx, index + 1, n, k, current, all)

    allCombinations = []

    combinations(1, 0, n, k, [0] * k, allCombinations)

    return allCombinations


import sys

[n, k] = map(int, sys.stdin.readline().split(' '))
for comb in generate_combinations(n, k):
    print(' '.join(str(x) for x in comb))
