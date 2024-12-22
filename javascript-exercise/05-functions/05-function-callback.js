// https://youtu.be/CxgOKJh4zWE?si=4ya5enA8mrjXHqmr&t=11259

function printAnything() {
    console.log("Callback Fubction Text to output in console")
}

console.log("First Text to output in console")

setTimeout(printAnything, 500)