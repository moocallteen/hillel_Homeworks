// instruction:
let a;

const b = 2;

if (a > b) {
    console.log('a is greater than b');
}

for (let i = 0; i < 5; i++) {
    console.log(i);
}

// expressions
// expression may be instruction
// expression-instruction:
"abc";

a = a +3;

c = a + b;

d = "Good " + "Morning";

myFunction(c, d);

console.log("Hello");

// https://youtu.be/CxgOKJh4zWE?si=fTMWiqYQnQDdYbpf&t=20412

// difference between instruction and expressions
// expression-instruction:
function myFn(a) {
    console.log(a); 
}

const x = true; // instruction
let y = 10; // instruction

myFn(2+3) // expression 5
myFn(x) // expression true
myFn(y = y +1)  // expression 11
// myFn(y = y +1;)  // uncaught syntax error
// myFn(let d) // uncaught syntax error