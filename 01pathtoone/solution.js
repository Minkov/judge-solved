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
    '15',
    '2387295450',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

class Queue {
    constructor() {
        this.count = 0;
    }

    isEmpty() {
        return this.count === 0;
    }

    enqueue(value) {
        const next = {
            value,
            next: null,
        };

        if (this.first) {
            this.last.next = next;
        } else {
            this.first = next;
            this.last = next;
        }

        this.count += 1;
    }

    dequeue() {
        const value = this.first;
        this.first = this.first.next;
        this.count -= 1;
        this.count = Math.max(this.count, 0);
        return value.value;
    }
}

const solve = () => {
    const n = +gets();

    const queue = new Queue();
    queue.enqueue([n, 0]);

    while (!queue.isEmpty()) {
        const [x, count] = queue.dequeue();

        if (x === 1) {
            print(count);
            break;
        }

        if (x % 2 === 0) {
            queue.enqueue([x / 2, count + 1]);
        } else {
            queue.enqueue([x - 1, count - 1]);
            queue.enqueue([x + 1, count + 1]);
        }
    }

};

solve();
solve();