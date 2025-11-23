'use strict';

let num = 33.2343;

// 1st: toFixed
// console.log(num.toFixed(2));
//Output: 33.23

// 2nd: toPrecision
// console.log(num.toPrecision(2));
//Output: 33

// 3rd: Formate
let money = 120000000;
// console.log(money.toLocaleString('en-IN'));
//Output: 12,00,00,000

// 4th: Random Method

// console.log(Math.floor((Math.random()*10) + 1));

/*
    1. Math.floor : removes decimal values
    2. Math.random : generate a random num from 0 to 0.999...
    3. Math.random()*10 + 1: Keeps upper limit till 10
*/

// Random no. in given range:
let min = 10;
let max = 20;
console.log(Math.floor(Math.random() * (max-min + 1) + min));
