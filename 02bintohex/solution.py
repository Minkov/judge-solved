import sys
import string

s=sys.stdin.readline().strip()
bin = hex(string.atoi(s.replace(" ",""),2))

print(bin[2:].upper())