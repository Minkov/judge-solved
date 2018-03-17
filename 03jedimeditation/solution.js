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
    '7',
    'M1 K2 K1 P4 P2 P3 P1'
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;


gets();
const ordered = {
    'M': [],
    'K': [],
    'P': [],
};

gets().split(' ')
    .forEach((jedi) => ordered[jedi[0]].push(jedi));

const result = [];
result.push(...ordered.M, ...ordered.K, ...ordered.P)
print(result.join(' '))
