// tacLib.js

// A simple function that returns a greeting message
function greet(name) {
    return `Hello, ${name}! Welcome to tacLib.`;
}

// A function to add two numbers
function add(a, b) {
    return a + b;
}

// A function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// A function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// A function to divide two numbers, with error handling for division by zero
function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return a / b;
}

// Export the functions so they can be used in other files
module.exports = {
    greet,
    add,
    subtract,
    multiply,
    divide
};
 
