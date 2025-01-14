console.log("IF IN FUNCTIONS EXAMPLE WITHOUT REDLINE");

const sumPositive = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Arguments must be numbers';
    }

    if (a <= 0 || b <= 0) {
        return 'Arguments must be positive numbers';
    }
    return a + b
};

console.log(sumPositive(10, 1)); // 11

// https://youtu.be/CxgOKJh4zWE?si=Ikqtjj8bZmyPujOj&t=25106