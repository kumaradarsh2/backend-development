const lodash = require("lodash");

const names = ["adarsh", "josh", "sagar", "rahul"];
const capitalize = lodash.map(names, lodash.capitalize);

console.log(capitalize);