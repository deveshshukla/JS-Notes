'use strict';

let myDate = new Date();
console.log(myDate.toString());

console.log('---------------------------');

let currentDate = myDate.getDate();
let currentMonth = myDate.getMonth(); // month start: 0 to 11
let currentYr = myDate.getFullYear();

// Map day number to day name
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let currentDay = days[myDate.getDay()];

console.log(`Today's date is: ${currentDate}/${currentMonth+1}/${currentYr} ${currentDay}`);

console.log('---------------------------');

// Insert date manually
let myDOB = new Date(1997, 6, 7, 19,0,0);
console.log(`${myDOB.toString()} - 24hr Format`);

console.log('---------------------------');

console.log(myDOB.toLocaleString());
console.log(myDOB.toLocaleDateString());
console.log(myDOB.toLocaleTimeString());

console.log('---------------------------');

let timeStamp = Date.now();
console.log(timeStamp); //in millisecond

//To convert in seconds : asked in interview
console.log(Math.floor(timeStamp/1000)); //in seconds

console.log('---------------------------');

// In Date obj we can manipulate data while assigning object inside.

myDate.toLocaleString('default', {
    weekday: "long",
    timeZone: "IST"
});

console.log(myDate);