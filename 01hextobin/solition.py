import binascii
import sys


def byte_to_binary(n):
    return ''.join(str((n & (1 << i)) and 1) for i in reversed(range(8)))


def hex_to_binary(h):
    return ''.join(byte_to_binary(ord(b)) for b in binascii.unhexlify(h))


# hex = sys.stdin.readline()
hex = sys.stdin.readline().strip()
bin = hex_to_binary(hex)

index = 0
while bin[index] is '0':
    index += 1

print(bin[index:])
