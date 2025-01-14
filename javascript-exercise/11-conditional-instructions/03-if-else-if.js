console.log("IF-ELSE-IF CHAIN EXAMPLE");
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your age: ', (age) => {
    if (age > 18) {
        console.log('You are an adult');
    } else if (age >= 12) {
        console.log('You are a teenager');
    } else {
        console.log('You are a child');
    }
    rl.close();
});