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
    '10 10',
    '11',
    '0 0',
    '1 1',
    '2 2',
    '3 3',
    '4 4',
    '5 5',
    '6 6',
    '7 7',
    '8 8',
    '8 9',
    '9 9',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const readField = () => {
    const [n, m] = gets().split(' ').map(Number);
    const k = +gets();

    const field = [];
    for(let r = 0; r < n; r+= 1) {
        field.push(Array.from({length: m}));
    }

    for(let i = 0; i < k; i += 1) {
        const [r, c] = gets().split(' ').map(Number);
        field[r][c] = field[r][c] || 0;
        field[r][c] += 1;
    }

    return field;
};

const calcMostCoins = (field) => {
    const d = [];
    for(let r = 0; r < field.length; r += 1) {
        d.push([]);
    }

    d[0][0] = (field[0][0] || 0);

    for(let r = 0; r < field.length; r += 1) {
        for(let c = 0; c < field[0].length; c += 1) {
            d[r][c] = 0;
            if(r - 1 >= 0) {
                d[r][c] = d[r-1][c] || 0;
            }
            if(c - 1 >= 0) {
                d[r][c] = Math.max(d[r][c], d[r][c-1] || 0);
            }
            d[r][c] += field[r][c] || 0;
        }
    }

    return d[field.length - 1][field[0].length - 1];
};


print(calcMostCoins(readField()));
