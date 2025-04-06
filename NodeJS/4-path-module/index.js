// Things we have learnt in path-module:
/*
    how to get the directory name, file name, file extension

    how to join path, resolve path, and normalize path

*/

// Path modules provide utilities for working with file and directory paths

const path = require("path");

// To get the directory name (display full path)
console.log("Directory Name:", path.dirname(__filename));
// console.log(__dirname);

// To get the file name (display just the name of file)
console.log("File Name:", path.basename(__filename)); 

// To get the file extension of the file
console.log("File Extension:", path.extname(__filename));

// getting the relative path
const joinPath = path.join("/user", "documents", "node", "projects");
console.log("Joined path:", joinPath);

// Absolute path
const resolvePath = path.resolve("user", "documents", "node", "projects");
console.log("Resolve path:", resolvePath);

// To get the normalise path (or basically simplifies the path) 
const normalizePath = path.normalize("/user/.documents/../node/project");

console.log("Normalized Path:", normalizePath);