"use strict";

import {Cat} from "./Cat.js";
import {Dog} from "./Dog.js";
import {Animal} from "./Animal.js";

const cat = new Cat('Max', 7, 'grey');

console.log(cat.name); // output "Max"
console.log(cat.age); // output "7"
console.log(cat.color); // output "grey"
cat.makeSound();

const dog = new Dog('Marcel', 5, 'brown', 'golden retriever');

console.log(dog.name); // output "Marcel"
console.log(dog.age); // output "5"
console.log(dog.color); // output "brown"
console.log(dog.breed); // output "golden retriever"
dog.makeSound();

const animal = new Animal('Theo', 2); // output ERROR


