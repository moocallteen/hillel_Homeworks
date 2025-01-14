// array destructurization is used for extracting multiple elements from an array and assigning them to variables
const animalsArray = ['dog', 'cat', 'parrot', 'rabbit',];

const [firstAnimal, secondAnimal] = animalsArray;
// const [, , parrotAnimal] = animalsArray;
// const [parrotAnimal] = animalsArray[2];

console.log(animalsArray); // [ 'dog', 'cat', 'parrot', 'rabbit' ]
console.log(firstAnimal); // dog
console.log(secondAnimal); // cat
// console.log(parrotAnimal); // parrot