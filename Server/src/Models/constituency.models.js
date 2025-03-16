import mongoose from "mongoose";
import { Schema } from "mongoose";
const constituencySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    candidates: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Candidates"
    }],
    voters: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Voters"
    }]
},
    { timestamps: true }
)

export const ConstituencyModel = mongoose.model("Constituecy" , constituencySchema) ;