const fnWithError = () => {
    throw new Error('Error message');
}

try {
    fnWithError(); // Uncaught Error: Error message
} catch (error) {
    console.error(error); // shows the whole error in the console
    console.log(error.message); // shows only the message of the error
}

console.log('After error'); // This line will be executed