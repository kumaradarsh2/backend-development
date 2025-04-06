import express from "express";

const app = express();

console.log(express);
console.log(app);

const port = 3000;

// make a get request and get back the response
app.get("/", (req, res) => {
    console.log(req.body);
    res.send("This is homepage");
});

app.get("/about", (req, res) => {
    res.send("This is aboutMe page");
});

app.listen(port, () => console.log(`Server is running on port ${port}`));