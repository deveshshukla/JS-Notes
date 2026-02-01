/*
#### OOPs notes ===>

1) Constructor function
- A function used with `new` to make objects.
- `this` inside a constructor refers to the new object.
- Example:
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  const p = new Person('Alice', 30);

  
2) Prototypes
- Methods put on the prototype are shared by all instances (saves memory).
- Example:
  Person.prototype.greet = function() {
    return `Hi, I'm ${this.name}`;
  };
  p.greet(); // "Hi, I'm Alice"


3) Classes (ES6)
- Cleaner syntax that does the same as constructor + prototype under the hood.
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
console.log(a1.speak()); // Dog says woof
