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
    '1',
    '5 2',
    '7 2 5 10 8',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const quit = this.quit || (() => {});

const isValidSplit = (numbers, m, sum) => {
    let current = 0;
    let count = 1;
    for (const number of numbers) {
        current += number;
        if (current > sum) {
            current = number;

            ++count;

            if (count > m) {
                return false;
            }
        }
    }

    return true;
};

const findBestMinMaxSum = (numbers, m, l, r) => {
    while (l < r) {
        const mid = (l + r) >> 1;
        if (isValidSplit(numbers, m, mid)) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }

    return r;
};

const solve = () => {
    const testsCount = +gets();

    for (let i = 0; i < testsCount; i += 1) {
        const [_, m] = gets().split(' ').map(Number);

        const numbers = gets().split(' ').map(Number);

        let maxNumber = Number.MIN_VALUE;
        let maxSum = 0;

        numbers.forEach((number) => {
            maxNumber = Math.max(maxNumber, number);
            maxSum += number;
        });

        const best = findBestMinMaxSum(numbers, m, maxNumber, maxSum);
        print(best);
    }
};

solve();
quit(0);
