import sys
def solve():
    numbers = map(int, sys.stdin.readline().split(' '))
    
    reversedNumbers = numbers[::-1]

    print(', '.join(map(str, reversedNumbers)))

solve();
