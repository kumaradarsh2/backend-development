// const firstModule = require("./first-module");
import firstModule from "./first-module.js";

const sum = firstModule.add(2, 3);
console.log(sum);

const multiply = firstModule.multiply(4, 2);
console.log(multiply);

try {
    console.log("trying to divide by zero");
    let result = firstModule.divide(4, 0);
    console.log(result);
} catch (error) {
    console.log("Caught an error", error.message);
}

// How does the module wrapper works?
// In Node js, every module is wrapped in a function before it's executed, 
// this wrapper function is called module wrapper function

/*
module wrapper
(
    function(exports, require, module, __filename, __dirname) {
        // your module code goes here
    }
)
*/