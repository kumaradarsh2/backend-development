import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    complete: {
        type: Boolean,
        default: false
    },
    // who made this todo?
    createdBy: {
        // iska relation hona chahiye user ke saath mei
        // we need to take care of two things
        // first this is a special type 
        //  second reference, ki user ka reference de rhe h ya fir subtodo ka reference de rhe h
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    // Array of subTodos
    subTodos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubTodo"
        }
    ] // type likh ke array bhi likh skte h
}, { timestamps: true });

// model ka naam, and kiske base be banana h
export const Todo = mongoose.model("Todo", todoSchema);