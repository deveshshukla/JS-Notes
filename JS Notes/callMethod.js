'use strict';

// 'call' keyword is used to explicitly get another function things to a particular func. from where it is called.
// 'this' keyword ko pass karte he call method se, taki wo refernce hold kar sake jitne bhi parameters he uske.
// Q ki ek baar function call hone ke baad wo call stack(stack memory) ya execution context se bahar ho jati he.
// So uske jo parameters he wo bhi bahar hojayenge, so usi ko hold karne ke liye 'this' keyword pass karte he.

// Example: -->

function setUsername(username) {
    this.username = username;
}

function createUser(userName, email, password) {
    // calledFuncName.call(this(current func. context), parameter)
    setUsername.call(this, userName);

    this.email = email;
    this.password = password;
}

let user1 = new createUser('Dev', 'dev@gmail.com', 'Dev@123');
console.log(user1);

let user2 = new createUser('David', 'david@gmail.com', 'David@333');
console.log(user2);