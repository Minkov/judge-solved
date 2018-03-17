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
    '0',
    '4',
    '20',
    '1337',
    '2147483648',
    '4000000000',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const quit = this.quit || (() => {});

class BigNumber {
    constructor(x) {
        this.partSize = 8;
        this.parts = [];

        for(let i = 0; i < (x.length / this.partSize) + 1; i += 1) {
            const part = +(x.substr(i * this.partSize, (i+1) * this.partSize));
            print(part);
        }
    }
}
new BigNumber('123456789');
/*
const solve = () => {
    const bin = +gets();
    const n = gets();
    for(let i = 0; i < n; i += 1) {
        let count = 0;
        let x = +gets();
        if(x === 0) {
            count += 1;
        }

        while(x > 0) {
            const bit = x & 1;
            x >>= 1;
            if(bit == bin) {
                count += 1;
            }
        }

        print(count);
    }
};

solve();
quit(0);
*/
