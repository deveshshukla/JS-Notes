// Imp: modules are by default run on a 'strict' mode.

// ++++====++++ Exporting module ++++====++++

console.log('This is page2 exported to page1');

/**
    variables or function declared in this modules are scoped variable or functions thats why they are not by default exported.

    Remember: Exports always defined on top level code. Eg: if code is inside the if-else or under anything it will not work.
 */

// Note: This is 'Named Export'

export let a = 10;

let b = 20;
const calc = (a,b) => a+b;

// We can export this also, or by writing export in front (like var:a)
// We can also change name of a exported item
export { b, calc as add }; 