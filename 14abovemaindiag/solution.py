import sys

def solve():
    n = int(sys.stdin.readline())
    s = 0
    for r in range(n):
        for c in range(r + 1, n):
            s += 1 << (c + r)
    print(s)


solve()
