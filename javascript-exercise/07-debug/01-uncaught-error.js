// https://youtu.be/CxgOKJh4zWE?si=Hqobkc47mVdlYKOm&t=18502

const fnWithError = () => {
    throw new Error('Error message');
}

fnWithError(); // Uncaught Error: Error message

console.log('After error'); // This line will not be executed