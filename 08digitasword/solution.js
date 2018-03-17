const gets = () => '1'

const digitNames = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

const digitName = digitNames[+gets()] || 'not a digit';

print(digitName);
