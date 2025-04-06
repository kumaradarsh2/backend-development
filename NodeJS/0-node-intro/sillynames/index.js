import generateName from "sillyname"
import {randomSuperhero} from "superheroes"

// var generateName = require('sillyname');
const sillyName = generateName();
const dreamSuperhero = randomSuperhero();

console.log(`My name is ${sillyName} and I want to be ${dreamSuperhero}!`);