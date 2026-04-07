/**
 * ## Event Delegation in JavaScript

    Event Delegation is a pattern used to handle events efficiently by attaching a single event listener to a parent element instead of adding listeners to multiple similar child elements, and then identifying the actual source of the event using the 'event.target' property.

    - Reduces the number of event listeners.
    - Improves performance and memory usage.
    - Uses event bubbling to capture events.
    - Ideal for dynamically added elements.
 */

const customUI1 = document.createElement('ul');

function responding() {
    console.log('Responding')
}

for (var i = 1; i <= 10; i++) {
    const newElement = document.createElement('li');
    newElement.textContent = "This is line " + i;
    customUI1.appendChild(newElement);
}
customUI1.addEventListener('click', responding);

/**
    With this approach, a single event listener is attached to the parent <ul> element, and event delegation is used to handle clicks on individual <li> elements efficiently.

    - Uses one event listener on the parent <ul> instead of multiple listeners on each <li>.
    - Identifies the clicked <li> using the event.target property.


    ## Steps of Event Delegation
    The click event travels from the parent to the child and back up through the DOM, allowing a single listener on the parent element to detect and handle interactions with specific child elements using event.target.

    - <ul> element is clicked.
    - The event goes in the capturing phase.
    - It reaches the target (<li> in our case).
    - It switches to the bubbling phase.
    - When it hits the <ul> element, it runs the event listener.
    - Inside the listener function event.target is the element that was clicked.
    - Event.target provides us access to the <li> element that was clicked.



    Note: The .nodeName property of the .target allows us to identify a specific node. If our parent element contains more than one child element then we can identify specific elements by using the .nodeName property.
 */

const customUI2 = document.createElement('ul');

function responding(evt) {
    if (evt.target.nodeName === 'li')
        console.log('Responding')
}

for (var i = 1; i <= 10; i++) {
    const newElement = document.createElement('li');
    newElement.textContent = "This is line " + i;
    customUI2.appendChild(newElement);
}

customUI2.addEventListener('click', responding);