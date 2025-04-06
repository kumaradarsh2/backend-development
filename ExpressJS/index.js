// How to create a basic Express server
// How can we create routes
// What are the concepts of middleware
// How can we create custom middleware
// What are the request properties

// whenever we create something, we need to get the module
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello world");
});

const port = 3000;
app.listen(port, () => console.log(`Server is running at port ${port}`));