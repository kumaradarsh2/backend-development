import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect("mongodb://localhost:27017/userDB");
    console.log("UserDB connected");
};

export default connectDB;