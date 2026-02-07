/*
#### OOPs notes ===>

1) Constructor function
- It's just a blueprint to create more copies.
- A function used with `new` to make objects.

- Example:
  function Person(name, age) {
    // 'this.name & this.age' is just a variable name, we can define our own variable name also, its just industry practice

    this.name = name;
    this.age = age;
  }

  // create 2 new copies of same object with different info.
  const p1 = new Person('Alice', 30);
  const p2 = new Person('David', 28);

  
2) Prototypes
- Methods put on the prototype are shared by all instances (saves memory).
- Example:
  Person.prototype.greet = function() {
    return `Hi, I'm ${this.name}`;
  };
  p.greet(); // "Hi, I'm Alice"


3) Classes (ES6)
- Same as constructor + prototype under the hood.
- Example:
  class PersonClass {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    greet() {
      return `Hi, I'm ${this.name}`;
    }
  }
  const pc = new PersonClass('Bob', 25);


4) Instances, `new` & `this` (quick rules)
- `new` creates an object, links its prototype, and runs the constructor with `this` bound to that object.

- `this` inside methods/constructors = the instance that called it.

- Without `new` keyword, constructors may not set up an instance correctly.


5) Prototype behavior (what it really means)
- Every object has an internal link to another object called its prototype (often shown as [[Prototype]] or `__proto__`).

- When you access a property or method, JavaScript checks the object first, then walks up the prototype chain until it finds it (property delegation).

- Methods placed on a prototype are shared by all instances, saving memory and making behavior consistent.

- Prototypes are dynamic: adding or changing methods on a prototype affects existing and future instances that delegate to it.

- The prototype is a normal object; use `Object.getPrototypeOf(obj)` or `obj.__proto__` to inspect it.

Short summary:
- Use constructors or classes to create object blueprints.
- Put shared behavior on the prototype (or class methods).
- `new` + `this` => makes and initializes instances.
*/

// -------- Constructor function examples: --------
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.greet = function() {
  return `Hi, I'm ${this.name} (${this.age})`;
};
const p1 = new Person('Alice', 30);
console.log(p1.greet()); // Hi, I'm Alice (30)

// ---------------- Class example: ----------------
class Animal {
  constructor(type, sound) {
    this.type = type;
    this.sound = sound;
  }
  speak() {
    return `${this.type} says ${this.sound}`;
  }
}
const a1 = new Animal('Dog', 'woof');
console.log(a1.speak(),'\n'); // Dog says woof



/*
══════════════════════════════════════════════════════════════════
======== 4 PILLARS OF OOP (Interview Notes) ========
══════════════════════════════════════════════════════════════════

1) ABSTRACTION
───────────────
Definition:
- Hiding the complexity of internal implementation and exposing only the essential features.
- Users interact with simplified interfaces without knowing how things work internally.

Key Points:
- Hide unnecessary details; show only what's needed.
- Use methods as interfaces (e.g., user calls greet() without knowing internal logic).

Example:
Like a car driver doesn't need to know engine mechanics; they just use the steering wheel and pedals."


2) ENCAPSULATION (Data Hiding)
──────────────────────────────
Definition:
- Bundling data (properties) and methods together in a single unit (class/object).
- Protecting internal data by restricting direct access; using getters/setters for controlled access.

Key Points:
- Data should not be directly accessible from outside.
- Use private fields (#field) or conventions (this._field) to protect data.
- Provides control over how data is modified.
- Prevents unintended changes to object state.

Example:
class Student {
  #gpa = 0; // private field
  
  setGPA(newGPA) {
    if (newGPA >= 0 && newGPA <= 4) {
      this.#gpa = newGPA;
    } else {
      console.log('Invalid GPA');
    }
  }
  
  getGPA() {
    return this.#gpa;
  }
}
const s = new Student();
s.setGPA(3.8); // valid
s.setGPA(5);   // rejected (invalid)

Interview Answer:
"Encapsulation means bundling data and methods together, and protecting sensitive data 
using private fields. Data changes only through controlled methods (getters/setters), 
preventing invalid states."


3) INHERITANCE
───────────────
Definition:
- A mechanism where a child class inherits properties and methods from a parent class.
- Allows code reuse and creating a hierarchy of classes.

Key Points:
- Child class extends parent class using `extends`.
- Child inherits all parent methods and properties.
- Child can override parent methods (method overriding).
- Reduces code duplication.

Example:
class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }
  start() {
    return `${this.brand} started`;
  }
}

class Car extends Vehicle {
  constructor(brand, type) {
    super(brand); // call parent constructor
    this.type = type;
  }
  start() {
    return `${super.start()} - Car mode`; // override + use parent
  }
}

const car = new Car('Toyota', 'Sedan');
console.log(car.start()); // Toyota started - Car mode


4) POLYMORPHISM (Many Forms)
──────────────────────────────
Definition:
- The ability of objects to take multiple forms or for methods to behave differently 
  based on the object type or context.
- Same method name, different behaviors based on the object.

Two Types:
a) Compile-time Polymorphism (Method Overloading) - Not directly in JS
   - Different methods with same name but different parameters
   
b) Runtime Polymorphism (Method Overriding) - Available in JS
   - Child class overrides parent method; actual method called depends on object type

Example:
class Shape {
  area() {
    return 'no shape';
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }
  area() {
    return this.side * this.side;
  }
}

const shapes = [new Circle(5), new Square(4)];
shapes.forEach(shape => console.log(shape.area())); 
// Different results from same method name
*/


function Prototypal_INHERITANCE() {

  // Created own method in js 'obj' itself... (not recommended)
  // In JS Object is parent of all like array, string etc.

  // Note: JS is prototypal language... prototypal chaining is like search for the specific property in every place... and last thing is object in js.

  Object.prototype.trueLength = function (s) {
      // 'this' keyword points whoever call him... point current context.
      console.log(this); 
      return this.trim().length;
  };

  let str = 'Dev   ';
  console.log(str.length);
  console.log(str.trueLength());

  console.log('David   '.trueLength());

}


// ============= Classes Notes =============

class User{
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  // we can also add some methods/func. here
  encryptPass() {
    return `${this.username} Encrypted pass: ${String(this.password).slice(0, 3)}***`;
  }
}

let user1 = new User('Aaron', 'aaron@gmail.com', 'Arr@3214');
console.log(user1);
console.log(user1.encryptPass());