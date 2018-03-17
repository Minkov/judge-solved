const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [
    '2{z10{xy}}',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const quit = this.quit || (() => {});

const solve = (message) => {
    const decode = (start, message) => {
        let result = '';
        let index = start;
        let coeff = -1;

        while (index < message.length) {
            const theBeginning = index;

            while (index < message.length &&
                message[index] !== '}' &&
                isNaN(message[index])) {
                index += 1;
            }

            result += message.substring(theBeginning, index);

            if (!isNaN(message[index])) {
                let number = '';
                
                while (!isNaN(message[index])) {
                    number += message[index];
                    index += 1;
                }

                const decodedSubmessageResult = decode(index + 1, message);
                result += decodedSubmessageResult.result.repeat(+number);
                index = decodedSubmessageResult.index;
            }

            if (message[index] === '}') {
                return {
                    result,
                    index: index + 1,
                };
            }
        }

        return {
            result,
            index: index + 1,
        }
    };

    return decode(0, message).result;
};

print(solve(gets()));