const cityData = {
    city: "Longon",
    isCapital: true,
    country: "England",
    rate: 3
}

const cityDataString = JSON.stringify(cityData)

console.log(cityDataString)
console.table(cityDataString)

const cityDataObject = JSON.parse(cityDataString)

console.log(cityDataObject)
console.table(cityDataObject)