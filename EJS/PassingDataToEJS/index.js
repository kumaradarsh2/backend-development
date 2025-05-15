import express from "express";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json()); // to parse json data
app.use(express.urlencoded({ extended: true })); // to parse form data


// This line tells Express to use EJS as the template engine for rendering your views
app.set("view engine", "ejs");

// This line explicitly sets the directory where Express should look for your view files
app.set("views", resolve(__dirname, "views"));

app.get("/", (req, res) => {
  console.log("Locals in GET route:", res.locals);
  res.render("index.ejs", { length: null });
});

app.post("/submit", (req, res) => {
  const nameLength = req.body["fName"].length + req.body["lName"].length;
  res.render("index.ejs", { length: nameLength });
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
