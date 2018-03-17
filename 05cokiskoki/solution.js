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
    '6',
    '1 4 2 6 3 4',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const quit = this.quit || (() => {});

class Stack {
    constructor() {
        this._vals = [];
    }

    push(value) {
        this._vals.push(value);
        return this;
    }

    pop() {
        return this._vals.pop();
    }

    isEmpty() {
        return this.length === 0;
    }

    get top() {
        return this._vals[this._vals.length - 1];
    }

    get length() {
        return this._vals.length;
    }
}

const solve = () => {
    gets();
    const buildings = gets().split(' ').map(Number);
    const d = Array.from({
            length: buildings.length
        })
        .fill(0);

    const s = new Stack();

    buildings.reverse()
        .forEach((current, index) => {

            while (!s.isEmpty() && current >= buildings[s.top]) {
                s.pop();
            }

            if (s.length > 0) {
                d[index] = d[s.top] + 1;
            }
            s.push(index);
        });

    print(Math.max(...d));
    print(d.reverse().join(' '));
};
solve();
quit();