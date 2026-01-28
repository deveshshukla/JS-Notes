'use strict';

/*
================================================================================
                         JAVASCRIPT PROMISES - NOTES
================================================================================

WHAT IS A PROMISE?
A Promise is an object in JavaScript that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It's a way to handle asynchronous code in a cleaner and more manageable way.

PROMISE STATES:
1. Pending: Initial state, operation hasn't completed yet
2. Fulfilled: Operation completed successfully, and a value is available
3. Rejected: Operation failed, and an error/reason is available

PROMISE LIFECYCLE:
Pending → Fulfilled (resolved with value)
Pending → Rejected (rejected with reason/error)

Note: Once a promise settles (either fulfilled or rejected), it cannot change states.
This is called "immutability of settled promises".

================================================================================
                    INTERVIEW STYLE Q&A ON PROMISES
================================================================================

Q1: What are the three states of a promise?
A1: 
   - Pending: Initial state before the async operation completes
   - Fulfilled/Resolved: The async operation completed successfully
   - Rejected: The async operation failed

Q2: What is the difference between .then() and .catch()?
A2: 
   - .then() handles both fulfilled and rejected states: .then(success, failure)
   - .catch() only handles rejected state (error handling)
   - .catch() is essentially .then(undefined, rejection)
   - Use .catch() for cleaner error handling

Q3: Can a promise change from fulfilled to rejected?
A3: 
   No. Once a promise settles (becomes fulfilled or rejected), its state is immutable.
   It cannot change from one settled state to another.

Q4: What is a promise chain and why is it useful?
A4: 
   A promise chain is when you call multiple .then() calls sequentially.
   Each .then() returns a new promise, allowing you to:
   - Transform data step by step
   - Handle errors at any point in the chain
   - Avoid callback hell (pyramid of doom)

Q5: What is Promise.all() and when would you use it?
A5: 
   Promise.all() takes an array of promises and returns a single promise that:
   - Resolves with an array of all resolved values (if all succeed)
   - Rejects if ANY promise in the array rejects
   Use it when you need ALL promises to complete successfully

Q6: What is Promise.race() and how is it different from Promise.all()?
A6: 
   Promise.race() returns a promise that settles with the first promise to settle.
   Difference from Promise.all():
   - Promise.all() waits for ALL promises to fulfill
   - Promise.race() returns as soon as the FIRST promise settles (resolves or rejects)
   Use it for timeout handling or taking the first successful result

Q7: What is Promise.allSettled()?
A7: 
   Promise.allSettled() waits for ALL promises to settle (resolve or reject).
   It always resolves with an array of results showing status and value/reason.
   Unlike Promise.all(), it doesn't reject if some promises fail.

Q8: How do you handle errors in a promise chain?
A8: 
   Methods to handle errors:
   1. .catch() at the end of the chain
   2. Try-catch inside an async/await function
   3. Second parameter of .then(): .then(success, error)
   Best practice: Use .catch() or async/await with try-catch

Q9: What is the difference between promise and callback?
A9: 
   Callbacks:
   - Function passed as argument to another function
   - Can lead to callback hell
   - Limited error handling
   
   Promises:
   - Better readability with .then() chaining
   - Better error handling with .catch()
   - Avoid nested callbacks
   - More elegant and maintainable code

Q10: What is async/await and how does it relate to promises?
A10: 
   async/await is syntactic sugar built on top of promises.
   - async function always returns a promise
   - await pauses execution until a promise settles
   - Allows writing asynchronous code that looks synchronous
   - Makes error handling easier with try-catch blocks
   - It's the modern way to work with promises

================================================================================
                         PRACTICAL NOTES
================================================================================

BEST PRACTICES:
1. Always return promises from .then() blocks for proper chaining
2. Use .catch() at the end of promise chains for error handling
3. Don't mix callbacks and promises - choose one approach
4. Use async/await for cleaner, more readable code
5. Avoid nesting .then() calls - use promise chaining instead
6. Remember promise chains execute in order

COMMON MISTAKES:
1. Forgetting to return a value in .then()
2. Not handling rejected promises
3. Creating unnecessary promise wrappers (promise constructor anti-pattern)
4. Using async/await without try-catch for error handling

================================================================================
*/


// Example: One way to write promise
let promiseOne = new Promise((resolve, reject) => {
    // We manage async task here
    // We can call db, network, can do cryptography etc.

    setTimeout(() => {
        console.log('Async-1 task is completed');

        resolve(); // use to connect with '.then()' method
    }, 1000);
});

promiseOne.then(() => {
    console.log('PromiseOne Consumed\n');
});


// Example: Second way to write promise
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async-2 task is completed');

        resolve(); // call .then method to inform abt task status
    }, 1000);
}).then(() => {
    console.log('PromiseTwo Consumed\n');
});


// Example: 3 - How to send data from promise, which handel in .then()
let promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {

        // Send DB or other details to .then()
        // contains data in any type arr, obj etc.
        resolve({username: 'Devshukla', userId: 'Dev@07'});

    }, 1000);
});

promiseThree.then((userdata) => {
    console.log(`Username: ${userdata.username}`);
    console.log(`User ID: ${userdata.userId}\n`);
});


// Example: 4- reject() & .catch() to handel error & 'Chaining'
let promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let err = true;

        if (!err) {
            resolve({username: 'Avi', userId: 'Avi@03'});
        }else
            reject('Promise-4 Error: Something went wrong!');

    }, 1000);
});

promiseFour.then((userdata) => {
    // This return data goes to another .then() method 
    // described below, known as 'chaining'
    return userdata.userId;
}).then((userid) => {
    console.log(`User ID: ${userid}`);
}).catch((err) => {
    console.log(err,'\n');
});

// Example: 5- 'async', 'await' in place of .then()
let promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let err = true;

        if (!err) {
            resolve({username: 'David', userId: 'david@02'});
        }else
            reject('Promise-5 Error to fetch data from DB');

    }, 1000);
});

async function workOnPromiseFive() {
    // try catch to handel error
    try {
        const result = await promiseFive;
        console.log(result,'\n');
    } catch (error) {
        console.log(error,'\n');
    }
}

workOnPromiseFive();

/*
================================================================================
              ASYNC/AWAIT vs .THEN() - SIMPLE EXPLANATION
================================================================================

WHAT IS ASYNC/AWAIT?
async/await is a modern way to handle promises in JavaScript. It allows you to 
write asynchronous code that looks and behaves like synchronous code, making it 
easier to read and understand.

WHAT DOES ASYNC DO?
- The 'async' keyword makes a function always return a promise
- It enables the use of 'await' inside the function
- If you return a value, it wraps it in a resolved promise

WHAT DOES AWAIT DO?
- The 'await' keyword pauses execution until a promise settles
- It waits for the promise to resolve and extracts the value
- It can only be used inside an async function
- Makes asynchronous code look synchronous

================================================================================
              COMPARISON: ASYNC/AWAIT vs .THEN()
================================================================================

PERFORMANCE: Both perform similarly - async/await is compiled to .then() under the hood.

BROWSER/NODE SUPPORT:
   
   .then() approach:
   - Supported in all modern browsers and Node.js versions
   - Older support available
   
   async/await approach:
   - Works in modern browsers and Node.js 7.6+
   - May need transpiler for older environments
*/


// -------------------- Practice with real API --------------------

// Using async await --->
async function practiceAPI() {
    try {
        const res = await fetch('https://api.freeapi.app/api/v1/public/quotes/quote/random');
        const result = await res.json();
        
        console.log(`Author: ${result.data.author}`);
        console.log(`Quote: ${result.data.content}`);
        console.log(`Tags: ${result.data.tags}\n`);

        console.log(result,'\n');


    } catch (error) {
        console.log(`Error: ${error}\n`);
    }
}
// practiceAPI();


// Using .then() --->
fetch('https://api.freeapi.app/api/v1/public/quotes/quote/random')
.then((response) => {
    return response.json();

}).then((result) => {
    console.log(`Author: ${result.data.author}`);
    console.log(`Quote: ${result.data.content}`);
    console.log(`Tags: ${result.data.tags}\n`);

}).catch((Error) => console.log('Err: ',Error));