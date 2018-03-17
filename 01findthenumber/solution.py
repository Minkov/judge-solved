import sys

low = 1
high = 2 * 10**9

while True:
    n = int((low + high) / 2)
    print(n)
    sys.stdout.flush()

    RESULT = str(sys.stdin.readline()).strip()
    if RESULT == 'down':
        high = n
    elif RESULT == 'up':
        low = n
    else:
        break
