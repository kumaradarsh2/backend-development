// File system helps us to work with files

// Importing file system module
const fs = require("fs");
// console.log(fs);

// Importing our path module
const path = require("path");
// console.log(path);

const dataFolder = path.join(__dirname, "data");
console.log(dataFolder);
// Note: This is synchronous way of creating the file
// Read "Sync" at the end of methods below

// First we check if the directory exists or not
if (!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder); // creates a dataFolder directory
    console.log("data folder created");
}

const filePath = path.join(dataFolder, "example.txt");

fs.writeFileSync(filePath, "Hello from node.js");
// console.log("file created successfully");


// Now to read the contents from the file
const readContentFromFile = fs.readFileSync(filePath, "utf8");
// console.log("File contents:", readContentFromFile);


// Now how to write contents to our file? 
// How to append a line?

fs.appendFileSync(filePath, "\nNew line added to the file");
// console.log("New file content added");

/*********************************************************/

// Now "Async" way of creating the file
const asyncFilePath = path.join(dataFolder, "async-example.txt");
fs.writeFile(asyncFilePath, "Hello, Async node js", (error) => {
    if (error) throw error;
    console.log("Async File created successfully");
    // Reading contents of file
    fs.readFile(asyncFilePath, "utf8", (error, data) => {
        if (error) throw error;
        console.log("Async file content:", data);
        // Appending a line to the file
        fs.appendFile(asyncFilePath, "\nThis is another line added", (error) => {
            if (error) throw error;
            console.log("New line added to async file");
            // Reading updated data of file
            fs.readFile(asyncFilePath, "utf8", (err, updatedData) => {
                if (err) throw err;
                console.log("Updated data:", updatedData);
            });
        });
    });
});


