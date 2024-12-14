const person = {
    name: "Yarik",
    age: 21
}

const personCopy = Object.assign({}, person)

personCopy.age = 27

console.log(person)
console.log(personCopy)