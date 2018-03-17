const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = `2 2
0 0
1 0
0 1
0 1
Shoot 1 1
END`.split('\n');

/* eslint-disable*/
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const readField = (rows, cols) => {
    return Array.from({
            length: rows,
        }).fill(null)
        .map(() => gets().split(' '));
};

const getCommands = function* () {
    while (true) {
        const command = gets();

        if (command === 'END') {
            break;
        }

        yield command;
    }
};

const shoot = (field, row, col) => {
    const cases = {
        '1': 'Booom',
        '0': 'Missed',
        'X': 'You already shot there!',
    };
    const cell = field[row][col];
    return cases[cell];
};

const checkIfShipOnPosition = (val) => val === '1';

const calcResultFunc = (field) => {
    let ships = 0;
    field.forEach((row) => {
        ships += row.filter(checkIfShipOnPosition).length;
    });
    return ships;
};

const solve = () => {
    const [rows, cols] = gets()
        .split(' ')
        .map(Number);

    const fields = [
        readField(rows, cols),
        readField(rows, cols)
        .map((row) => row.reverse())
        .reverse(),
    ];
    const output = [];

    let playerToShoot = 1;

    [...getCommands()].forEach((command) => {
        const [_, row, col] = command.split(' ');
        output.push(shoot(fields[playerToShoot], row, col));
        fields[playerToShoot][row][col] = 'X';
        playerToShoot += 1;
        playerToShoot %= 2;
    });

    const results = fields.map(calcResultFunc);

    output.push(`${results.join(':')}`);
    return output;
};

solve()
    .forEach((line) => print(line));
