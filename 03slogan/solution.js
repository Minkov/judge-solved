/* globals Map */
const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = `2
we telerik academy are 
wearetelerikacademy
we are telerik academy
wearenottelerikacademy`.split('\n');

/* eslint-disable*/
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const getInput = function* (n) {
    let index = 0;
    while (index < n) {
        yield [
            gets().split(' '),
            gets(),
        ];

        index += 1;
    }
};

const passwordCracker = (password, words, result, map) => {
    if (password.length === 0) {
        return true;
    }

    if (map.has(password)) {
        return map.get(password);
    }

    for (const item of words) {
        if (password.indexOf(item) === 0) {
            const sub = password.substring(item.length, password.length);

            if (passwordCracker(sub, words, result, map)) {
                result.splice(0, 0, item);
                map.set(sub, true);
                return true;
            }
        }
    }

    map.set(password, false);
    return false;
};

const solve = () => {
    const n = +gets();
    [...getInput(n)]
    .forEach(([passwords, attempt]) => {
        const map = new Map();
        const result = [];
        passwordCracker(attempt, passwords, result, map);

        if (result.length !== 0) {
            print(result.join(' '));
        } else {
            print('NOT VALID');
        }
    });
};

solve();