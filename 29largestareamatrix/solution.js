const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};

/* eslint-disable */
const gets = this.gets || getGets([
    '5 6',
    '1 3 2 2 2 4',
    '3 3 3 2 4 4',
    '4 3 1 2 3 3',
    '4 3 1 3 3 1',
    '4 3 3 3 1 1'
]);

const print = this.print || console.log;
const quit = this.quit || (() => {});
/* eslint-enable */

const readMatrix = () => {
    const rows = gets()
        .split(' ')
        .map(Number)[0];

    const matrix = [];

    for (let row = 0; row < rows; row += 1) {
        matrix.push(gets().split(' ').map(Number));
    }

    return matrix;
};

const inRange = (value, max) => {
    return 0 <= value && value < max;
};

const USED_CELL = 'X';
const dirs = [
    [0, -1],
    [-1, 0],
    [0, +1],
    [+1, 0],
];

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
            this.count = 0;
            return value;
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
}

const findCountFrom = (r, c, matrix, used) => {
    const queue = new Queue();
    const COEFF = 1 << 11;
    queue.enqueue([r, c]);
    const value = matrix[r][c];
    // matrix[r][c] = USED_CELL;
    used.add(r * COEFF + c);
    let count = 0;

    while (queue.isEmpty() === false) {
        count += 1;
        const [row, col] = queue.dequeue();
        for (const dir of dirs) {
            const [drow, dcol] = dir;
            const nextRow = row + drow;
            const nextCol = col + dcol;
            if (!inRange(nextRow, matrix.length) ||
                !inRange(nextCol, matrix[nextRow].length)) {
                continue;
            }
            const code = nextRow * COEFF + nextCol;

            if (used.has(code) ||
                matrix[nextRow][nextCol] !== value) {
                continue;
            }

            // matrix[nextRow][nextCol] = USED_CELL;
            used.add(code);
            queue.enqueue([nextRow, nextCol]);
        }
    }

    return count;
};

const matrix = readMatrix();

let max = 0;

const used = new Set();
for (let r = 0; r < matrix.length; r += 1) {
    for (let c = 0; c < matrix[r].length; c += 1) {
        if (matrix[r][c] === USED_CELL) {
            continue;
        }

        const current = findCountFrom(r, c, matrix, used);
        max = Math.max(max, current);
    }
}

print(max);
quit(0);