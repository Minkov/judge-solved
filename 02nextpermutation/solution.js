const lexicographicallyNextPermutation = (a) => {
    let i = a.length - 1;
    while (!(i < 0 || a[i] < a[i + 1])) {
        i -= 1
    }

    let j = 0;
    if (i < 0) {
        return false
    } else {
        j = a.length - 1
    }

    while (!(a[j] > a[i])) {
        j -= 1
    }

    const tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
    a = [a.slice(0, i + 1), a.slice(i + 1).reverse()]
    return true
}

const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};

const test = [
    '3',
    '1 2 3',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

gets();
numbers = gets().split(' ');
lexicographicallyNextPermutation(numbers)
print(numbers.join(' '));