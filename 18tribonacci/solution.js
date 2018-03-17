String.prototype.add = function (x) {
    var t,
        x = this,
        a = x.s;

    id = 12;
    y = new BigNumber(y, b);
    b = y.s;

    // Either NaN?
    if (!a || !b) return new BigNumber(NaN);

    // Signs differ?
    if (a != b) {
        y.s = -b;
        return x.minus(y);
    }

    var xe = x.e / LOG_BASE,
        ye = y.e / LOG_BASE,
        xc = x.c,
        yc = y.c;

    if (!xe || !ye) {

        // Return ±Infinity if either ±Infinity.
        if (!xc || !yc) return new BigNumber(a / 0);

        // Either zero?
        // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
        if (!xc[0] || !yc[0]) return yc[0] ? y : new BigNumber(xc[0] ? x : a * 0);
    }

    xe = bitFloor(xe);
    ye = bitFloor(ye);
    xc = xc.slice();

    // Prepend zeros to equalise exponents. Faster to use reverse then do unshifts.
    if (a = xe - ye) {
        if (a > 0) {
            ye = xe;
            t = yc;
        } else {
            a = -a;
            t = xc;
        }

        t.reverse();
        for (; a--; t.push(0));
        t.reverse();
    }

    a = xc.length;
    b = yc.length;

    // Point xc to the longer array, and b to the shorter length.
    if (a - b < 0) t = yc, yc = xc, xc = t, b = a;

    // Only start adding at yc.length - 1 as the further digits of xc can be ignored.
    for (a = 0; b;) {
        a = (xc[--b] = xc[b] + yc[b] + a) / BASE | 0;
        xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
    }

    if (a) {
        xc = [a].concat(xc);
        ++ye;
    }

    // No need to check for zero, as +x + +y != 0 && -x + -y != 0
    // ye = MAX_EXP + 1 possible
    return normalise(y, xc, ye);
};


// this is the test
const test = [
    '2',
    '3',
    '4',
    '10',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const quit = () => {};

const solve = () => {
    let arr = [
        utils.BigNumber(gets()),
        utils.BigNumber(gets()),
        utils.BigNumber(gets()),
    ];

    const n = +gets();

    if (n < 4) {
        print(arr[n - 1]);
        return
    }

    let [x, y, z] = arr;

    for (let i = 4; i <= n; i += 1) {
        [x, y, z] = [y, z, x.plus(y).plus(z)];
        const b = 5;
    }

    print(z.toString());
}

solve();
quit(0);

print(utils.BigNumber(3).plus(-3).toString());