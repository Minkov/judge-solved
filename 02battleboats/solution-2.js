/* globals gets */
solve();

const solve = () => {
    const [rows, cols] = gets().split(' ');

    const matrix1 = [];
    const matrix1Shoot = [];

    const matrix2 = [];
    const matrix2Shoot = [];

    for (let i = 0; i < rows; i++) {
        matrix1[i] = gets()
            .split(' ')
            .map((a) => +a);

        matrix1Shoot.push([]);
    }

    for (let i = rows - 1; i > -1; i--) {
        matrix2[i] = gets()
            .split(' ')
            .map((a) => +a)
            .reverse();

        matrix2Shoot.push([]);
    }

    let firstPlayer = false;
    while (true) {
        const str = gets();

        if (str === 'END') {
            break;
        }

        firstPlayer = !firstPlayer;
        const arrInput = str.split(' ');

        const row = +arrInput[1];
        const col = +arrInput[2];

        if (firstPlayer) {
            if (matrix1Shoot[row][col]) {
                print('You already shot there!');
                continue;
            }

            matrix1Shoot[row][col] = true;

            if (matrix2[row][col] === 0) {
                print('Missed');
            } else {
                matrix2[row][col] = 0;
                print('Booom');
            }
        } else {
            if (matrix2Shoot[row][col]) {
                print('You already shot there!');
                continue;
            }

            matrix2Shoot[row][col] = true;
            if (matrix1[row][col] === 0) {
                print('Missed');
            } else {
                matrix1[row][col] = 0;
                print('Booom');
            }
        }
    }

    const sum1 = findSum(matrix1);
    const sum2 = findSum(matrix2);

    print(`${sum1}:${sum2}`);

    function findSum(matrix) {
        let sum = 0;
        for (i = 0; i < matrix.length; i++) {
            sum += matrix[i].reduce((a, b) => a + b);
        }

        return sum;
    }
};