import mongoose, { Schema } from "mongoose";

const stateSchema = new Schema({
    stateName: { type: String, required: true, unique: true },
    constituency: []
},
    { timestamps: true }
);

export const stateModel = mongoose.model(states, stateSchema);