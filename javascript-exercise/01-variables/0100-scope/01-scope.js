// global scope
let a
let b

function myFn() {
    // scope of the function (local scope)
    let b
    a = true
    b = 10
    console.log(a) // true
    console.log(b) // 10
}

// global scope again
myFn()

// variables from global scope
console.log(a) // true since declared in myFn()
console.log(b) // undefined since daesn't have value in the global scope

// https://youtu.be/CxgOKJh4zWE?si=VOAfYPy3cXGVfwrx&t=12066