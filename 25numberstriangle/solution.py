def print_line(size):
    line = []
    for i in range(1, size + 1):
        line.append(str(i))

    print(' '.join(line))
    
def solve(n):
    for i in range(1, n + 1):
        print_line(i)
    for i in range(n - 1, 0, -1):
        print_line(i)

import sys
solve(int(sys.stdin.readline()))
