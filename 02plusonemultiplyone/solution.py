import sys
from queue import Queue

def solve(initial_number, index):
    if index == 1:
        return initial_number
    current_index = 0;
    queue = Queue()

    queue.put((initial_number, 1))

    while not queue.empty():
        current_index += 1

        (current, count) = queue.get()
        if current_index == index:
            print(current)
            return
        queue.task_done()

        next_vals = [
            current + 1,
            2 * current + 1,
            current + 2,
        ]

        for i in range(len(next_vals)):
            next_val = next_vals[i]
            next_count = count + i + 1
            queue.put((next_val, next_count))


(n, m) = map(int, sys.stdin.readline().strip().split(' '))

solve(n, m)
