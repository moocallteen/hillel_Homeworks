const person = {
    name: "Yarik",
    age: 21
}

const personCopy = JSON.parse(JSON.stringify(person))

personCopy.age = 29
personCopy.isBachokPotic = true

console.log(person)
console.log(personCopy)

// works with embed properties:
const withEmbedProperties = {
    genre: "rock",
    bands: {
        glamRock: "motley crue",
        hardRock: "scorpions",
        punkRock: "sex pistols"
    }
}

const changedPunkRok = JSON.parse(JSON.stringify(withEmbedProperties))

changedPunkRok.bands.punkRock = "exploited"

console.log(withEmbedProperties)
console.log(changedPunkRok)

