import mongoose from "mongoose";

//  this the mongoose schema
const userSchema = new mongoose.Schema(
    // iss object ke ander data jata h
    // data ke fields likhna h
    {
        // username: String, 
        // email: String,
        // isActive: Boolean

        // more professional approach
        username: {
            type: String,
            required: true, // ye field hona hi chahiye
            unique: true,
            lowercase: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            // custom message bhi likh sakte h
            required: [true, "password is required"]
        }

    }, { timestamps: true }
);

// ye model two ques. puchhta hai, kya model banau and kiske based pe banau
export const User = mongoose.model("User", userSchema);