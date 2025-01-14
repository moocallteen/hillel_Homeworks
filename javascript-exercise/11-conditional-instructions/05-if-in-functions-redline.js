console.log("IF IN FUNCTIONS EXAMPLE WITH REDLINE");
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const sumPositive = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Arguments must be numbers';
    }

    if (a <= 0 || b <= 0) {
        return 'Arguments must be positive numbers';
    }
    return a + b
};

// console.log(sumPositive(true, 3)); // 5

rl.question('Give two arguments: ', (input) => {
    const [a, b] = input.split(' ').map(Number);
    console.log(sumPositive(a, b));
    rl.close();
});