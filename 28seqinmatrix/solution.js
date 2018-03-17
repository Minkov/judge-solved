const inRange = (val, max) => {
    return 0 <= val && val < max;
}

const goWithDir = (matrix, row, col, [drow, dcol]) => {
    const val = matrix[row][col];
    let count = 0;

    while (inRange(row, matrix.length) &&
        inRange(col, matrix[row].length) &&
        matrix[row][col] === val) {
        count += 1;
        row += drow;
        col += dcol;
    }

    return count;
};

const solve = (matrix) => {
    let best = -1;
    for (let row = 0; row < matrix.length; row += 1) {
        for (let col = 0; col < matrix[row].length; col += 1) {
            const downCount = goWithDir(matrix, row, col, [0, +1]);
            const rightCount = goWithDir(matrix, row, col, [1, 0]);
            const diagonalRightCount = goWithDir(matrix, row, col, [1, 1]);
            const diagonalLeftCount = goWithDir(matrix, row, col, [1, -1]);
            best = Math.max(best, downCount, rightCount, diagonalRightCount, diagonalLeftCount);
        }
    }

    return best;
};

const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};

const readMatrix = () => {
    const [rows, cols] = gets().split(' ').map(Number);
    const matrix = [];
    for (let row = 0; row < rows; row += 1) {
        matrix.push(gets().split(' '));
    }

    return matrix;
};

// this is the test
const test = [
    '6 6',
    '92 11 23 42 59 48',
    '09 92 23 72 56 14',
    '17 63 92 46 85 95',
    '34 12 52 69 23 95',
    '26 88 78 71 29 95',
    '26 34 16 63 39 95',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const quit = this.quit || (() => {});


const matrix = readMatrix();
print(solve(matrix));