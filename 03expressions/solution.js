const dfs = (digits, expectedResult, index, currentNumber, currentProduct, currentSum, negative) => {
    if (index == digits.length) {
        currentProduct *= currentNumber;
        currentSum += negative ? -currentProduct : currentProduct;

        if (currentSum == expectedResult) {
            return 1;
        }

        return 0;
    }

    let result = 0;

    const nextSum = currentSum + currentProduct * currentNumber * (negative ? -1 : 1);

    // Try +
    result += dfs(digits, expectedResult, index + 1, digits[index], 1, nextSum, false);

    // Try -
    result += dfs(digits, expectedResult, index + 1, digits[index], 1, nextSum, true);
    const nextProduct = currentProduct * currentNumber;
    // Try *
    result += dfs(digits, expectedResult, index + 1, digits[index], nextProduct, currentSum, negative);

    // Try concat
    if (currentNumber != 0) {
        const nextNumber = currentNumber * 10 + digits[index];
        result += dfs(digits, expectedResult, index + 1, nextNumber, currentProduct, currentSum, negative);
    }

    return result
}

const print = this.print || console.log;

const solve = (digits, number) => {
    const result = dfs(digits, number, 1, digits[0], 1, 0, false);
    print(result);
}

solve(gets().split('').map(Number), +gets());
