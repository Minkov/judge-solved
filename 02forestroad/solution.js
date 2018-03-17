const getLine = (asteriksPosition, len) => {
    const line = '.'.repeat(asteriksPosition) + '*' + '.'.repeat(len - asteriksPosition - 1);
    return line;
};

const solve = (n, print) => {
    for (let i = 0; i < n; i += 1) {
        const line = getLine(i, n);
        print(line);
    }

    for (let i = n - 2; i >= 0; i -= 1) {
        const line = getLine(i, n);
        print(line);
    }
};

const gets = this.gets || (() => '4');
solve(+gets(), this.print || console.log);