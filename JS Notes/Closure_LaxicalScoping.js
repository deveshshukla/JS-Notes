'use strict';

// ========== LEXICAL SCOPING ==========
// Lexical (or Static) Scoping: 
// Inner scope can access outer scope variables, but outer scope CANNOT access inner scope variables. Just like 'Inheritance' nothing else.

// Example: Nested Functions & Scope Chain
function person(firstName) {
  const lastName = 'Doe';
  
  return function greet(greeting) {
    return `${greeting}, ${firstName} ${lastName}!`;
  };
}

const greeting = person('John');
console.log(greeting('Hello')); // Output: Hello, John Doe!

// The inner function "remembers" the variables from its LEXICAL scope (outer function)



// ========== CLOSURES ==========
// A closure is a function that has access to variables from its outer (enclosing) function scope.
// Even after the outer function has executed, the inner function REMEMBERS those variables.

// Imp: 'Lexical Scoping' is everything in parent scope + it's own scop, --> & everything is passed in 'Closures'.

// Example 1: Basic Closure
function counter() {
  let count = 0; // This variable is "captured" by the closure
  
  return function increment() {
    count++;
    return count;
  };
}

const myCounter = counter();
console.log(myCounter()); // 1
console.log(myCounter()); // 2
console.log(myCounter()); // 3

// Example 2: Multiple Closures from Same Function
function makeAdder(x) {
  return function add(y) {
    return x + y; // 'x' is captured in a closure
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(3));  // 8 (5 + 3)
console.log(add10(3)); // 13 (10 + 3)
// Each closure has its own independent 'x' variable

// Example 3: Practical Use - Private Variables
function bankAccount(initialBalance) {
  let balance = initialBalance; // Private variable
  
  return {
    deposit(amount) {
      return balance += amount;
    },
    withdraw(amount) {
      return balance -= amount;
    },
    getBalance() {
      return balance;
    }
  };
}

const myAccount = bankAccount(1000);
console.log(myAccount.deposit(500));   // 1500
console.log(myAccount.withdraw(200));  // 1300
console.log(myAccount.getBalance());   // 1300
// balance is protected from external access - CLOSURE provides encapsulation!