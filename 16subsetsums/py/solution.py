import sys

s = int(sys.stdin.readline())

numbers = [int(x) for x in sys.stdin.readline().strip().split(' ')]

sums = [0] * (s + 1)
sums[0] = True

for number in numbers:
    for current_sum in range(s, -1, -1):
        if not sums[current_sum]:
            continue

        new_sum = current_sum + number
        if new_sum > s:
            continue

        sums[new_sum] = True

print("yes" if sums[s] else "no") 
