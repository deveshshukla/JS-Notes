'use strict';

const { values } = require("lodash");

// Note: 'Object.getOwnPropertyDescriptor()' gives 'object key' config. details. like writable (change value), enumerable (Iterate over value), configurable ()

// console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));
// console.log(Object.getOwnPropertyDescriptor(Math, 'random'));

const Dev = {
    height: '5ft 11inch',
    color: 'white',
    bloodGrp: 'O -ve',

    fullDetail: function() {
        console.log(`Person height is ${this.height},\n he or she color is ${this.color},\n his blood grp is ${this.bloodGrp}.`);

        return " "; // to avoid undefined
    }
}

// 'Object-Name' & 'Obj-Key' which prop. needs to see
console.log(Object.getOwnPropertyDescriptor(Dev, 'height'));
console.log(Object.getOwnPropertyDescriptor(Dev, 'fullDetail'));

// Imp: We can change our 'own' object: key's properties and put some restriction.

// 'object-name' & 'key' which prop. needs to change
Object.defineProperty(Dev, 'color', {
    writable: false,
    enumerable: false
});

console.log(Object.getOwnPropertyDescriptor(Dev, 'color'));

// 'enumerable' is false, If we iterate over obj we are not able to see color because we not allowed this.

for (let [key, value] of Object.entries(Dev)) {
    
    // To avoid Bug: when we iterate over obj.
    if (typeof value !== 'function') 
        console.log(`${key} : ${value}`);
}

// Try to change property
Dev.color = 'Black'; // TypeError: Cannot assign to read only property