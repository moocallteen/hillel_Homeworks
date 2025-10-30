const someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("SUM OF ODD NUMBERS");
let sumOfOddNumbers = 0;
for (const number of someArray) {
    if (number % 2 !== 0) {
        sumOfOddNumbers += number;
    }
}
console.log(sumOfOddNumbers);

console.log("-----------------");

console.log("SUM OF EVEN NUMBERS");
let sumOfEvenNumbers = 0;
for (const number of someArray) {
    if (number % 2 === 0) {
        sumOfEvenNumbers += number;
    }
}
console.log(sumOfEvenNumbers);

console.log("-----------------");

console.log("SUM OF UNIQUE NUMBERS");

const mixedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7];

let sumOfUniqueNumbers = 0;
for (const number of mixedArray) {
    if (mixedArray.indexOf(number) === mixedArray.lastIndexOf(number)) {
        sumOfUniqueNumbers += number;
    }
}
console.log(sumOfUniqueNumbers);