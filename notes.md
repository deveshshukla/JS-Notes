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
  <!-- In JavaScript, typeof null returns "object" due to a long-standing bug in the language. -->

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

 - Note: When we create an array and store it in some variable than variable is created in 'Stack Memory' but its pointing towards an array which store/created on a 'Heap Memory', If another variable copy same array then its not create copy it simple refer that variable also to same array which in 'Heap Memory', so changes in any variable reflect to both variable because here copy is not create, only same reference given.

 - Variable Storage (Stack): When you declare an array, the variable name itself and its reference (a memory address) are stored in the Stack Memory.

 - Data Storage (Heap): The actual array data is created in the Heap Memory. The heap is used for dynamic data structures that can grow or change in size.

 - Copying Behavior (Reference): When you assign one array variable to another (e.g., let arr2 = arr1), JavaScript does not create a new array. It simply copies the memory address from the stack.

 - Synchronized Changes: Because both variables point to the same location in the Heap, modifying the array through one variable will automatically reflect when you access it through the other. 

⚡ Important: Changes in one reference affect all variables pointing to that object.

Example:

Creation: let arr1 = [1, 2];

Stack: arr1 -> Address 0x001
Heap: Address 0x001 -> [1, 2]

Assignment: let arr2 = arr1;
Stack: arr2 -> Address 0x001 (same as arr1)

Modification: arr2.push(3);

Heap: Address 0x001 is now [1, 2, 3].
Result: Both arr1 and arr2 now show [1, 2, 3]. 

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

4. Functions in JavaScript have a '.name' property.
<!-- 
const x = () => {}
console.log(x.name); // 'x'
-->


* Type of Functions -->

1. Named Function :A function that has its own name when. It’s easy to reuse (in recursion, hard in anonymous func) and debug because the name shows up in error messages or stack traces.
Example: 
function greet() {  --> "greet" func name.
  return "Hello!";
}

2. Anonymous Function: Function that does not have any name associated with it. In anonymous functions in JavaScript, we use only the function keyword without the function name. `let greet = function(){}` An anonymous function is not accessible after its initial creation, it can only be accessed by a variable it is stored as a value.

Example: Arrow functions are always anonymous function.
let displayName = () => {
  return "Hello!";
}

Note: You are not calling the anonymous function directly; you are calling the variable that holds a reference to that function & assigning anonymous-function variable called "Function Expression".

Example: func value save in "greet variable" but it's anonymous func.
const greet = function() {
  return "Hi there!";
};
console.log(greet());

3. Arrow Function (ES6)
A new way to write functions using the => syntax. They do not have their own 'this' keyword.

Example: const square = n => n * n;   input: square(3) output: 9

4. Immediately Invoked Function Expression (IIFE): are executed immediately after code run without calling function specifically. They are often used to create isolated scopes or any function which programs required to run at start of the execution.

Example: Anonymous IIFE functions
(function () {
    console.log("This runs immediately!");
})();
    
// Using arrow functions
(() => {
    console.log("This runs immediately!");
})();

* Named IIFE: You can provide a name to the function expression. This name is only accessible inside the function itself and is useful for recursion or clearer stack traces during debugging.

(function myPrivateFunction() {
    console.log("I have a name, but you can't call me from outside!");
})();

5. Callback Functions: is passed as an argument to another function and is executed after the completion of that function.
Example:
const numSquare = (n) => n * n;

function num(n, callback) {
    return callback(n);
}

console.log(num(5, numSquare)); // output: 25

6. Constructor Function: A function used to create a constructor obj, which is creating multiple objects with the same structure. It’s called with the 'new' keyword.

Example: Refer--> (prgm-8), Here 'this' keyword are used to create an obj.

class User {
  constructor(name = "Guest", role = "Viewer") {
    this.name = name;
    this.role = role;
  }
}

const user = new User("Dev", "Admin");
console.log(user.name); // Dev
console.log(user.role); // Admin

const anon = new User(); //  No Argument Passed
console.log(anon.name); // Guest (Default Parameters)
console.log(anon.role); // Viewer (Default Parameters)

Example:
// Passing Argument as a 'Object'
class Car {
  constructor({ brand, model, year = 2025 }) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
}

const car = new Car({brand: 'tata', model:'nano'});
console.log(car.brand, car.model, car.year); // tata nano 2025

<!-- Note: In modern JS (ES6+), constructor functions are "wrapped" inside classes primarily to provide a more structured, readable, and safe way to handle object-oriented programming (OOP).  -->

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

10. Nested Functions: Functions defined within other functions are called nested functions. They have access to the variables of their parent function.
Example:
function outerFun(a) {
    return innerFun = (b) => {
        return a + b;
    }
}

const addTen = outerFun(10);
console.log(addTen(5)); // 15

11. Rest Parameter Function: Uses ... to collect all remaining arguments into an array. Very useful when you don’t know how many arguments will be passed.
Example:
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

--------------------------------------------

12. Higher-Order Function 

* A higher-order function is a function that does one of the following or both:
1. Takes another function as an argument.
2. Returns another function as its result.

Example: 

function fun() {
    console.log("Hello, World!");
}

<!-- High Order Function -->
function fun2(fn) {
    fn();
    fn();
}

fun2(fun);

O/P: Hello, World!
     Hello, World!


* Popular Higher Order Functions in JavaScript -->

1. 'Map' function: Used to transform an array by applying a callback function to each element. It returns a new array.

const n = [1, 2, 3, 4, 5];
const square = n.map((num) => num * num);
console.log(square);

O/P: [1,4,9,16,25]

<!-- map send each element as an argument '(num) => num * num'. -->
<!-- A new array is returned. -->


2. 'Filter' function: Used to create a new array containing elements that satisfy a given condition. 

<!-- It iterates through each element of the array and invokes the callback function for each element. If the callback function returns true for an element, that element is included in the new array; otherwise, it is excluded. -->

const n = [1, 2, 3, 4, 5];
const even = n.filter((num) => num % 2 === 0);
console.log(even);

O/P: [2,4]

 <!-- The callback '(num) => num % 2 === 0' filters out elements not divisible by 2. -->
 <!-- The resulting array contains only even numbers. -->


3. 'Reduce' function: Accumulates array elements into a single value based on a callback function.

<!-- It executes a provided callback function once for each element in the array, resulting in a single output value. The callback function takes four arguments: accumulator, currentValue, currentIndex, and the array itself. -->

const n = [1, 2, 3, 4, 5];
const sum = n.reduce((init, arrElement) => init + arrElement, 0);
console.log(sum);

O/P: 15

 <!-- The callback '(init, arrElement) => init + arrElement' adds all elements. -->
 <!-- 0 is the initial value = 'init'. -->

 <!-- 
 Example: Program for Filter, Map, & Reduce.

 const arr = [1,2,3,4,5,6];
  const result = arr.filter(num => num % 2===0)
              .map(num => num * 2)
              .reduce((acc, curr) => acc + curr, 0);
  console.log(result); 

  Output: 24
  First, array elements are filtered, resulting [2, 4, 6], then mapped to [4, 8, 12], then reduced to 24.
  -->

4. forEach function: Executes each array element. Not return any new array.

const n = [1, 2, 3];
n.forEach((num) => console.log(num * 2));

O/P: 2, 4, 6

5. find function: Returns the first element in the array that satisfies a given condition.

const n = [1, 2, 3, 4, 5];
const fEven = n.find((num) => num % 2 === 0);
console.log(fEven); // 2

 <!-- The callback '(num) => num % 2 === 0' finds the first even number. -->
 <!-- If no element satisfies the condition, it returns 'undefined'. -->

6. some function: Checks if at least one array element satisfies a condition.

const n = [1, 2, 3, 4, 5];
const hasNeg = n.some((num) => num < 0);
console.log(hasNeg);

 <!-- It returns true if any element passes the condition, false otherwise. -->

7. every function: Checks if all array elements satisfy a condition.

const n = [1, 2, 3, 4, 5];
const allPos = n.every((num) => num > 0); // checks if all numbers are positive.
console.log(allPos)

 <!-- It returns true only if all elements pass the condition. -->

--------------------------------------------

## Some Important function articles for interview point of view:
 
1. Currying function : https://www.geeksforgeeks.org/javascript/what-is-currying-function-in-javascript/

2. setTimeout() function : https://www.geeksforgeeks.org/javascript/setTimeout-in-JavaScript/

3. Importing one JavaScript file into another : Example: Prgm- 6 & 7

--------------------------------------------

## Advanced Techniques with Higher Order Functions

1. Function Composition: is the process of combining multiple functions to create a new function. The composed function applies multiple operations in sequence.

Example: 
<!-- Function-1 -->
function add(x) {  <!-- Parameter: f -->
    return x + 2;
}

<!-- Function-2 -->
function mul(x) {  <!-- Parameter: g -->
    return x * 3;
}

<!-- Function-Compose -->
function compose(f, g) {
    return function(x) {
        return f(g(x));
  };
}
var res = compose(add, mul)(4);
console.log(res); <!-- Output: 14 -->

Output: x=4 --> g(4) --> (4*3 = 12) --> f(6) --> (12+2 = 14)

<!-- 
  High-order function: LeetCode Problem

  Given an array of functions [f1, f2, f3, ..., fn], return a new function that is the function composition of the array of functions.

  'function composition' of the array of functions is that iterate from last to first position.

  Example:

  Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
  Output: 65

  Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
  Output: 1000


  Code:

  let compose = function(functions) {
      
      return function fn(x) {
          let result = x;
          for(let i=functions.length-1; i>=0; i--) {
              result = functions[i](result);
          }
          return result;
      }
  };

 -->


 2. Currying: transforms a function that takes multiple arguments into a series of functions that each take one argument. This allows partial application of the function.

 Example:

  function mul(x) {
    return function(y) {
        return x * y;
    };
  }
  
  var mulFn = mul(2);
  console.log(mulFn(5));  <!-- Output: x=2, y=5 : 10 -->

  <!-- Confusion-Point: 
        var mulFn = mul(x=2);

        mulFn = function(y) {
                    return x * y;
                };

        mulFn(y=5) pass argument to the inner func.
   -->


   3. Memoization: is a technique (not any inbuilt func.), where function results are 'cached' so that repeated calls with the same arguments return faster. This is particularly useful for large amt. of same function calls to fast the process.

   Example: Prgm-7

   function memoize(func) {
      var cache = {};
      return function (arg) {
          if (cache[arg]) {
              return cache[arg];
          } else {
              var res = func(arg);
              cache[arg] = res;
              return res;
          }
      };
    }

    function slow(num) {
        console.log("Computing...");
        return num * 2;
    }

    var fast = memoize(slow);
    console.log(fast(5)); // Computing... 10
    console.log(fast(5)); // 10 (cached)

    <!-- memoize caches the results of slowFunction calls. The second time fast(5) is called, the result is fetched from the cache, avoiding recomputation. 
    This optimization improves performance by saving on redundant calculations. 
    
    Leetcode problem on memoize:

    function memoize(fn) {

      // 1. Initialize a cache and a counter
      const cache = new Map();
      let callCount = 0;

      const memoizedFn = function(...args) {
          // 2. Create a unique key based on the arguments
          // JSON.stringify ensures [1, 2] is a different key than [12]
          const key = JSON.stringify(args);

          // 3. Check if the key exists in the cache
          if (cache.has(key)) {
              return cache.get(key);
          }

          // 4. If not in cache, call the function and increment counter
          callCount++;
          const result = fn(...args);
          
          // 5. Store the result in cache and return it
          cache.set(key, result);
          return result;
      }

      // 6. Attach a helper method to get the call count (required by the problem)
      memoizedFn.getCallCount = function() {
          return callCount;
      };

      return memoizedFn;
    }
    -->

-----------------------------------------------------------

# Arrays

- An array is an ordered list of values. 
- In JS, arrays can hold any type of data-such as numbers, strings, objects, or even other arrays—making them a flexible array data-structure.

- 'typeof' of an array is 'object'.

1. Creating array using 'literal' method:
<!-- let a = [] -->

2. Creating array using 'new-keyword/ Array Constructor' :
<!-- let a = new Array() -->

Note: Both the above methods do exactly the same. Use the 'literal method' for efficiency, readability, and speed.

Bug: <!-- let a = [5] --> & <!-- let a = new Array(5) --> are not same.

- in 1st: arr output: [5] --> (Element 5 at idx 0 is created).
- in 2nd: arr output: [ <5 empty items> ] --> (Empty array with space of 5 is created).

Imp: <!-- let a = [1,2,3] --> & <!-- let a = new Array(1,2,3) --> are same.

## Array Built-in methods:

1. 'Push' & 'Pop' : 
  - 'push' is used to add new element in array from 'end'.
  - 'pop' is used to remove element in array from 'end'.
  Example: 
  <!-- 
    let arr = [1,2,3];
    arr.push(4) -- arr = [1,2,3,4];
    arr.pop() -- arr = [1,2,3];
   -->

2. 'Unshift' & 'Shift' :
  - 'unshift' is used to add new element in array from 'start'.
  - 'shift' is used to remove element in array from 'start'.
  Example: 
  <!-- 
    let arr = [1,2,3];
    arr.unshift(4) -- arr = [4,1,2,3];
    arr.shift() -- arr = [1,2,3];
   -->

3. 'Slice' & 'Splice' :
  - 'Slice' method 'copy' the element of a given range, i.e. start idx & end idx (excluded).
  Note: 'Slice' method return new array. No changes in original array.
  <!-- 
  let arr1 = [1,2,3,4];

  console.log(arr1.slice(0,2));
  console.log(arr1); 
  
  Output: [ 1, 2 ]
          [ 1, 2, 3, 4 ] -- OG Array Unchanged.
   -->

  - 'Splice' method 'cut' the element of a given range, i.e. start idx & end idx (excluded).
  Note: 'Splice' method return new array. Make changes in original array.
  <!-- 
  let arr2 = [4,5,6,7];

  console.log(arr2.splice(0,2));
  console.log(arr2); 
  
  Output: [ 4, 5 ]
          [ 6, 7 ] -- OG Array Changed/ Modified.
   -->

4. Array 'Concatenation': Combine two or more arrays using the concat() method. 
Note: It returns new array containing joined arrays elements.

<!-- 
    let a = ["HTML", "CSS", "JS", "React"];
    let b = ["Node", "Expess"];

    // Concatenate both arrays
    let concateArray = a.concat(b);

    console.log(concateArray);

    Output: [ 'HTML', 'CSS', 'JS', 'React', 'Node', 'Expess' ]
 -->

5. Conversion of an Array to String: Builtin method toString() to converts an array to a string.

<!-- 
    let a = ["HTML", "CSS", "JS"];

    // Convert array ot String
    console.log(a.toString());

    Output: 'HTML,CSS,JS'
 -->

6. Recognize Array: Using  'Array.isArray()' & 'instanceof' method.

<!-- 
    const courses = ["HTML", "CSS", "Javascript"];

    console.log(Array.isArray(courses))   // true
    console.log(courses instanceof Array) // true
 -->

7. 'join()' Method: Creates and returns a new string by concatenating all elements of an array. 
Note: We can pass optional specified separator between each element in the resulting string.

<!-- 
  let a = ["HTML", "CSS", "JS", "React"];
  console.log(a.join(', '));

  Output: HTML, CSS, JS, React
 -->

8. 'flat()' Method: Used to flatten the array i.e. it merges all the nested arrays into single array.
  * Non-Mutating: It returns a new array and does not modify the original array.
  * Depth Control: You can specify how deep the flattening should go. The default depth is 1.
  * Cleans Data: It automatically removes empty slots (holes) in sparse arrays. 

  Note: depth (Optional): An integer specifying how many levels of nesting to flatten. 
  - Default is level-1 (Single Level Flattening), Level-2 (Multi-Level Flattening)
  - 'Infinity' --> To flatten an array of any depth into a single dimension.
<!-- 
  const a1 = [['1', '2'], ['3', '4', '5',['6'], '7']];
  const a2 = a1.flat(Infinity);
  
  Output: ['1', '2', '3', '4', '5', '6', '7']
 -->

 Note: Also remove empty space in between Array
 <!-- 
    const arr = [1, , 3, 4, , 5];
    arr.flat(); // [1, 3, 4, 5]
  -->

9. 'indexOf(element)'--> return idx of element & 'includes(element)'--> return true/false.

10. 'fill()' method: fills the array with specified given element.
<!-- 
  1st: Fill Empty Array
  let arr = new Array(5);

  arr.fill(10); // [10, 10, 10, 10, 10]

  2nd: Overwrite previous element
  let arr = [1,2,3];

  arr.fill(10); // [10,10,10]
 -->

11. 'reverse()' --> simple reverse the arr
<!-- arr.reverse() = [3,2,1] -->

12. 'sort()' method: 
  - In-Place Mutation: It modifies the original array rather than creating a new one.

  - Default Sorting: Without a compare function, it converts elements to strings and compares their UTF-16 code unit values. This can cause unexpected results for numbers (e.g., 100 comes before 25 because "1" < "2").

  <!-- 
  Example:

  1. Numbers (Ascending): arr.sort((a, b) => a - b)
  2. Numbers (Descending): arr.sort((a, b) => b - a)
  3. Imp: Strings (Dictionary based): arr.sort((a, b) => a.localeCompare(b))
  4. Array of Objects: users.sort((a, b) => a.age - b.age)
   -->

13. 'Spread' Operator: In JS, the spread operator (...variableName) is used to 'expand' single element into individual elements or properties, (like array, string, or object).

  - Copying Arrays & Objects: It creates a shallow copy, meaning only the first level is duplicated.
    <!-- 
      const original = [1, 2, 3];
      const copy = [...original]; 
    -->

  - Merging Iterables: You can combine multiple arrays or objects into one.
    <!-- 
      const merged = [...arr1, ...arr2];
      const mergedObj = { ...obj1, ...obj2 }; (Note: Duplicate keys are overwritten by the last object spread).
    -->

  - Function Arguments: It allows you to pass an array of values as individual arguments.
    <!-- 
      const nums = [5, 10, 2];
      Math.max(...nums); // Evaluates as Math.max(5, 10, 2) 
    -->

  - Strings to Arrays: Spreading a string breaks it into an array of individual characters.
    <!-- const chars = [..."Hello"]; // ["H", "e", "l", "l", "o"] -->


14. 'Rest' Operator: In JS, the rest operator (...variableName) is used to gather multiple elements into a 'single collection', such as an array or an object.

  - Rest Parameters in Functions: Most common use in a function parameter, where it allows a function to accept an indefinite number of arguments as an array. 
  
  Note: It must be the last parameter in the function definition.

  <!-- 
    function sum(...numbers) {
      // 'numbers' is an actual array: [1, 2, 3, 4]
      return numbers.reduce((total, n) => total + n, 0);
    }
    console.log(sum(1, 2, 3, 4)); // Output: 10
   -->

  - Rest in 'Array Destructuring': It can capture the "remaining" elements of an array during destructuring.
  <!-- 
    const [first, second, ...others] = [10, 20, 30, 40, 50];
    console.log(first);  // 10
    console.log(second); // 20
    console.log(others); // [30, 40, 50]
   -->

  - Rest in Object Destructuring: Same as Array.
  <!-- 
    const user = { name: "Alice", age: 25, city: "New York", job: "Developer" };
    const { name, ...details } = user;

    console.log(name);    // "Alice"
    console.log(details); // { age: 25, city: "New York", job: "Developer" }
   -->

-------------------------------------

* Increase and Decrease the Array Length
  - We can increase and decrease the array length using the JavaScript length property.

  <!-- 
    let a = ["HTML", "CSS", "JS"]

    // Increase the array length to 7
    a.length = 7;

    console.log("Increased Length: ", a);

    // Decrease the array length to 2
    a.length = 2;
    console.log("Decreased Length: ", a)

    Output:

    Increased Length:  [ 'HTML', 'CSS', 'JS', <4 empty items> ]
    Decreased Length:  [ 'HTML', 'CSS' ]

    Note: In JS arrays are flexible so there is no such need to 'Incr's/ Decr's' length of array as such.
   -->

* Iterate array using 'forEach loop':
<!-- 
    let arr = ["HTML", "CSS", "JS"];

    arr.forEach((x) => {
        console.log(x);
    });
 -->

-----------------------------------------------------------

# Strings

- In JavaScript, there is no character type (Similar to Python), so a single character also called a string.
- Like Java and Python, strings are immutable in JS also.
- In JS, we can create a String using String Literals & Template Literals.
  1. String Literals: Strings defined in code using single quotes (') or double quotes (").
  2. Template Literals: Specifically refers to strings using backticks (`)
  Example: Template Literal: <!-- `Hello ${user.name}` -->

  - We can create a multiline string using backticks with template literal.

------------------------------------------
* Basic Operations on JavaScript Strings:

1. 'Substring' method: We can extract a portion of a string using the substring() method. By giving idx value (start + end+1) Exclude last one.
<!-- 
  let str = 'JavaScript Tutorial';

  console.log(str.substring(0, 10)); // JavaScript
 -->

1. 'substr()' Method: Same as substring, here idx values are (start + num of character from there) include last one.
<!-- 
  console.log(str.substr(11, 8)); // Tutorial
 -->

2. 'indexOf()' method: Find the first index of a substring within a string.
<!-- 
  let s1 = 'def abc abc';
  let i = s1.indexOf('abc');
  ​
  console.log(i); // 4 (include space also)
 -->

3. 'replace()' method: Replace substring of a string. 
Note: By default, replace() only replaces the first occurrence. To replace all occurrences, use a regular expression with the 'g flag' Using regex or 'replaceAll()' method. The original string will remain unchanged.

<!-- 
  let str = 'Mind, Power, Power, Soul';

  1st: console.log(str.replace('Power', 'Wealth')); // Mind, Wealth, Power, Soul

  2nd: console.log(str.replace(/Power/g, 'Dream')); // Mind, Dream, Dream, Soul
  
  3rd: console.log(str.replaceAll(/Power/g, 'Money')); // Mind, Money, Money, Soul
 -->

4. Imp: 'localeCompare()' method: Used to compare any two strings 'lexicographically' (refers to a method of ordering or sorting based on the alphabetical arrangement used in dictionaries).

Note: localeCompare() is a case-sensitive (a != A), to make it work we can use <!-- { sensitivity: "base" } --> option.

 - (0) refers to same strings. 
 - (-1) refers to string is alphabetically smaller than from which he is compared.
 - (1) refers to string is alphabetically bigger than from which he is compared.

 <!-- Example: 
  let str = "banana";

  let str1 = "apple";
  let str2 = "banana";
  let str3 = "cat";

  console.log(str.localeCompare(str1)) // -1 (Lower)
  console.log(str.localeCompare(str2)) // 0  (Same)
  console.log(str.localeCompare(str3)) // 1  (Upper)
  
  Another way to write: console.log('Banana'.localeCompare(str)) // -1 (Case-Insensitive)

  Imp: Sort string using this.
  
  let elements = ['gfg', 'geeksforgeeks', 'cse', 'department'];
  let a = elements.sort((a, b) => a.localeCompare(b));

  console.log(a) // [ 'cse', 'department', 'geeksforgeeks', 'gfg' ]


  Imp: To disable case-sensitivity
  let str1 = "geeks";
  let str2 = "GEEKS";
  let result = str1.localeCompare(str2, undefined, { sensitivity: "base" });
  console.log(result); 
  
  Output: 0 (both strings are same)
  -->

  Note: String created using literals <!-- str = 'Hello' --> are different then string created using 'new' keyword which is object. <!-- str = new String('Hello')-->


* Others: (trim, pad, charAt, charCodeAt, etc.) [https://www.geeksforgeeks.org/batch/skill-up-complete-javascript-course/track/su-js-day6/article/NDM0NDEw]

Note: (==) Loose Equality only check value, but Strict Equality (===) check both value and type of variable.

Imp: String interpolation refers to construction of dynamic strings by embedding expressions or variables directly within a string literal. Using Template Literal, String.concat() Method, etc.


-----------------------------------------------------------

# Objects -- Program-9

* An object is a dynamic data structure that stores data as key-value pairs. 'each keys are unique'.
  
  - The values of properties/keys can be primitives, objects, or functions (known as methods when defined inside an object).

  - Objects are mutable: properties can be added, modified, or deleted at any time.

  - Objects allow data grouping and encapsulation, making it easier to manage related information and behavior together.

* There are two primary ways to create an object in JavaScript: 

  1st: Using new Object() Constructor: It's kind of create 'Singleton Object'.
  
  - Not recommended in Modern ES6 JS.
  [Slower, Riskier, More verbose --> (Takes more steps to achieve same result)]

  <!-- 
    let obj = new Object();
    obj.name= "Dev",
    obj.age= 23,
    obj.job= "Developer"
   -->
  
  - 'Singleton pattern', is a creational design pattern that ensures a class has only one instance and provides a global point of access to that instance.


  2nd: Using Object Literal: It's not a 'Singleton Object'. 
  
  - Initialize an object with curly braces {}, setting properties as key-value pairs. [Faster, Safer, Highly readable and takes less space in code.]

  - Keys are always converted to strings (except symbols).

  <!-- 
      let obj = {
          name: "Dev",
          age: 23,
          job: "Developer"
      };
   -->


   - Note: Factory vs. Constructor: Using 'literals' is often part of a Factory Pattern, whereas 'new keyword' is associated with Constructor Patterns or Classes.

  -----------------------------------

  ## Basic Operations on JavaScript Objects

  1. 2 ways to access object’s properties using either 'dot notation' or 'bracket notation'.

    - Dot Notation: Simple and easy, works when the property name is a valid identifier.
    - Bracket Notation: Useful when accessing properties dynamically or when the property name includes special characters or spaces.

  <!-- 
    let mySbl = Symbol('Key');

    let obj = { 
      name: "Dev", 
      age: 23,
      "full name": 'Dev S',
      [mySbl]: 'SecKey' // symbol as a key represent in bracket
    };

    // Using Dot Notation
    console.log(obj.name);
    console.log(obj.age);

    // Using Bracket Notation
    console.log(obj["full name"]);

    console.log(obj[mySbl]); // no quotes for symbol
  -->

  - Imp: Certain properties like 'key' which have space in between or 'symbols' in JS (ES6) cannot be accessible through dot notations. Need to use bracket notation to access them.

  
  2. Modify, add, remove Object Properties
  <!-- 
    let obj = { name: "Dev", age: 22 };
    console.log(obj);

    obj.age = 28; // Modify age property
    obj.height = '5ft 11inch'; // Add new property
    console.log(obj);

    delete obj.age; // Remove property
    console.log(obj);
   -->


  3. Check Property Exists: We can check if an object contains a particular property using the 'in' operator or 'hasOwnProperty()' method.

    - in Operator: Checks if the property exists in the object or its prototype chain.
    - hasOwnProperty(): Only checks properties owned directly by the object.

  <!-- 
    console.log("age" in obj); // false ... because we removed the age property in above code

    console.log(obj.hasOwnProperty("height")); // true
  -->


  4. Iterating Through Object Properties: using for...in loop
  <!-- 
    for(let key in obj) {
      console.log(key + ": " + obj[key]);
    }
   -->

   Note: In JavaScript, Symbols are intentionally designed to be "invisible" to most standard ways of viewing or looping through an object.

   - Why Symbols "don't print" : Symbols are hidden by default to allow developers to add "private" or "metadata" properties to objects

   - To "see" Symbols : Print or access the symbols in an object, use specific methods:

      1. Object.getOwnPropertySymbols(obj): This is the most direct way to get an array of all symbolic keys on an object.

      2. Reflect.ownKeys(obj): This returns all keys, including both standard string keys and hidden symbols.

  
  5. Merging Objects : Objects can be merged using 'Object.assign()' or the spread syntax { ...obj1, ...obj2 }.

  <!-- 
      let obj1 = { name: "Dev" };
      let obj2 = { age: 23};

      let obj3 = { ...obj1, ...obj2 };
      console.log(obj3);
   -->

  6. Object Length : We can find the number of properties in an object using 'Object.keys(obj).length'

--------------------------------------

  - Imp: Freeze Method: standard way to make an object truly immutable. Once an object is frozen, you cannot add, remove, or change its properties.

    1. Object.freeze(obj), the object becomes "read-only":
    2. No New Properties: You cannot add new keys.
    3. No Deletions: You cannot delete existing keys.
    4. No Modifications: You cannot change the values of existing keys.
    5. Non-Configurable: You cannot change the property

    <!-- 
      const user = {
        name: "Alice",
        role: "Admin"
      };

      Object.freeze(user);

      user.name = "Bob";  // Fails silently (or throws TypeError in Strict Mode)
     -->

    
    Note: Shallow" Limitation (Critical Interview Point)
      
      - Object.freeze() is shallow. If the object contains another object (a nested object), the inner object is not frozen.

      - To fix this, you must implement a "Deep Freeze" by recursively freezing every nested object.

      - Functional Programming: It helps enforce the rule that data should not be changed (immutability), which is a core concept in libraries like Redux or React.


  ## Map Data Structure vs Obj:

    1. Map : Stores key-value pairs and allows keys of any type (including objects).

      Obj : Stores key-value pairs but keys are usually strings or symbols.

    2. Map : Maintains the order of insertion.
       
       Obj : Does not guarantee key order.

    3. Map : Has a built-in size property to get the number of entries.
       
       Obj : No built-in property for size.

    4. Map : Better performance for frequent additions/removals of properties.
       
       Obj : May be slower for frequent additions/removals of properties.

    5. Map : Can use any value (primitive or object) as a key.
       
       Obj : Keys are always converted to strings (except symbols).

--------------------------------------
  
  * Enumerable vs Non-Enumerable Properties
  
  - In JavaScript, Enumerability is a property attribute (a hidden flag) that determines whether a property "shows up" when you try to list or loop through an object's keys.

  1. Enumerable Properties : These are the standard, "visible" properties of an object. 
    
    - Behavior: They appear in for...in loops, Object.keys(), Object.values(), and are included when using the spread operator (...) or JSON.stringify().

    - Default: Any property you create via simple assignment (e.g., obj.name = "Alice") is enumerable by default. 

  2. Non-Enumerable Properties : These are "hidden" properties that exist on the object but are skipped by most iteration methods. 

    - Behavior: They do not show up in for...in loops or Object.keys().
    - Still Accessible: They are not private; we can still access them directly if know the key name (e.g., obj.hiddenProperty).


  Note: Properties can be marked as enumerable or non-enumerable using Object.defineProperty().
