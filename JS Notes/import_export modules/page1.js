// Imp: modules are by default run on a 'strict' mode.

// ++++====++++ Importing module ++++====++++

/*
    Note: All import statement are by default hoisted to the top, that's why imports are defined at top of the file.

    Imp: Imports are not just copies of export, they are live connection. Means they will change dynamically as well.

    Remember: This import only able to access the 'global scope' not any function, or variable, which are by default 'scoped' elements in that particular module where they are created.

*/
import './page2.js';
console.log('This is page1');

// import specific individual 'scoped' elements
// We can also change name of a imported item
import { a as num1, b as num2, add } from './page2.js';
console.log(`a:${num1} + b:${num2} = ${add(num1, num2)}`);

// Default import: we import default module & give name here anything and use.
import mul from './page3.js';
console.log(`Multiplication: ${mul(35, 2)}`);