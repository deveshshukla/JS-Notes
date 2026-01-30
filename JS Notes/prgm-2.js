'use strict';

// Null -->
function temp(t) {
    let temperature;

    if(t != null) {
        temperature = t;
        console.log(`Temperature is ${temperature}deg Celsius.`);
    }else {
        temperature = null;
        console.log(`Temp = ${temperature}, Error to fetch temperature.`);
    }
}

// temp();

// Undefined -->
let isLogged;
// console.log(isLogged); 

// Symbol -->
const id_1 = Symbol('A123');
const id_2 = Symbol('A123');
// console.log(id_1 === id_2);