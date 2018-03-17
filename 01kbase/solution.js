const solve = (n, k) => {
    if(n === 0) {
        return 1;
    }
    if(n === 1) {
        return k - 1;
    }
    return (k - 1) * (solve(n - 1, k) + solve(n - 2, k));
};
const n = +gets();
const k = +gets();

print(solve(n, k));
