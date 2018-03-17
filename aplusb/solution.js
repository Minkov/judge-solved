const n = +gets();

for(let i = 0; i < n; i += 1){
    const [a, b] = gets().split(' ').map(Number);
    print(a + b);
}

quit(0);
