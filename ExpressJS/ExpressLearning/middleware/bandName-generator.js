import express from "express";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import bodyParser from "body-parser";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 8000;
let bandName = "";

// Note: Order of middleware matters!
app.use(bodyParser.urlencoded({ extended: true }));

function bandNameGenerator(req, res, next) {
  bandName = req.body["street"] + req.body["pet"] + "🤞🏻";
  next();
}

app.use(bandNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`
    <h2>Your band name is :</h2>
    <h5>${bandName}</h5>`);
});

app.listen(port, () => console.log(`Server is running on port ${port}`));