/*
JavaScript provides various data types to hold different kinds of values. 
These data types can be broadly classified into two categories:
1. Primitive Data Types
2. Non-Primitive (Reference) Data Types
*/

// 1. Primitive Data Types
// These are immutable and store single values.

// a. Number
let num = 42; // Integer
let pi = 3.14; // Floating-point number
let negative = -7; // Negative number

// b. String
let greeting = "Hello, World!"; // Double quotes
let singleGreeting = 'Hi there!'; // Single quotes

// c. Boolean
let isJavaScriptFun = true;  // Can be true or false
let isTired = false;

// d. Undefined
let notAssigned; // Variable declared but not assigned a value

// e. Null
let emptyValue = null; // Represents an intentional absence of value

// f. Symbol (ES6+)
let uniqueId = Symbol('id'); // Used to create unique values

// g. BigInt (ES11+)
let largeNumber = 1234567890123456789012345678901234567890n; // Use 'n' for BigInt

// 2. Non-Primitive (Reference) Data Types
// These store collections or more complex entities.

// a. Object
let person = {
    name: "John Doe",
    age: 30,
    isEmployed: true
};

// Accessing object properties
console.log(person.name); // John Doe

// b. Array
let colors = ["red", "green", "blue"]; // Ordered collection of values

// Accessing array elements
console.log(colors[0]); // red

// c. Function
function sayHello() {
    return "Hello!";
}

console.log(sayHello()); // Calling the function

// d. Date (Built-in Object)
let currentDate = new Date();
console.log(currentDate); // Outputs the current date and time