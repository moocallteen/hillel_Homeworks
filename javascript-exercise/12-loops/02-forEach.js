const arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const arrRandom = ["apple", true, 1, 2.3, "!@#$%^&*()"];
const arrFruits = ["apple", "banana", "orange", "kiwi", "grape", "pear", "peach", "plum", "strawberry", "blueberry"];

console.log("Just numbers:");
arrNum.forEach((element)=> {
    console.log(element);
})

console.log("Letters and idex:");
arrLetters.forEach((element, index)=> {
    console.log(element, index);
})

console.log("Random and idex:");
arrRandom.forEach((element, index)=> {
    console.log(element, index);
})

console.log("Fruits and idex:");
arrFruits.forEach((element, index)=> {
    console.log(element, index);
})

console.log("Numbers and Index:");
arrNum.forEach((e, i)=> {
    console.log(e, i);
})