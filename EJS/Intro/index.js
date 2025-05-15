import express from "express";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const app = express();
const PORT = 8000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// set views directory and engine
app.set("view engine", "ejs");
app.set("views", resolve(__dirname, "views"));

app.get("/", (req, res) => {
  const today = new Date();
  const day = today.getDay();

  // defaults set
  let type = "a weekday";
  let adv = "it's time to work hard";

  if (day === 0 || day === 6) {
    type = "the weekend";
    adv = "it's time to have some fun";
  }

  res.render("index", {
    name: "Adarsh Kumar",
    dayType: type,
    advise: adv
  });
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
