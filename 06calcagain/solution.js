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
    '33',
    '17',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

n = +gets()
k = +gets();

let result = 1;

for(let i = k + 1; i <=n; i += 1) {
    result *= i;
}
print(result);
