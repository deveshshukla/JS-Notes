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
