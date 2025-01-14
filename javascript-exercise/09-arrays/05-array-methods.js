console.log("PUSH METHOD");
// push method
// The push() method adds one or more elements to the end of an array and returns the new length of the array.
const myArray = [1, 2, 3, 4, 5];

console.log(myArray);
console.log(myArray.length);

myArray.push(6);

console.log(myArray);
console.log(myArray.length);

myArray.push(true);

console.table(myArray);
console.log(myArray.length);

// https://youtu.be/CxgOKJh4zWE?si=GayRIRBpsBBRfvWl&t=21638

console.log("POP METHOD");
// pop method
// The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
const myAnotherArray = [1, 2, 3, 4, 5];

console.log(myAnotherArray);
console.log(myAnotherArray.length);

myAnotherArray.pop();

console.log(myAnotherArray);
console.log(myAnotherArray.length);

const removedLastElement = myAnotherArray.pop(); // 4
console.log(removedLastElement);

console.log(myAnotherArray);



console.log("UNSHIFT METHOD");
// unshift method
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

const unshiftArray = [1, 2, 3, 4, 5];
console.log(unshiftArray);
console.log(unshiftArray.length);

unshiftArray.unshift("first element");

console.log(unshiftArray);
console.log(unshiftArray.length);

unshiftArray.unshift("second element");

console.log(unshiftArray);
console.log(unshiftArray.length);

console.log("SHIFT METHOD");
// shift method
// The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

const shiftArray = [1, 2, 3, 4, 5];
console.log(shiftArray);
console.log(shiftArray.length);

shiftArray.shift();
console.log(shiftArray);
console.log(shiftArray.length);

const removedFirstElement = shiftArray.shift(); // 2
console.log(removedFirstElement);
console.log(shiftArray);
console.log(shiftArray.length);

// https://youtu.be/CxgOKJh4zWE?si=gl7RUILkVoEI2JtG&t=21918

console.log("FOREACH METHOD");
// forEach method
// The forEach() method executes a provided function once for each array element. Does not return anything and does not change the original array.
const forEachArray = [1, 2, 3, 4, 5];
console.log(forEachArray);

forEachArray.forEach(el => {
    console.log(el * 3.14);
});

console.log(forEachArray);

console.log("MAP METHOD");
// map method
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
const mapArray = [5, 6, 7, 8, 9];
console.log(mapArray);

const newArray = mapArray.map(el => el * 3.14);

const newArrayExplicit = mapArray.map((el) => {
    return el * 6.28
});

const newArrayAnonymous = mapArray.map(function(el) {
    return el * 9.44
});

console.log(newArray);
console.log(newArrayExplicit);
console.log(newArrayAnonymous);
console.log(mapArray);

// https://youtu.be/CxgOKJh4zWE?si=bBfHiCaxsd3HH8uh&t=22698