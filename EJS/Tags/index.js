import express from "express";
import {fileURLToPath} from "url";
import {dirname, resolve} from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 8000;

// Set EJS as view engine
app.set("view engine", "ejs");
app.set("views", resolve(__dirname, "views"));

app.get("/", (req, res) => {
    const data = {
        title: "EJS Tags",
        seconds: new Date().getSeconds(),
        items: ["apple", "banana", "cherry"],
        htmlContent:
            "<em>This is some em text</em>",
    };
    res.render("index", data);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));