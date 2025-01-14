console.log("IF-IF-IF CHAIN EXAMPLE");
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your age: ', (age) => {
    if (age >= 18) {
        console.log('Is an adult');
    }

    if (age >= 12 && age < 18) {
        console.log('Is a teenager');
    }

    if (age < 12) {
        console.log('Is a child');
    }
    rl.close();
});

// https://youtu.be/CxgOKJh4zWE?si=zpamlCEOMjFTc500&t=24956