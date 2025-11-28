- 'use strict' => treat all code as a modern JS code.

# JS Definition: 

JavaScript is a versatile, dynamically typed programming language that brings life to web pages by making them interactive. It is used for building interactive web applications, supports both client-side and server-side development, and integrates seamlessly with HTML, CSS, and a rich standard library.

JavaScript is a single-threaded language that executes one task at a time.
It is an interpreted language which means it executes the code line by line.
The data type of the variable is decided at run-time in JavaScript, which is why it is called dynamically typed.

# Key Features of JavaScript

1. Client-Side Scripting: JavaScript runs on the user's browser, so has a faster response time.
2. Versatile: Can be used for, simple calculations to complex server-side applications.
3. Event-Driven: Responds to user actions (clicks, keystrokes) in real-time.
4. Asynchronous: Handle tasks like fetching data from servers without freezing the UI.
5. Rich Ecosystem: Numerous libraries and frameworks built on JS, such as React, Angular, Vue, etc.

# Client Side and Server Side working of JS

1. Client-Side:
  a. Involves controlling the browser and its DOM (Document Object Model).
  b. Handles user events like clicks and form inputs.
  c. Common libraries include AngularJS, ReactJS, and VueJS.

2. Server-Side:
  a. Involves interacting with databases, manipulating files, and generating responses.
  b. Node.js and frameworks like Express.js are widely used for server-side JavaScript.

# Programming Paradigms in JavaScript
JavaScript supports both imperative and declarative programming styles:

1. Imperative Programming: Focuses on how to perform tasks by controlling the flow of computation. This includes approaches like procedural and object-oriented programming, often using constructs like async/await to handle asynchronous actions.

2. Declarative Programming: Focuses on what should be done rather than how it’s done. It emphasizes describing the desired result, such as with arrow functions, without detailing the steps to achieve it.

# JavaScript Code Execution
JavaScript was initially designed to run within a web browser that has a JavaScript engine.

Example:
Google Chrome: V8 Engine
Safari: JavaScriptCore Engine
Mozilla: SpiderMonkey Engine
Microsoft-Egde: Chakra Engine

# JavaScript Code Execution key stages

1. Parsing: The engine first reads and interprets the raw JavaScript code.
2. Compilation: It then converts the machine code into machine-readable instructions.
3. Execution: Finally, the compiled code is run to achieve desired Output. 
  
  --> Also Engine handles garbage collection to manage memory and utilizes an event loop for asynchronous operations, together to complete the execution lifecycle.

Note: The JavaScript Engine is a program that reads and executes JavaScript code.

# How website works
1. Developer place optimized HTML, CSS, and JavaScript files to a remote web server (which is a Hosting we buy). 
2. When a user visits your site using 'Domain Name' which is connected to the 'Hosting/ Server', their browser requests these files from the server. 
3. The server delivers them, and upon receiving the JavaScript files, the user's --> browser-based JavaScript Engine executes the code, providing a seamless and interactive user experience.

# Execution Context?
Everything in JavaScript is wrapped inside an execution context, (treated like a container) that holds all the information about the environment within which the current JavaScript code is being executed.

--> Phases of the JavaScript Execution Context

  1. Memory Allocation Phase: In this phase, all the functions and variables of the JS code get stored as a key-value pair inside the memory component of the execution context. 
  --> In case of a function: JavaScript copy whole function into the memory block, but in the case of
  --> variables: it assigned undefined as a placeholder.

  --> In this phase, memory is allocated for all variables. Since we are using 'let', the variables are 'hoisted' but kept in the 'Temporal Dead Zone' (TDZ) until they are initialized.
  
  2. Code Execution Phase: In this phase, the JS code is executed one line at a time inside the Code Component (also known as the Thread of Execution) of the Execution Context.

  --> JavaScript, being a single-threaded language, runs the code line by line.

# Print methods in JS

1. alert()--> pop-up
2. Prompt Input 'prompt()'--> Used to display a dialog box asking the user to input.
3. document.write()--> This method is used when you want to directly write some content to the HTML document using JS. This method is useful when you want to dynamically update the webpage's. It overwrites the entire existing content of the document.

Example: `<script>
            let userName = prompt("Please enter your name:");
            document.write("Your name is: " + userName);
          </script>`

4. document.querySelector()--> Used to select the HTML element using tag name, class name, ID, or a more complex selector. Returns only the first element that matches the specified selectors.
Example: 
for Class: document.querySelector('.className')
for ID: document.querySelector('#idName')
for Attribute: document.querySelector("div"), document.querySelector("input[name='login']")

5. document.querySelectorAll()--> returns all elements that match the specified selectors.
6. document.getElementById()--> Used to update the content of an HTML element with a specific ID.
7. document.getElementByClass()--> Used to update the content of an HTML element with a specific Class.

Imp:
# Variable shadowing in JavaScript 
--> Occurs when a variable declared within a specific scope (Inside a function or a let/const block scope) has the same name as a variable in an outer/global scope. The variable in the inner scope shadows the outer one, meaning that within the inner scope, the outer variable's value cannot be accessed until the inner scope terminates.

# How Shadowing Works
The JavaScript engine prioritizes the variable declaration found in the most immediate, local scope. The inner variable effectively hides the outer variable from use within its own code block.

--> Key Points:
1. Scopes involved: Shadowing usually happens between global scope and function scope, or between function scope and block scope (introduced by let and const).

2. Variable type matters:
  a. 'var' is function-scoped (or global-scoped) and does not create block-scope or shadowing. 
  b. 'let' and 'const' are block-scoped and leads to shadowing in modern JS.

Example: 
`let Y = 30;
if (true){
 let Y = 40;
 console.log(y);
}

console.log(y);`

output: 40 30

Note: Same in Function Scope also.

-----------------------------------------------------------
# prgm-1:

# Declaring Variables in JavaScript
a. Before ES6 (2015): Variables were declared only with 'var', which is 'function-scoped' and 'global-scoped', causing issues like hoisting and global pollution.

b. ES6 Introduction: let and const were introduced to provide safer alternatives for declaring variables.

c. Scope: let and const are block-scoped (limited to { } block) or global-scoped, reducing errors compared to var.

1. const => Can't be reassigned/change, Block-scoped, immutable.

2. let => Can be reassigned, but cannot be accessible from out of the scope, because it's a 'Block-scoped' and not hoisted to the top, suitable for mutable variables.

3. var => 'function-scoped' Can be accessed outside block if within the function ❌

Note: 'var' can be redeclared in the same scope, but 'let and const' cannot be.
Note: We can change 'elements/values' of array or objects even if declared as const.

# Rules for Naming Variables

1. Variable names can begin with a letter, underscore (_), or dollar sign ($).
2. Variable names are case-sensitive (e.g., age and Age are different variables).
3. Reserved keywords (like function, class, return, etc.) cannot be used as variable names.

-----------------------------------------------------------
# prgm-2: Data-types in JS

* Primitive data-types: (e.g., number, bigint, string, boolean, null, undefined, symbol) are stored and passed by value. They're immutable values stored directly into memory, they are efficient in both memory usage and performance.

* Non-primitive data-types: (objects, arrays, functions, date, regx) are stored and passed by reference (technically, the variable holds a reference to the object’s memory location). They are derived from primitive data types, also known as 'derived' or 'reference' data types.

In JavaScript, the main difference between primitive and non-primitive data types is that primitives are stored and passed by value, while non-primitives are stored and passed by reference.

# Primitive:

1. Number => data type in JavaScript includes both integers and floating-point numbers. Special values like Infinity, -Infinity, and NaN.
Example: (n3 = Infinity or -Infinity)

2. Null => A standalone value in JavaScript that can be assigned to a variable. For example, when representing temperature, we can’t use 0 (since zero is also a valid temperature), so we use null to show no value.
  - It is type: 'Object'

3. Undefined => A default value in JavaScript for variables that are declared but not yet assigned any value.
  - It is type: 'undefined'

4. Symbol => introduced in ES6, are unique and immutable primitive values used as identifiers for object properties. They help create unique keys in objects, preventing conflicts with other properties. Even if two symbols have the same value, they are always unique.
  - It is type: 'symbol'
  Example: 
  let s1 = Symbol("Geeks");
  let s2 = Symbol("Geeks");
  console.log(s1 == s2);

  Output: false

5. BigInt (Introduced in ES2020) => It's a built-in object in JS to represent the number 2^53. It's a largest number that JavaScript can represent. (2^53 = 9,007,199,254,740,992)
Example: 
let a = BigInt("9007199254740992");
let b = 9007199254740992n; // put 'n' @ end.


# Non-Primitive:

1. Object => JavaScript objects are 'key-value pairs' used to store data. In JS everything is an object.

2. Arrays => It's a special kind of object used to store an ordered collection of values, which can be of 'any data type'.
Example: let a2 = [1, "two", { name: "Object" }, [3, 4, 5]];

3. Function => It's a block of reusable code, same as method in java.

4. Date Object => It's used to work with dates and times.

5. Regular Expression (RegExp) => It's an object used to define search patterns for matching text in strings.
Example: // RegExp to match the word "hello"
          let pattern = /hello/;

          // Returns 'false' because "hello" is not present
          let result1 = pattern.test("Hello, world!");

          // Returns 'true' because "hello" is present
          let result2 = pattern.test("hello, world!");


* Dynamically Typed : JavaScript Variables are not bound to data type they are bound with value of variable and is decided & checked at run time.

* Everything is an Object (Sort of): In JavaScript, Functions are objects, arrays are objects, and even primitive values can behave like objects temporarily when you try to access properties on them.

* NaN is not equal to itself: It is used to represent a computational error. NaN is type number.
Example: console.log(NaN === NaN); // False

* A Symbol is Never Equal to Another One : Symbol is a unique and immutable data type often used for creating private properties and methods. Symbols are never equal to any other Symbol.

* Character in JS: There is no separate type for characters. A single character is also a string.

-----------------------------------------------------------

# Operators in JS

* There are various operators supported by JavaScript: 
1. Arithmetic Operator (+ - * / %)
2. Assignment Operator (= += -= *= /=) 
3. Comparison Operator (== != >= <=)
4. Logical Operator (&& || !)
5. Bitwise Operator (& | ^ ~): Perform operations on binary representations of numbers.
6. Ternary Operator (condition ? ex1 : ex2): It's a shorthand for conditional statements (if-else).

7. Comma Operator: evaluates operands from left to right and returns the value of the 'rightmost' operand.
Example: 
let n1, n2;
const res = (n1 = 1, n2 = 2, n1 + n2);
console.log(res); // 3

8. Unary Operator: also known as 'Increment / Decrement' Operators (x++, ++x)

9. Relational Operator: used to compare its operands and determine the relationship between them, return a Boolean value.
Example:
const obj = { length: 10 };

  a. console.log("length" in obj); // true
  --> 'in' checks if a property exists in an object.

  b. console.log([] instanceof Array); // true
  --> The 'instanceof' operator in JS is used to check if an object is an instance of a specific class or constructor function, or if it inherits from that class's prototype chain.

10. BigInt Operator: It allow calculations with numbers beyond the safe integer range.

11. String Operator: It include concatenation (+) and concatenation assignment (+=), used to join strings or combine strings with other data types.

12. Chaining Operator (?.): allows safe access to deeply nested properties without throwing errors if the property doesn’t exist.
Example:
const obj = { name: "Chinmay", address: { city: "Delhi" } };
console.log(obj.address?.city);
console.log(obj.contact?.phone);

--> '?.' safely accesses a property or method.
--> Returns undefined if the property doesn’t exist.


-----------------------------------------------------------

# Equality in JS

1. == (loose equality): Compares 'values' only.

* Performs type 'coercion' if the types are different.

  1. 5 == "5"   // true  (string "5" is converted to number 5)
  2. 0 == false // true  (false is converted to 0)
null == undefined // true

2. === (strict equality): Compares both 'value' & 'data-type'.

* No type coercion happens.

-----------------------------------------------------------

# Every Data-type : typeof

* typeof(NaN) returns a number.

* 'typeof' operator returns value in a string type.
Example: function check(x) {
              if (typeof (x) === "number") {
                  console.log("x is a number")
              }
              if (typeof (x) === "string") {
                  console.log("x is a string")
              }
          }

* Get data-type of various variable in object: 
Example: let x = { k: 12, m: "geeky stuff" }

console.log(typeof (x))   // object
console.log(typeof (x.k)) // number
console.log(typeof (x.m)) // string
console.log(typeof (x.s)) // undefined

* All the data-type has same typeof except some of the:

1. Null : 'object'

2. Object:

  * A normal object that is not callable (i.e., not a function).

    - Example:
      1. typeof {object}       // "object"
      2. typeof [array]        // "object" (arrays are objects too)
      3. typeof null           // "object"


  * If the object is callable, then typeof return is "function".

    - Example:
      1. typeof function() {}        // "function"
      2. typeof Math.random (i.e. method)   // "function"

-----------------------------------------------------------

# Prgm-3: Memory type: 

1. Stack Memory
 - Used for primitive data types (number, string, boolean, null, undefined, symbol, bigint).

 - Stores the actual value directly.

 - When assigned to another variable, a 'copy' of the value is created.

⚡ Important: Stack is faster and automatically cleaned up after execution (because primitives are immutable).


2. Heap Memory
 - Used for non-primitive data types (objects, arrays, functions).

 - Stores a reference (memory address) pointing to the object in heap.

 - When assigned to another variable, the reference is copied, so both variables point to the same object.

⚡ Important: Changes in one reference affect all variables pointing to that object.

-----------------------------
# 💡 Extra Interview Insights:

1. Call by Value vs. Call by Reference (Trick Q):
 - JavaScript is always call by value.
 - For objects, the value being passed is the reference itself, which makes it appear like call by reference.


2. Garbage Collection:
 - JavaScript uses automatic garbage collection.
 - Any object in 'heap memory' that is no longer referenced becomes eligible for cleanup.

-----------------------------------------------------------

# Prgm-4: Number methods in JS

1. To fix the numbers after decimal point in JS use <b>'toFixed'</b> method.

2. For number precision we can use <b>'toPrecision'</b> method.
  * Return a value in String.
  * Need to give range from 1 to 21 for the precision. 
  Example: Given a range:3 then it will round of the num after 3rd digit.

3. Represent a num in a proper comma format: toLocaleString('en-IN') 'Indian Format'.

-----------------------------------------------------------

# Prgm-5: Date Method in JS

* As we know to create a date we need to create its date object. That's why [typeof Date] is object... (Interview Ques)

-----------------------------------------------------------

# Functions

1. Reusable block of code, written to perform a particular task.

2. In functions, 'parameters' are placeholders which defined on the time when we create a function & we want some value from user in the form of 'arguments'.

3. "Default parameters": are used when no argument is passed during function call, then function automatically uses the default value.
Example: function greet(name = "Guest") {}

4. Return in Function: When "return" executes, the function stops running at that point.

* Type of Functions -->

1. Named Function :A function that has its own name when. It’s easy to reuse and debug because the name shows up in error messages or stack traces.
Example: 
function greet() {  --> "greet" func name.
  return "Hello!";
}

2. Anonymous Function: A function that does not have a name. It is usually assigned to a variable or used as a callback. Since it has no name, it cannot be called directly. 

Note: You are not calling the anonymous function directly; you are calling the variable that holds a reference to that function & assigning anonymous-function variable called "Function Expression".

Example: 
const greet = function() {  --> func value save in "greet variable" but it's anonymous func.
  return "Hi there!";
};
console.log(greet());

3. Arrow Function (ES6)
A new way to write functions using the => syntax. They do not have their own 'this' keyword.

Example: const square = n => n * n;   input: square(3) output: 9

4. Immediately Invoked Function Expression (IIFE): are executed immediately after code run without calling function specifically. They are often used to create isolated scopes or any function which programs required to run at start of the execution.
Example: 
(function () {
    console.log("This runs immediately!");
})();

5. Callback Functions: is passed as an argument to another function and is executed after the completion of that function.
Example:
function num(n, func) {
    return func(n);
}

const numSquare = (n) => n * n;

console.log(num(5, numSquare)); // output: 25

6. Constructor Function: A function used to create a constructor obj, which is creating multiple objects with the same structure. It’s called with the 'new' keyword.

Example: Here 'this' keyword are used, to create an obj.

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const user = new Person("Neha", 22);
console.log(user.name); // Neha

7. Async Function: Functions that handle asynchronous tasks. Declared with async, they return a Promise, and you can use await inside them to pause until another Promise resolves.
Example:
async function fetchData() {
  return "Data fetched!";
}
fetchData().then(console.log); // Data fetched!

8. Generator Function: Declared with an asterisk *, these functions can pause execution using yield and resume later. Useful for lazy loading values or handling iterators.
Example:
function* numbers() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numbers();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2

9. Recursive Function (Recursion): A function that calls itself until a condition is met. Very useful for problems like factorial, Fibonacci, or tree traversals.
Example:
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120

10. Higher-Order Function: A function that either takes another function as a parameter or returns another function. These are common in JavaScript (e.g., map, filter, reduce).
Example:
function multiplyBy(factor) {
  return function(num) {
    return num * factor;
  };
}

const double = multiplyBy(2);
console.log(double(5)); // 10

11. Nested Functions: Functions defined within other functions are called nested functions. They have access to the variables of their parent function.
Example:
function outerFun(a) {
    function innerFun(b) {
        return a + b;
    }
    return innerFun;
}

const addTen = outerFun(10);
console.log(addTen(5));

11. Pure Functions: Simple function, just do operations on passed parameters and return them.

12. Rest Parameter Function: Uses ... to collect all remaining arguments into an array. Very useful when you don’t know how many arguments will be passed.
Example:
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
 