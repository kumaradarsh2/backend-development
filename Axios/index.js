import express from "express";

const app = express();
const port = 3000;

// Serve static files from the "public" folder
app.use(express.static("public"));

app.use(express.json()); // required for parsing JSON body

app.post("/greet", (req, res) => {
	const name = req.body.name;
	res.json({message: `Hello, ${name}!`});
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));