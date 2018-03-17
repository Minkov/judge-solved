const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};

const test = [
    '1A2B3C4D5E6F',
]
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const getHexDigitValue = (hexDigitString) => {
    let digit = +hexDigitString;
    const SPECIAL_DIGITS = {
        'A': 10,
        'B': 11,
        'C': 12,
        'D': 13,
        'E': 14,
        'F': 15,
    };

    if (isNaN(digit)) {
        digit = SPECIAL_DIGITS[hexDigitString];
    }

    return digit;
}

const hexDigitToBinary = (digitString) => {
    const digit = getHexDigitValue(digitString);
    let hex = digit.toString(2);
    while (hex.length < 4) {
        hex = '0' + hex;
    }

    return hex;
};

const result = gets().split('')
    .reduce((r, digit) => r + hexDigitToBinary(digit), '');

let index = 0;
while(result[index] === '0') {
    index += 1;
}

print(result.substr(index));
