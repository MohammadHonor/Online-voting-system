import mongoose from "mongoose";
import { Schema } from "mongoose";

const electionSchema = new Schema({
    name: String, // Name of the election
    date: Date, // Date of the election
    candidates: [{ name: String, party: String }], // Array of candidate objects
    votes: [{ candidateId: Schema.Types.ObjectId, count: Number }], // Array of vote objects
    // Other relevant fields can be added here
  });

export const elections=mongoose.model("elections",electionSchema)