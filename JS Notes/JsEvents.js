/**
  ## JavaScript Events
  JavaScript Events are actions or occurrences that happen in the browser. They can be triggered by various user interactions or by the browser itself.

  Event Types:
    Mouse Events: click, dblclick, mousemove, mouseover, mouseout
    Keyboard Events: keydown, keypress, keyup
    Form Events: submit, change, focus, blur
    Window Events: load, resize, scroll

  ## JavaScript Event Handlers
    Event handlers can be used to handle and verify user input, user actions, and browser actions.

    1. Inline HTML Handlers: onclick="alert('Button clicked!')"

    2. addEventListener() (Preferred)

  ## Event Propagation
    JavaScript events propagate in two phases:

    1. Capturing Phase: Event travels from the root to the target element.
    2. Bubbling Phase: Event travels from the target element back to the root.
 */

    document.querySelector("div").addEventListener("click", () => {
        console.log("Div clicked");
    }, true); // Capturing phase

    // Setting 'true' in addEventListener makes it capture events during the capturing phase.


    button.addEventListener("click", (e) => {
        console.log("Button clicked");
        e.stopPropagation(); // Stops propagation
    });

    // stopPropagation() halts further propagation.


// ## Event Delegation
// Event delegation allows you to handle events efficiently by attaching a single listener to a parent element.

// 'ul' is parent here & 'li' elements denoted with 'LI' tag are children.

{/* <ul id="lists">
    <li>Interactive Item 1</li>
    <li>Interactive Item 2</li>
    <li>Interactive Item 3</li>
</ul> */}

let ul = document.querySelector("#lists");

ul.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.style.backgroundColor = "yellow";
    }
});

// Preventing Default Behavior
// Certain elements have default actions (e.g., links navigating to URLs). Use preventDefault() to override them.

{/* <h1><a href="www.google.co.in" target="_blank">Link</a></h1> */}
document.querySelector("a").addEventListener("click", (e) => {
    e.preventDefault(); // preventDefault() stops the link from navigating.
    console.log("Link click prevented");
});

// ============================================================

/*
  ## Event Loop in JavaScript
  The event loop is an important concept in JavaScript that handel's asynchronous codes also known as callback codes (calls back after certain time or after server response). Since JavaScript is single-threaded, it uses the event loop to manage the execution of multiple tasks without blocking the main thread.

  These asynchronous/ callback codes are not native in JS they are called through web api, but now nodejs also support this out of browser.
  Both browsers and Node.js use an Event Loop and a background library (like libuv in Node) to handle these asynchronous tasks outside the main JS thread.
 */

console.log("Start");

// 'setTimeout & setInterval' are the asynchronous code which is register as a callback in normal asynchronous execution queue which also known as task queue, and if microtask queue is empty then they sent to call stack in a JS execution engine.

setTimeout(() => {
    console.log("setTimeout Callback");
}, 0);

// 'Promise's (fetch)' get Priority Execution they placed in high priority queues/ microtask queue and executes before the callback queue.
Promise.resolve().then(() => { 
    console.log("Promise Resolved");
});

console.log("End");

// output: Start --> End --> Promise Resolved --> setTimeout Callback

/** Note:
  JavaScript executes code synchronously in a single thread. However, it can handle asynchronous operations such as fetching data from an API, handling user events, or setting timeouts without pausing execution. This is made possible by the event loop.
 */


/**
 * Common things to know:
 * 
 * 1. 'setTimeout' doesn’t always run exactly after the specified time.
 * Example: 
  `setTimeout(() => console.log("Inside setTimeout"), 1000); // run after 1sec.
  for (let i = 0; i < 1e9; i++) {} // but this 'Long loop' avoid this` 

  - A blocking loop keeps the Call Stack busy, delaying setTimeout execution.

  2. Priority of Microtasks Over Callbacks
  - Microtasks run before setTimeout, even if set with 0ms delay.
  - The event loop first checks the microtask queue before the callback queue.
  - The microtask queue has higher priority than the callback queue in JavaScript.

  3. Callback Hell
  - Too many nested callbacks make code unreadable.
  - Callback Hell, making it hard to read and maintain. Use Promises or async/await instead.
 */