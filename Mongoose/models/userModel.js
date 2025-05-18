import mongoose from "mongoose";

// Creating schema using new mongoose.Schema
const userSchema = new mongoose.Schema({
    name: String,
    expertise: String,
    available: Boolean,
    rating: Number
}, { timestamps: true }); // Adds createdAt, updatedAt automatically

// create a model which we use to interact with mongoDB
const User = mongoose.model("User", userSchema);

export default User;