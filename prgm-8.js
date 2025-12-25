'use strict'

class User {
  constructor(name = "Guest", role = "Viewer") {
    this.name = name;
    this.role = role;
  }
}

const user = new User("Dev", "Admin");
console.log(user.name);
console.log(user.role);

const anon = new User();
console.log(anon.name);
console.log(anon.role);

// Passing Argument as a 'Object'
class Car {
  constructor({ brand, model, year = 2025 }) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
}

const car = new Car({brand: 'tata', model:'nano'});
console.log(car.brand, car.model, car.year);