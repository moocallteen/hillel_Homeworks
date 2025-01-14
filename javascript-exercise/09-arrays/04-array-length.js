const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(myArray);
console.log(myArray.length); // 10

myArray[4] = "abcd";

console.log(myArray);       // [1, 2, 3, 4, "abcd", 6, 7, 8, 9, 10]
console.log(myArray[4]);   // abcd

myArray[10] = true;

console.log(myArray);      // [1, 2, 3, 4, "abcd", 6, 7, 8, 9, 10, true]
console.log(myArray[10]); // true
console.log(myArray.length); // 11