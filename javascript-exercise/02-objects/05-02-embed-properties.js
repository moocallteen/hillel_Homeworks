const myCity = {
    city: 'Paris',
    info: {
        isCapital: true,
        country: 'France'
    }
}

console.log(myCity);

console.log(myCity.info.country);

delete myCity.info['isCapital']

console.log(myCity);