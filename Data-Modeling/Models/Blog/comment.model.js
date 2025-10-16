import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    text: {
        type: String,
    },
    onPost: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    },
    auther: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });

export const Comment = mongoose.model("Comment", commentSchema);