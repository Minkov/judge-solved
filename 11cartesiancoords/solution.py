import sys

x = float(sys.stdin.readline())
y = float(sys.stdin.readline())

if x == 0.0 and y == 0.0:
    print(0)
elif x == 0:
    print(5)
elif y == 0:
    print(6)
elif x < 0:
    if y < 0:
        print(3)
    else:
        print(2)
else:
    if y < 0:
        print(4)
    else:
        print(1)
