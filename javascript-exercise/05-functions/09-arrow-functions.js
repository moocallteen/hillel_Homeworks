// arrow functions
(a, b) => {
    let c
    a = a + 1
    c = a + b
    return c
}

// name arrow functions
const myFunction = (a, b) => {
    let c
    a = a + 1
    c = a + b
    return c
}

const callMyFn = myFunction(5, 8)

console.log(callMyFn) // 14

// setTimeout example
console.log("start timeout")

setTimeout(() => {
    console.log("wait 1000 ms")
}, 1000)

console.log("end timeout")