console.log("EXAMPLE 1");
const value1 = 11;
const value2 = 25;

value1 > value2
    ? console.log(value1 + value2)
    : console.log(value1 - value2);

console.log("EXAMPLE 2 - Ternary operator as an expression");
const someValue = 5;
console.log(someValue >= 0 ? someValue : -someValue*2);

console.log("EXAMPLE 3 - Ternary operator as a variable");
const value = -13;
const expression = value >= 0 ? value : -value*3
console.log(expression);

// https://youtu.be/CxgOKJh4zWE?si=lcKWpkdRsKpmRItu&t=26525