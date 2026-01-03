'use strict';

let obj = {
    name: 'Dev',
    age: 23
};

//------ adding new property in obj ------
obj['full name'] = 'Dev Shukla';


//------ adding symbol in obj ------
let mySbl = Symbol('key');
obj[mySbl] = 'SecKey';


//------ Iterate through object properties ------
for (let key in obj) {
    console.log(`${key} : ${obj[key]}`);
}


//------ Removing property from ------ 
delete obj.age;
console.log(obj);


//------ Check property exist in object ------
console.log("age" in obj); // false
console.log(obj.hasOwnProperty("full name")); // true


//------ Print Symbols ------
console.log(Object.getOwnPropertySymbols(obj)); // only symbols 
console.log(Reflect.ownKeys(obj)); // All properties incl. symbols


//------ Merger Objects ------
let obj1 = {city: "Mumbai"};

let obj2 = Object.assign(obj, obj1); // One way
console.log(obj2);

obj2.state = 'Maharashtra';

let obj3 = {...obj, ...obj1, ...obj2}; // Another way
console.log(obj3);


//------ Find length of Obj ------
console.log(`${Object.keys(obj3)} : ${Object.keys(obj3).length}`);


//------ Obj enumerable or non-enumerable ------

Object.defineProperty(obj, "id", {
    value: 123,
    enumerable: false // This makes 'id' non-enumerable
});

console.log(Object.keys(obj)); // id is hidden


//------ Iterate over a JavaScript object ------

let approach1 = () => {
    console.log();
    console.log('[Approach 1]: Using for...in Loop');

    for (let objKey in obj3) {
        console.log(`${objKey} : ${obj3[objKey]}`);
    }
}

let approach2 = () => {
    console.log();
    console.log('[Approach 2]: Using Object.entries() and map()');
    // Object.entries() returns an array of an object’s key-value pairs. 
    // map() to access each pair, where index 0 is the key and index 1 is the value.

    console.log(Object.entries(obj3));

    Object.entries(obj3).map(entry => {
        let key = entry[0], value = entry[1];
        console.log(`${key} : ${value}`);
    });
}

let approach3 = () => {
    console.log();
    console.log('[Approach 3]: Using forEach() and object.keys() Method');
    // object.keys() Method returns an array of keys of the object. 
    // forEach() method is an array method that allows you to iterate over each element in the array.

    console.log(Object.keys(obj3));

    Object.keys(obj3).forEach(k => {
        console.log(`${k} : ${obj3[k]}`);
    })
}
