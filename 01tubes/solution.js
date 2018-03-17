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
    '4',
    '11',
    '803',
    '777',
    '444',
    '555',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const quit = this.quit || (() => {});


const countTubes = (tubes, len) => {
    return tubes.reduce((count, tube) => count + parseInt(tube / len, 10), 0);
};

const findBestLength = (tubes, desiredCount) => {
    let l = 1;
    let r = Math.max(...tubes) + 1;
    let best = -1;

    while (l <= r) {
        const len = (l + r) >> 1;
        const count = countTubes(tubes, len);
        if (count >= desiredCount) {
            best = Math.max(best, len);
            best = len;
            l = len + 1;
        } else {
            r = len - 1;
        }
    }

    return best;
};

const n = +gets();
const m = +gets();

const tubes = [];
for (let i = 0; i < n; i += 1) {
    tubes.push(+gets());
}

print(findBestLength(tubes, m));