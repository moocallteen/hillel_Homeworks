function multByFactor(value, multiplier = 1) {
    return value * multiplier
}

const oneParam = multByFactor(5)
const twoParam = multByFactor(5, 3)

console.log(oneParam) // 5
console.log(twoParam) // 15

//as arrow function + implicit return
const multiplyByFactorArrow = (value, multiplier = 1) => value * multiplier

const oneParamArrow = multiplyByFactorArrow(7)
const twoParamArrow = multiplyByFactorArrow(7, 2)

console.log(oneParamArrow) // 7
console.log(twoParamArrow) // 14

//anoniomus function
const multiplyByFactorAnon = function(value, multiplier = 1) {
    return value * multiplier
}

const oneParamAnon = multiplyByFactorAnon(144)
const twoParamAnon = multiplyByFactorAnon(23, 17)

console.log(oneParamAnon) // 144
console.log(twoParamAnon) // 391

// https://youtu.be/CxgOKJh4zWE?si=EJGwnvYyxSfhYENy&t=17859