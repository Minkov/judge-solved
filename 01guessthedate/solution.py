import sys
from datetime import datetime, timedelta

year = int(sys.stdin.readline())
month = int(sys.stdin.readline())
day = int(sys.stdin.readline())

prev_date = datetime(year, month, day) + timedelta(days=-1)

the_format = "%-d-%b-%Y"
print(prev_date.strftime(the_format))
