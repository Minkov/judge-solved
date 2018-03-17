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
    '52',
    '5',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

// N! / (K! * (N - K)!)

const n = +gets();
const k = +gets();

let facts = [1, 1];

for (let i = 1; i < n + 1; i += 1) {
    facts[i] = facts[i - 1] * i;
}

print(0 | (facts[n] / (facts[k] * facts[n - k])));