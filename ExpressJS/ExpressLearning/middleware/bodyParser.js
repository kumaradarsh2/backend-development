import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

// Importing the body-parser module
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// Mount the middleware using .use() method
// This is the middleware (body-parser) we will be using
// urlencoded method for HTML form
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.sendStatus(201);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
