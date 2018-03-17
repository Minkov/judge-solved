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
    '4',
    '3',
    '2 3 1',
    '5 4 6',
    '9 0 3',
    '8 5 2',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const quit = this.quit || (() => {});

const doForNeighbours = (row, col, matrix, action) => {

};
