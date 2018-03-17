const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = `10
2
1
1
2
3
3
2
2
2
1`.split('\n');

const gets = this.gets || getGets(test);
const print = this.print || console.log;


const n = +gets();

const sequence = Array.from({length: n})
    .fill(undefined)
    .map(() => +gets());

const solve = (number, count, index, seq, best) => {
    if(index === seq.length) {
        return Math.max(count, best);
    }
    print(number, count, index, seq, best);

    if(number === seq[index]) {
        return Math.max(best,
            count,
            solve(seq[index], count + 1, index + 1, seq, best)
        );
    } else {
        return Math.max(best,
            count,
            solve(seq[index], 1, index + 1, seq, best)
        );
    }
};

print(solve(sequence[0], 1, 1, sequence, -1));
