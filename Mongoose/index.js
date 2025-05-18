import express from "express";
import connectDB from "./db.js";
import User from "./models/userModel.js"; // using the model created in our main file

const app = express();
await connectDB(); // connects to mongoDB instance (or server)

// middleware to parse incoming JSON in POST/PUT body (req.body is undefined without it)
app.use(express.json());

// Create a new User
/*
const createUser = async () => {
    try {
        const newUser = new User({
            name: "Alice",
            expertise: "Full Stack",
            available: true,
            rating: 4.8
        });

        await newUser.save();
        console.log("User saved!");
    } catch (err) {
        console.error("Error saving user:", err);
    }
};
*/

// Create a new member
app.post("/users", async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({message: "User created", user});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

// Get all users
app.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

// Get a user by ID
app.get("/users/:id", async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({message: "Not found"});
        res.json(user);
    } catch(err) {
        res.status(500).json({error: err.message});
    }
});

// Update a user by ID
app.put("/users/:id", async (req, res) => {
    try{
        const updated = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true, runValidators: true
        });
        if (!updated) res.status(404).json({message: "Not found"});
        res.json({message: "User updated", updated});
    } catch (err) {
        res.send(500).json({error: err.message});
    }
});

// Delete a user by ID
app.delete("/users/:id", async (req, res) => {
    try {
        const deleted = await User.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({message: "Not found"});
        res.json({message: "User deleted"});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});


// Call the function
// createUser();

app.listen(8000, () => console.log(`Server running on http://localhost:8000`));