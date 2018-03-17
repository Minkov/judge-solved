const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = `set 269
front-add 6
back-remove
back-remove
front-add 5
back-add 7
back-add 3
set 7
front-add 9
front-add 0
print
back-add 7
front-add 4
set 9
front-add 4
front-add 6
front-add 1
back-add 9
front-add 9
front-add 8
back-add 8
front-add 5
front-add 6
back-add 9
back-remove
front-add 0
back-add 7
front-add 4
front-add 4
set 5
back-remove
back-add 0
front-add 0
back-add 2
back-add 4
back-add 6
print
front-add 3
front-remove
front-add 8
back-add 5
back-add 7
front-add 6
back-add 5
back-add 5
back-add 8
reverse
back-remove
front-add 9
back-add 9
front-remove
front-add 5
back-add 4
back-add 2
print
back-add 9
reverse
front-add 0
back-remove
print
back-add 6
front-add 6
front-remove
back-add 8
reverse
back-add 1
reverse
front-add 6
front-add 0
set 2
back-add 9
back-remove
front-add 8
back-add 9
back-add 6
back-add 1
back-add 5
back-add 7
back-add 1
front-remove
back-add 1
set 6
reverse
back-remove
print
set 0
front-add 7
back-remove
back-add 5
back-add 2
front-add 3
front-add 7
front-add 1
reverse
front-add 2
print
back-add 6
front-add 9
front-add 5
back-add 1
back-add 1
set 7
front-add 7
reverse
back-add 0
front-add 6
back-add 1
front-add 3
back-remove
set 5
front-add 5
back-add 0
front-add 6
front-add 4
back-add 7
set 1
print
front-add 7
back-add 8
back-add 8
front-add 7
back-add 6
back-add 0
back-add 9
print
front-add 0
back-add 2
back-add 3
back-add 4
front-add 4
back-add 8
reverse
reverse
back-remove
back-add 2
back-add 2
back-add 4
reverse
back-add 3
set 4
front-add 9
back-add 8
back-remove
back-add 9
front-add 0
back-add 4
front-add 0
front-add 2
reverse
front-add 1
back-remove
front-add 8
front-add 2
front-remove
front-add 9
back-remove
back-add 5
print
front-add 9
front-remove
back-add 1
set 6
front-remove
back-add 7
back-add 5
reverse
back-remove
back-add 4
back-add 6
front-remove
front-add 2
reverse
set 2
front-add 8
back-add 8
front-add 3
print
front-add 1
front-add 1
front-add 0
back-add 8
print
front-add 6
front-add 9
reverse
back-add 6
back-add 8
back-add 9
front-add 7
front-add 4
front-add 9
back-remove
back-add 2
reverse
front-add 2
back-add 8
front-add 7
front-add 8
set 9
front-remove
back-add 9
set 3
front-add 6
back-add 2
front-add 1
reverse
front-add 8
front-add 2
front-add 6
front-add 0
reverse
front-remove
front-add 4
front-add 5
front-add 8
back-add 1
front-add 2
front-remove
front-add 1
front-remove
front-add 9
front-add 6
front-add 5
set 7
front-add 2
back-add 2
front-add 1
front-add 9
print
print
set 6
front-add 8
back-add 0
front-add 5
back-remove
front-add 9
back-add 0
back-add 2
back-add 9
reverse
front-add 9
back-add 8
front-add 8
back-add 0
print
back-add 5
back-add 8
front-add 8
front-add 2
back-add 8
front-add 9
reverse
front-add 9
back-add 2
back-add 9
back-add 6
back-add 1
front-add 1
front-remove
set 9
back-remove
back-add 4
set 5
back-remove
set 5
back-add 4
back-add 8
reverse
front-add 0
back-remove
back-remove
back-add 1
print
front-add 7
back-add 0
front-remove
front-remove
back-add 8
front-add 2
back-add 3
front-add 5
back-add 3
set 9
back-add 6
back-add 4
front-add 2
back-add 2
back-add 1
front-add 9
front-add 3
reverse
front-add 1
back-remove
front-add 0
front-add 4
reverse
back-add 9
front-add 0
back-add 2
back-add 0
reverse
back-add 1
reverse
reverse
front-add 8
front-add 0
print
back-add 4
back-add 0
reverse
front-add 4
back-add 1
back-add 3
back-add 8
front-add 9
reverse
front-add 7
reverse
print
front-add 9
reverse
back-add 8
front-add 5
back-add 9
front-remove
back-add 0
front-add 9
back-add 5
back-add 5
front-add 4
front-add 5
front-add 4
set 3
front-add 6
front-add 2
back-add 4
back-add 7
back-add 4
front-add 8
front-add 5
back-remove
front-add 8
front-add 6
front-add 2
front-remove
front-add 8
set 5
back-add 2
back-add 2
front-add 5
back-add 9
back-add 4
set 4
front-add 2
front-add 9
back-add 9
front-add 4
back-remove
back-add 0
front-add 5
front-add 6
front-add 8
back-add 1
set 8
front-remove
front-add 9
print
front-add 9
back-remove
front-add 6
front-add 5
front-add 8
back-add 7
back-add 3
back-add 5
back-add 7
back-add 4
reverse
back-add 5
front-add 0
front-add 4
back-add 8
front-add 9
front-remove
front-add 1
reverse
front-add 1
back-add 9
print
back-add 1
back-add 6
front-add 7
reverse
front-add 6
back-add 8
back-add 4
set 0
front-add 5
reverse
back-add 6
front-add 9
back-add 7
back-add 5
front-add 3
set 7
back-add 6
back-remove
reverse
reverse
front-add 2
back-add 0
back-add 4
front-add 9
back-add 0
front-add 3
front-add 2
back-add 1
back-add 2
front-add 0
back-remove
back-add 6
back-add 9
front-add 4
back-add 4
front-add 6
back-add 8
front-add 9
reverse
front-add 2
reverse
front-add 8
back-add 8
back-add 2
back-add 1
back-add 5
front-add 0
back-remove
back-add 9
front-remove
back-add 5
front-add 3
back-add 7
front-add 3
front-add 2
back-add 4
back-add 9
print
back-add 0
back-add 4
print
front-add 5
back-add 5
front-add 7
front-add 9
back-add 3
back-add 5
back-add 6
front-remove
back-add 0
set 9
print
back-add 9
reverse
front-add 2
back-add 4
back-add 1
front-add 5
back-add 3
front-remove
set 9
back-add 2
back-add 5
back-add 7
front-add 2
back-add 1
reverse
front-remove
back-remove
back-add 5
back-add 3
back-add 3
back-add 6
set 8
reverse
front-add 3
back-add 3
back-add 3
back-add 9
front-add 5
front-add 6
back-remove
front-add 4
back-add 4
back-add 7
front-add 4
front-add 8
front-add 7
front-remove
front-add 4
back-remove
front-add 9
back-add 2
back-remove
front-add 3
front-add 2
reverse
front-add 0
back-add 6
print
back-add 5
print
end`.split('\n');

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const next = function* () {
    let line = gets();
    while(line !== 'end') {
        yield line;
        line = gets();
    }
};

const solve = () => {
    let number = '';
    for(let commandLine of next()) {
        const [command, param] = commandLine.split(' ');
        switch(command) {
            case 'print':
                print(number);
                break;
            case 'set':
                number = param;
                break;
            case 'back-add':
                number += param;
                break;
            case 'front-add':
                number = param + number;
                break;
            case 'front-remove':
                number = number.substr(1);
                break;
            case 'back-remove':
                number = number.substr(0, number.length - 1);
                break;
            case 'reverse':
                number = number.split('').reverse().join('');
                break;

        }
    }
};

solve();
