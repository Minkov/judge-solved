import sys
from Queue import Queue

n = int(sys.stdin.readline())

queue = Queue()

queue.put((n , 0))

while not queue.empty():
    (x, count) = queue.get()
    queue.task_done()
    if x is 1:
        print count
        break

    if x % 2 is 0:
        next_x = x // 2
        queue.put((x // 2, count + 1))
    else:
        queue.put((x + 1, count + 1))
        queue.put((x - 1, count + 1))
