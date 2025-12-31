'use strict';

let obj = {
    name: 'Dev',
    age: 23
};

// adding new property in obj
obj['full name'] = 'Dev Shukla';

// adding symbol in obj
let mySbl = Symbol('key');
obj[mySbl] = 'SecKey';

// Iterate through object properties
for (let key in obj) {
    console.log(`${key} : ${obj[key]}`);
}

// Removing property from 
delete obj.age;
console.log(obj);

// Check property exist in object
console.log("age" in obj); // false
console.log(obj.hasOwnProperty("full name")); // true
