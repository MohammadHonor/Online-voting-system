import { Schema } from "mongoose";
import mongoose from "mongoose";

const voteSchema = new Schema({
     voterId: { type: String, required: true },
     candidateId: { type: String, required: true },
     electionName: { type: String, required: true }
});
export const VoteModel = mongoose.model("Vote", voteSchema);