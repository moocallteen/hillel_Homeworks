const person = {
    name: "Yarik",
    age: 21
}

const personCopy = {...person}
// "..." - operator "spread"

personCopy.age = 27
personCopy.isBachokPotic = true

console.log(person)
console.log(personCopy)