// Functions in JavaScript

// 1. What are Functions?
// Functions are blocks of reusable code that perform specific tasks.
// They make programs modular and easier to manage.

// 2. Function Syntax
function functionName(parameters) {
    // Code to execute
    return value; // Optional: Returns a result
  }
  
  // Example:
  function add(a, b) {
    return a + b;
  }
  console.log(add(5, 3)); // Output: 8
  
  // 3. Types of Functions
  
  // a) Function Declaration
  // Defined using the 'function' keyword.
  function greet(name) {
    return `Hello, ${name}!`;
  }
  
  // b) Function Expression
  // Stored in a variable.
  const multiply = function (x, y) {
    return x * y;
  };
  console.log(multiply(4, 5)); // Output: 20
  
  // c) Arrow Function
  // A shorter syntax introduced in ES6.
  const subtract = (a, b) => a - b;
  console.log(subtract(10, 3)); // Output: 7
  
  // d) Anonymous Function
  // Functions without a name, often used as callbacks.
  setTimeout(function () {
    console.log("This runs after 2 seconds");
  }, 2000);
  
  // e) Immediately Invoked Function Expression (IIFE)
  // Executed immediately after being defined.
  (function () {
    console.log("IIFE executed!");
  })();
  
  // 4. Parameters and Arguments
  // Parameters are placeholders; arguments are actual values passed to functions.
  function divide(a, b = 1) { // Default parameter: b = 1
    return a / b;
  }
  console.log(divide(10, 2)); // Output: 5
  console.log(divide(10));    // Output: 10
  
  // 5. Returning Values
  // Use 'return' to send a result back to the caller.
  function square(n) {
    return n * n;
  }
  console.log(square(4)); // Output: 16
  
  // 6. Higher-Order Functions
  // Functions that take other functions as arguments or return functions.
  function operate(a, b, callback) {
    return callback(a, b);
  }
  console.log(operate(5, 3, add)); // Output: 8
  
  // Summary:
  // - Functions make code reusable and modular.
  // - Use different types of functions based on your needs (declaration, expression, arrow, etc.).
  // - Functions can take parameters, return values, and even accept other functions as arguments.
  