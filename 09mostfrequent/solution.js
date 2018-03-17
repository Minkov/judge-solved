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
    '13',
    '4',
    '1',
    '1',
    '4',
    '2',
    '3',
    '4',
    '4',
    '1',
    '2',
    '4',
    '9',
    '3',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const readNumbers = () => {
    const n = +gets();
    const numbers = [];
    for(let i = 0; i < n; i +=1 ) {
        numbers.push(gets());
    }
    return numbers;
};

const findMostFrequentNumber = (numbers) => {
    const frequences = new Map();
    numbers.forEach((number) => {
        const currentCount = frequences.get(number) || 0;
        frequences.set(number, currentCount + 1);
    });

    let bestNumber= numbers[0];
    let bestFrequency = frequences.get(bestNumber);

    [...frequences].forEach(([number, frequency]) => {
        if(frequency <= bestFrequency) {
            return;
        }

        bestFrequency = frequency;
        bestNumber = number;
    });

    return {
        number: bestNumber,
        frequency: bestFrequency
    };
};

const numbers = readNumbers();
const {number, frequency} = findMostFrequentNumber(numbers);

print(`${number} (${frequency} times)`)
