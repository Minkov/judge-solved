let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;

const n = +gets();

const sequence = Array.from({length: n})
    .fill(undefined)
    .map(() => +gets());

let best = 0;
let current = 1;
let value = sequence[0];

sequence.slice(1)
    .forEach((next) => {
        if(next === value) {
            current += 1;
        } else {
            current = 1;
            value = next;
        }
        best = Math.max(best, current);
    });
best = Math.max(best, current);
print(best);
