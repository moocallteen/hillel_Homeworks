// if one parameter - brackets are optional
a => {
    //function body
}

// if body is a single expression - curly brackets are optional
(a, b) => a + b // implicit return

// example
const defaultSum = (a, b) => a +b

console.log(defaultSum(5, 8)) // 13