const print = this.print || console.log;

const getHexDigit = (digit) => {
    if (digit < 10) {
        return digit;
    }

    return {
        10: 'A',
        11: 'B',
        12: 'C',
        13: 'D',
        14: 'E',
        15: 'F',
    }[digit];
};

const binToHex = (bin) => {
    if (bin.length % 4 > 0) {
        bin = '0'.repeat(4 - bin.length % 4) + bin;
    }

    let hex = '';

    for (let i = bin.length - 4; i >= 0; i -= 4) {
        const digit = getHexDigit(parseInt(bin.substr(i, 4), 2));
        hex = digit + hex;
    }

    return hex;
};

const bin = gets();
print(binToHex(bin));