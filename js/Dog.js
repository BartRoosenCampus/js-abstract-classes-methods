"use strict";

import {Animal} from "./Animal.js";

export class Dog extends Animal {
    constructor(name, age, color, breed) {
        super(name, age);
        this.color = color;
        this.breed = breed;
    }

    makeSound() {
        console.log("Woef");
    }
}
