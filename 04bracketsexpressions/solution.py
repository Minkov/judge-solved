import sys

exp = sys.stdin.readline()
indices = []

for i in range(len(exp)):
    ch = exp[i]
    if ch is '(':
        indices.append(i)
    elif ch is ')':
        print(exp[indices.pop(): i + 1])


