'use strict';

// Stack Memory (Primitive)

let stackFun = function() {
    let myName = 'Devesh';

    let myFriendName = myName; //(Copy) of myName is added here.
    console.log(myFriendName);

    myFriendName = 'Dhiraj';

    console.log(myName); // Original value is intact.
    console.log(myFriendName); // Copy value is changed to new value.
}
stackFun()



// Heap Memory (Non-Primitive)

let heapFun = function() {
    let user1 = {
        userName: 'Devesh',
        userPass: 123
    }
    console.table(user1);

    let user2 = user1; // Reference value of a user1 is given.
    user2.userName = 'Dhiraj';
    user2.userPass = 321;

    console.table(user2); 
    console.table(user1); // Original value is also changed.
}

heapFun();

console.log(typeof Symbol());