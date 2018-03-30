def get_primes(n):
    is_prime = [True] * (n + 1)

    for x in range(2, n + 1):
        if is_prime[x]:
            for i in range(2 * x, n + 1, x):
                is_prime[i] = False
    primes = []
    for x in range(1, n + 1):
        if is_prime[x]:
            primes.append(x)
    return primes


def solve(n):
    print(' '.join(map(str, get_primes(n))))

import sys
n = int(sys.stdin.readline())

solve(n)
