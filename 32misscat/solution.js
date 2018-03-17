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
    '6',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const solve = () => {
    const n = +gets();
    const cats = [];

    for (let i = 0; i < n; i += 1) {
        const cat = +gets();
        cats[cat] = cats[cat] || 0;
        cats[cat] += 1;
    }

    const max = Math.max(...cats.filter((c) => !isNaN(c)));
    print(cats.indexOf(max));
};

solve();