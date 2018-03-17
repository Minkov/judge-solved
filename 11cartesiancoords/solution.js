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
    '1',
    '2',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;


const x = gets();
const y = gets();

if(x === '0') {
    if(y === '0') {
        print(0);
    } else {
        print(5);
    }
} else if(x[0] === '-') {
    if(y === '0') {
        print(6);
    } else if(y[0] === '-') {
        print(3);
    } else {
        print(2);
    }
} else {
    if(y === '0') {
        print(6);
    } else if(y[0] === '-') {
        print(4);
    } else {
        print(1);
    }
}
