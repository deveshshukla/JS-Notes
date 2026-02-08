'use strict';

class User{
  constructor(username) {
    this.username = username;
  }

  // Imp: 'Static' keyword is used to block certain function or functionality for child objects which are instantiate from it. (Is method ka access har us object ko nahi dena chahte jo is object se instantiate hua he.)

  static api() {
    return `Random-API number`;
  }

}

// Note: 'extends' keyword inherit properties of parent class.
class Teacher extends User{
  constructor(username, email, password) {
    // Imp: Just like 'call' keyword, the 'super' keyword is more advance, it automatically call and provide 'this' keyword itself to get reference.
    super(username);

    this.email = email;
    this.password = password;
  }
}

let user3 = new Teacher('Dev', 'dev@gmail.com', 'Dev@123');
console.log(user3);

// Teacher class extended the User class, he can access all properties of it but cannot access 'static' methods because they are 'protect' by parent class. 
console.log(user3.api);