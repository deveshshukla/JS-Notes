'use strict';

/**
    Getters and Setters are special methods in classes that control how properties are accessed and modified:

    Getter (get): Allows you to read a property with a function. Lets you control/transform what value is returned.

    Setter (set): Allows you to set a property with a function. Lets you validate or process data before storing it.
 */

class User {
  constructor(password) {
    this._password = password; // private convention
  }

  // Getter - access like: user.password (no parentheses)
  get password() {
    return this._password.length > 0 ? '****' : ''; // hide actual password
  }

  // Setter - assign like: user.password = 'newPass'
  set password(newPass) {
    if (newPass.length >= 6) {
      this._password = newPass;
    } else {
      console.log('Password too short!');
    }
  }
}

let user = new User('abc123');
console.log(user.password); // '****' (getter called)
user.password = 'newPass123'; // setter called with validation