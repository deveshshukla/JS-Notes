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