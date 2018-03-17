import sys


def calc_sum(path, dirs):
    index = 0
    dir_index = 0
    used = set()
    current_sum = 0

    while index not in used and 0 <= index < len(path):
        used.add(index)
        current_sum += path[index]
        the_dir = dirs[dir_index]
        index += the_dir
        dir_index += 1
        dir_index %= len(dirs)

    return current_sum


def solve():
    path = list(map(int, sys.stdin.readline().split(", ")))
    dirs_array = [list(map(int, sys.stdin.readline().split(", ")))
                  for _ in range(int(sys.stdin.readline()))]

    sums = [calc_sum(path, dirs) for dirs in dirs_array]

    return max(sums)


print(solve())
