def solve(n):
    start = 1
    counter = 1
    line = []
    for _ in range(n**2):
        line.append(str(counter))
        if len(line) == n:
            print(' '.join(line))
            line = []
            start += 1
            counter = start
        else:
            counter += 1
            
solve(3)
