class Heap {
    constructor(compareFunc) {
        this.values = [null];
        this.compareFunc = compareFunc || ((x, y) => x < y);
    }

    get top() {
        return this.values[1];
    }

    get count() {
        return this.values.length - 1;
    }

    get isEmpty() {
        return this.count === 0;
    }

    add(value) {
        let index = this.values.length; // index where inserted
        this.values.push(value);

        while (index > 1 &&
            this.compareFunc(value, this.values[parseInt(index / 2, 10)])) {
            this.values[index] = this.values[parseInt(index / 2, 10)];
            index /= 2;
            index |= 0;
        }

        this.values[index] = value;
    }

    pop() {
        const value = this.values[this.values.length - 1];
        this.values.pop();

        if (!this.isEmpty) {
            this._heapifyDown(1, value);
        }
    }

    _heapifyDown(index, value) {
        while (index * 2 + 1 < this.values.length) {
            const isFirstValueSmaller =
                this.compareFunc(
                    this.values[index * 2],
                    this.values[index * 2 + 1]
                );

            const smallerKidIndex = isFirstValueSmaller ?
                index * 2 :
                index * 2 + 1;
            if (this.compareFunc(this.values[smallerKidIndex], value)) {
                this.values[index] = this.values[smallerKidIndex];
                index = smallerKidIndex;
            } else {
                break;
            }
        }

        if (index * 2 < this.values.length) {
            const smallerKidIndex = index * 2;
            if (this.compareFunc(this.values[smallerKidIndex], value)) {
                this.values[index] = this.values[smallerKidIndex];
                index = smallerKidIndex;
            }
        }

        this.values[index] = value;
    }
}

class PriorityQueue {
    constructor() {
        this.heap = new Heap();
    }

    get count() {
        return this.heap.count;
    }

    enqueue(value) {
        this.heap.add(value);
    }

    dequeue() {
        const value = this.heap.top;
        this.heap.pop();
        return value;
    }

    peek() {
        return this.heap.top;
    }
}

class Median {
    constructor() {
        this.small = new PriorityQueue();
        this.large = new PriorityQueue();
    }

    add(value) {
        this.large.enqueue(value);

        if (this.large.count > 0) {
            this.small.enqueue(-this.large.dequeue());
        }

        if (this.large.count < this.small.count) {
            this.large.enqueue(-this.small.dequeue());
        }
    }

    getMedian() {
        if (this.large.count > this.small.count) {
            return this.large.peek();
        }

        return (this.large.peek() + (-this.small.peek())) / 2;
    }
}

const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test =
    `ADD -14483
ADD 1
ADD 2
ADD 3
ADD -14483
ADD 8637
FIND
EXIT`.split('\n');

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const solve = () => {
    const median = new Median();

    let command = gets();
    while (command !== 'EXIT') {
        const commandParts = command.split(' ');
        const commandName = commandParts[0];
        const commandArg = commandParts[1];
        switch (commandName) {
            case 'ADD':
                median.add(+commandArg);
                break;
            case 'FIND':
                print(median.getMedian());
                break;
            default:
                break;
        }

        command = gets();
    }
};

solve();
