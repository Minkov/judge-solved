/* globals Symbol */

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
    `4
- s e -
x - x -
x x - -
- x - x`.split('\n');

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const quit = this.quit || (() => {});


class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    enqueue(...values) {
        if (values.length > 1) {
            values.forEach(this.enqueue);
            return this;
        }

        const node = {
            value: values[0],
            next: null,
        };

        if (this.tail === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = this.tail.next;
        }

        this.count += 1;

        return this;
    }

    dequeue() {
        if (this.head === null) {
            return null;
        }

        const value = this.head.value;

        this.head = this.head.next;

        if (this.head === null) {
            this.tail = null;
        }

        this.count -= 1;

        return value;
    }

    peek() {
        if (this.tail === null) {
            return null;
        }

        return this.tail.value;
    }

    isEmpty() {
        return this.count === 0;
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node !== null) {
            yield node.value;
            node = node.next;
        }
    }
}

const WALL = 'x';
const EMPTY = '-';
const START = 's';
const END = 'e';

const readMatrix = () => {
    const size = +gets();
    const matrix = [];

    let start = null;
    let end = null;
    for (let i = 0; i < size; i += 1) {
        const row = gets().split(' ');
        if (row.includes(START)) {
            start = {
                row: i,
                col: row.indexOf(START),
            };
        }

        if (row.includes(END)) {
            end = {
                row: i,
                col: row.indexOf(END),
            };
        }

        matrix.push(row);
    }

    return matrix;
};

const inRange = (val, max) => {
    return 0 <= val && val < max;
};


const rowDirection = [-2, -1, 1, 2, 2, 1, -1, -2];
const colDirection = [1, 2, 2, 1, -1, -2, -2, -1];

const getShortestPath = (matrix) => {
    const queue = new Queue();
    const used = new Set();
    const rows = matrix.length;
    const columns = matrix[0].length;
    let endCell;

    for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
            switch (matrix[row][column]) {
                case 's':
                    {
                        queue.enqueue(row * rows + column);
                        queue.enqueue(0);
                        used.add(row * rows + column);
                        break;
                    }
                case 'e':
                    {
                        endCell = row * rows + column;
                        break;
                    }
            }
        }
    }

    while (!queue.isEmpty()) {
        const currentCell = queue.dequeue();
        const count = queue.dequeue();
        const row = parseInt(currentCell / rows);
        const col = currentCell % rows;
        if (currentCell === endCell) {
            return count;
        }

        for (let i = 0; i < rowDirection.length; i++) {
            const newRow = row + rowDirection[i];
            const newCol = col + colDirection[i];
            if (!inRange(newRow, rows) ||
                !inRange(newCol, columns) ||
                used.has(newRow * rows + newCol) ||
                matrix[newRow][newCol] === 'x') {
                continue;
            }

            queue.enqueue(newRow * rows + newCol);
            queue.enqueue(count + 1);
            used.add(newRow * rows + newCol);
        }
    }
};

const solve = () => {
    const matrix = readMatrix();

    const path = getShortestPath(matrix);
    return path || 'No';
};

print(solve());
quit(0);