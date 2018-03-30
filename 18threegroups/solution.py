import sys

def solve():
    arr = map(int, sys.stdin.readline().split(' '))
    groups = [[], [], []]
    for number in arr:
        index = number % 3
        groups[index].append(number)

    for group in groups:
        print(" ".join(map(str, group)))

solve()
