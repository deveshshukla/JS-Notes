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
    // console.log(`${key} : ${obj[key]}`);
}


//------ Removing property from ------ 
delete obj.age;
console.log(obj);


//------ Check obj has own property, not Inherited ------
// console.log("age" in obj); // false
// console.log(obj.hasOwnProperty("full name")); // true


//------ Print Symbols ------
// console.log(Object.getOwnPropertySymbols(obj)); // only symbols 
// console.log(Reflect.ownKeys(obj)); // All properties incl. symbols


//------ Merger Objects ------
let obj1 = {city: "Mumbai"};

let obj2 = Object.assign(obj, obj1); // One way
// console.log(obj2);

obj2.state = 'Maharashtra';

let obj3 = {...obj, ...obj1, ...obj2}; // Another way
// console.log(obj3);


//------ Find length of Obj ------
// console.log(`${Object.keys(obj3)} : ${Object.keys(obj3).length}`);


//------ Obj enumerable or non-enumerable ------

Object.defineProperty(obj, "id", {
    value: 123,
    enumerable: false // This makes 'id' non-enumerable
});

// console.log(Object.keys(obj)); // id is hidden


//------ Iterate over a JavaScript object ------

let approach1 = () => {
    console.log('\n[Approach 1]: Using for...in Loop');

    for (let objKey in obj3) {
        console.log(`${objKey} : ${obj3[objKey]}`);
    }
}

let approach2 = () => {
    console.log('\n[Approach 2]: Using Object.entries() and map()');
    // Object.entries() returns an array of an object’s key-value pairs. 
    // map() to access each pair, where index 0 is the key and index 1 is the value.

    console.log(Object.entries(obj3));

    Object.entries(obj3).map(entry => {
        let key = entry[0], value = entry[1];
        console.log(`${key} : ${value}`);
    });
}

let approach3 = () => {
    console.log('\n[Approach 3]: Using forEach() and object.keys() Method');
    // object.keys() Method returns an array of keys of the object. 
    // forEach() method is an array method that allows you to iterate over each element in the array.

    console.log(Object.keys(obj3));

    Object.keys(obj3).forEach(k => {
        console.log(`${k} : ${obj3[k]}`);
    })
}


//---- Iterate Multiple Nested Object ----

let nestedObj = () => {
    console.log();
    console.log('Iterate Nested Object');

    const companyStructure = {
        companyName: "TechCorp",
        department: { 
            deptName: "Engineering",
            team: { 
                teamName: "Frontend",
                leadDev: { 
                    Developer_name: "Dev",
                    id: 101
                }
            }
        }
    };

    // 1. Define a recursive function
    function iterateNested(currentObj) {
        
        // Loop through all keys in the current object
        for (let key in currentObj) {
            
            const value = currentObj[key];

            // 2. Check if the value is an object (and not null)
            if (typeof value === 'object' && value !== null) {
                
                // 3. RECURSION: Call the function again for this nested object
                iterateNested(value); 
                
            } else {
                // It's a normal value (string, number, etc.), just print it
                console.log(`${key} : ${value}`);
            }
        }
    }

    iterateNested(companyStructure);
}


//------ Handel object & arrays directly ------

function check () {
    console.log('\n---- Handel object & arrays directly ----');

    function handelObj(anyObj) {
        console.log(`Username: ${anyObj.username}, Password: ${anyObj.passwd}`);
    }

    // Direct pass obj
    handelObj({
        username: 'Dev',
        passwd: 123456
    });


    function sumArray(anyArray) {
        return anyArray.reduce((a,b) => a+b, 0);
    }

    // Direct pass arr
    console.log(sumArray([1,2,3,4,5])); // 15

}


//------ JS Data Structures ------

let jsDS = () => {
    console.log('\n---- Obj vs Map Data Structures ----');

    // 1st: Map : Unique key's & remember the order of insertion, key type will be any.
    let map = new Map();
    map.set('Name', 'Dev');
    map.set('EmpID', 70);
    map.set('Dept', 'SWE');

    // Key 'Name' value updated, don't allow duplicate key's
    map.set('Name', 'David'); 

    console.log('\n-- for...of loop : Gives "Value" only');
    for (let [key, val] of map) { 
        console.log(`${key} --> ${val}`);
    }


    // 2nd: Object : Key type only string & symbol not other type.
    let obj = {
        'Name' : 'Smith',
        'EmpID' : 9,
        'Dept' : 'Sales'
    }

    console.log('\n-- for...in loop : Gives "Key" only --');
    for (let key in obj) { 
        console.log(`${key} --> ${obj[key]}`);
    }


    
    console.log('\n---- Array Data Structures ----');

    let arr = ['Ind', 'JAPAN', 'Russia'];

    console.log('\n forEach loop');
    arr.forEach ((val, idx) => console.log(`${idx} : ${val}`));

    console.log('\n for...in loop : gives only key');
    for (let idx in arr) {
        console.log(`${idx} : ${arr[idx]}`);
    }

    console.log('\n for...of loop : gives only value');
    for (let val of arr) {
        console.log(`${arr.indexOf(val)} : ${val}`);
    }
}

let objInArray = () => {
    console.log('\n---- Iterate Obj in Array (JSON) format ----');

    let JsonResponse = [
        {
            'state' : 'Mumbai',
            'temp' : '34 Deg'
        },
        {
            'state' : 'J&K',
            'temp' : '12 Deg'
        },
        {
            'state' : 'Chennai',
            'temp' : '27 Deg'
        }
    ]

    JsonResponse.forEach( (item, idx) => {
        console.log(`${idx} : ${item.state} temp. is ${item.temp} celsius`);
    })
}

objInArray();
