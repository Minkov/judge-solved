const low = 1;
const high = 2 * (10 ** 9)

while (true) {
    const n = int((low + high) / 2)
    print(n)

    const result = gets().trim();
    if (result == 'FLOATS') {
        high = n;
    } else {
        low = n;
    }
}

''.cha