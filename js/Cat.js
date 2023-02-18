"use strict";

import {Animal} from "./Animal.js";

export class Cat extends Animal {
    constructor(name, age, color) {
        super(name, age);
        this.color = color;
    }

    makeSound() {
        console.log("Meow");
    }
}
