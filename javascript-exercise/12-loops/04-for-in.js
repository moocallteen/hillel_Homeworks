console.log("FOR IN");

// for (variable in object) {
//     [code block to be executed]
// }

const myObject = {
    x: 10,
    xy: 2.5,
    y: true,
    yz: false,
    z: "abc",
    zx: "zyx",
};


console.log("OUTPUT OBJECT'S KEYS");
for (const key in myObject) {
    console.log(key);
}

console.log("-----------------");
console.log("OUTPUT OBJECT'S KEYS AND VALUES");
for(const key in myObject) {
    console.log(key, myObject[key]);
}

console.log("-----------------");
console.log("OUTPUT OBJECT'S KEYS AND VALUES BY FOREACH");
Object.keys(myObject).forEach(key => {
    console.log(key, myObject[key]);
})

console.log("-----------------");
console.log("OUTPUT OBJECT'S VALUES BY FOREACH");
Object.values(myObject).forEach(value => {
    console.log(value);
})

// https://youtu.be/CxgOKJh4zWE?si=XQO8ApzI3G3X-FMU&t=28080