/**
 * ## Event Bubbling in JavaScript

    Event bubbling in JavaScript is a mechanism where an event triggered on a child element propagates upward through its parent element in the DOM. It allows parent elements to respond to events triggered by their child elements.

    - Propagation Direction: In event bubbling, the event starts at the target element and propagates upward through its parent elements to the root of the DOM.
    
    - Default Behavior: Event bubbling is enabled by default in JavaScript.
    
    - Event Listeners: If multiple event listeners are attached in the bubbling phase, they are executed in sequence, starting from the innermost target element.


    ## Working of Event Bubbling

    1. Event Triggering: The click event is triggered on the child element (button), initiating the event propagation.

    2. Event Capturing: In the capturing phase, the event propagates from the root of the DOM down to the target (child).

    3. Event Bubbling: After reaching the target element (child), the event enters the bubbling phase, propagating back up through the DOM tree to the parent (parent).

    4. Listener Behavior: Event listeners are attached to both parent and child elements using addEventListener. By default, these listeners respond during the bubbling phase unless the capture option is set to true.

    5. Execution Order: When the button is clicked, the child listener executes first (console.log("Child")), followed by the parent listener (console.log("Parent")) as the event bubbles up.
 */
// Example: 
        {/* <div class="grandparent" id="one">
            Grandparent
            <div class="parent" id="two">
                Parent
                <div class="child" id="three">
                    Child
                </div>
            </div>
        </div> */}
        
        let grandparent=document.getElementById('one')
        let parent=document.getElementById('two')
        let child=document.getElementById('three')

        grandparent.addEventListener('click',(e) => {
            console.log("Grandparent Clicked")
        });

        parent.addEventListener('click',(e) => {
            console.log("Parent Clicked")
        });

        child.addEventListener('click',(e) => {
            console.log("Child Clicked")
        });

// Output: When we click child element it will call both clicked child element and there parent element also. Like propagate upward like a bubble.


// Imp: To stop event bubbling, use 'e.stopPropagation()' method in the event handler. This prevents the event from propagating to parent elements, so only the target element's event listener is triggered.

/**
 * Example:
    
    child.addEventListener('click',function(e){
        e.stopPropagation()
        console.log("Child Clicked")
    })
 */

/**
 * ## Use Cases of Event Bubbling
    
    Delegated Event Handling: Instead of adding event listeners to multiple child elements, attach one to their parent and handle the events as they bubble up.

    grandparent.addEventListener('click', (e) => {
        console.log('Clicked:', e.target.id);
    });
 */

/**
 * ## Event Bubbling:
   
   1. The event starts at the target element and propagates upward to the root of the DOM.
   2. Event listeners are attached to handle events during the bubbling phase by default.
   3. Often used when we want parent elements to respond to events triggered on child elements.


   ## Event Capturing:
   
   1. The event starts at the root of the DOM and propagates downward to the target element.
   2. To handle events in the capturing phase, explicitly set capture option to 'true' in addEventListener.
   3. Useful when we want parent elements to handle the event before it reaches the target element.
 */