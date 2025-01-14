console.log("if with positive operator");
let val = 10
if (val > 5 ) {
    val +=20
}

console.log(val); // 30


console.log("if with negative operator");
const person = {
    age: 20,
    // name: "Yarik"
}

if (!person.name) {
    console.log("There is no person name");
}