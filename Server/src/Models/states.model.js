import mongoose, { Schema } from "mongoose";

const stateSchema = new Schema({
    stateName: { type: String, required: true, unique: true },
    constituency: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ConstituencyModel"
    }]
},
    { timestamps: true }
);

export const stateModel = mongoose.model(states, stateSchema);