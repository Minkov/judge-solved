import sys

def solve():
    x = int(sys.stdin.readline())
    y = int(sys.stdin.readline())
    z = int(sys.stdin.readline())
    n = int(sys.stdin.readline())

    arr = [x, y, z]

    if n < 4:
        print(arr[n-1])
        return

    for i in range(4, n + 1):
        [x, y, z] = [y, z, x + y + z] 

    print(z)`

solve()

# 2 3 4 9 16 29 
