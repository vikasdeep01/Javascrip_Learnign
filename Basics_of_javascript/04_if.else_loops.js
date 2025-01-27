// Conditional Statements and Loops in JavaScript

// 1. Conditional Statements
// Used to perform different actions based on conditions.

// a) if statement
// Executes code if the condition is true.
if (condition) {
    // Code to execute if condition is true
  }
  
  // b) if-else statement
  // Executes one block of code if the condition is true, another if it's false.
  if (condition) {
    // Code if true
  } else {
    // Code if false
  }
  
  // c) if-else if-else statement
  // Checks multiple conditions.
  if (condition1) {
    // Code if condition1 is true
  } else if (condition2) {
    // Code if condition2 is true
  } else {
    // Code if all conditions are false
  }
  
  // d) switch statement
  // Compares a value to multiple cases and runs the matching block.
  switch (expression) {
    case value1:
      // Code for value1
      break;
    case value2:
      // Code for value2
      break;
    default:
      // Code if no case matches
  }
  
  // 2. Loops
  // Used to repeat a block of code multiple times.
  
  // a) for loop
  // Runs a block of code a specific number of times.
  for (let i = 0; i < limit; i++) {
    // Code to repeat
  }
  
  // b) while loop
  // Repeats as long as the condition is true.
  while (condition) {
    // Code to repeat
  }
  
  // c) do-while loop
  // Executes the code once before checking the condition.
  do {
    // Code to execute
  } while (condition);
  
  // d) for...in loop
  // Iterates over the properties of an object.
  for (let key in object) {
    // Code to execute with each key
  }
  
  // e) for...of loop
  // Iterates over values in an iterable (like arrays).
  for (let value of iterable) {
    // Code to execute with each value
  }
  
  // Summary:
  // - Conditional statements control the flow of the program based on conditions.
  // - Loops help repeat tasks efficiently.
  