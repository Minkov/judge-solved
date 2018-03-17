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
    '256 768',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const quit = this.quit || (() => {});


const checkGood = (number) => {
    let x = number;

    while(x > 0) {
        const digit = x % 10;
        
        if(digit !== 0 && number % digit > 0) {
            return false;
        }

        x /= 10;
        x |= 0;
    }
    return true;
};

const [from, to] = gets().split(' ').map(Number);

let count = 0;

for(let i = from; i < to + 1; i += 1) {
    const isGood = checkGood(i);
    if(isGood) {
        count += 1;
    }
}

print(count);
