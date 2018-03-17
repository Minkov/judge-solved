class Stack {
    constructor() {
        this.vals = [];
    }

    get count() {
        return this.vals.length;
    }

    push(...values) {
        values.forEach((val) => this.vals.push(val));
        return this;
    }

    pop() {
        const val = this.vals[this.vals.length - 1];

        this.vals = this.vals.slice(0, this.vals.length - 1);

        return val;
    }

    peek() {
        return this.vals[this.vals.length - 1];
    }

    isEmpty() {
        return this.count === 0;
    }
}



const getSubExpressions = (exp) => {
    const stack = new Stack();

    const subExpressions = [];

    exp.split('')
        .forEach((ch, index) => {
            if (ch === '(') {
                stack.push(index);
            } else if (ch === ')') {
                const first = stack.pop();
                const last = index;
                subExpressions.push(exp.substring(first, last + 1));
            }
        });

    return subExpressions;
};

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
  '5 * (123 * (1 + 3) + ((4 - 3) / 6))',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const expression = gets();

getSubExpressions(expression)
    .forEach((subExp) => print(subExp));
