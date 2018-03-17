let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;

const s = +gets()
const numbers = gets().split(' ').map(Number);

let sum = 0;
for (const number of numbers) {
    sum += number;
}

const sums = Array.from({
        length: sum + 1,
    })
    .fill(false);

sums[0] = true;

for (const number of numbers) {
    for (let sum = sums.length - 1; sum >= 0; sum -= 1) {
        if (sums[sum] > 0) {
            const newSum = sum + number;
            sums[newSum] = true;
        }
    }
}
print(sums[s]);
