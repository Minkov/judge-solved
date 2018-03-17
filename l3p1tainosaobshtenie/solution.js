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
    'o2hs123o6G0ol090le42H',
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const message = gets()
const result = message.split('')
    .filter((ch) => isNaN(ch))
    .reverse()
    .join('');
print(result)
