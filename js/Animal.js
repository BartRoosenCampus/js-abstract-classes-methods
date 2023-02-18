"use strict";

export class Animal {
    constructor(name, age) {
        if (new.target === Animal) {
            throw new TypeError("Cannot instantiate abstract class.");
        }
        this.name = name;
        this.age = age;
    }

    // Define abstract method that must be overridden by derived classes
    makeSound() {
        throw new Error("Method 'makeSound' must be implemented by derived classes.");
    }
}
