const print = this.print || console.log;

const generateCombinations = (n, k) => {
    const combinations = (x, index, n, k,current, all) => {
        if(index === k) {
            all.push([...current]);
            return;
        }

        for(let next = x; next < n + 1; next += 1) {
            current[index] = next;
            combinations(next, index + 1, n, k, current, all);
        }
    };

    const allCombinations = [];

    combinations(1, 0, n, k, [], allCombinations);

    return allCombinations;
};


generateCombinations(...gets().split(' ').map(Number))
    .forEach((comb) => print(comb.join(' ')));
