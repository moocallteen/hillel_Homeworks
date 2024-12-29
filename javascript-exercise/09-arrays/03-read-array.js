const myArray = [1, true, "a"]

console.log(myArray); // the whole array
console.log(myArray[0]); // the first element
console.log(myArray[1]); // the second element
console.log(myArray.length); // the length of the array

myArray.length = 7; // the length of the array is 7, 4 of them are empty
console.log(myArray);

myArray.length = 3; // the length of the array is 3
console.log(myArray);