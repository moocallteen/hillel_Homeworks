// https://youtu.be/CxgOKJh4zWE?si=fArtDIXYEUMYus8A&t=7769

const myCity = {
    city: "London",
    cityGreating: function () {
        console.log("Greetings!")
    }
}

myCity.cityGreating()

// or

const myCityShortMethod = {
    city: "London",
    cityGreating() {
        console.log("Greetings! It's short method!")
    }
}

myCityShortMethod.cityGreating()

