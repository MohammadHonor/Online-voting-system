import mongoose, { mongo } from "mongoose";
import { Schema } from "mongoose";
const electionSchema = new Schema({
  electionName: { type: String, required: true, unique: false },
  startDate: { type: Date, required: true, unique: true, },
  endDate: { type: Date, required: true, unique: true, },
  state: { type: String, required: true, },
  constituency: { type: String, required: true, unique: true },
  Candidate: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Candidates"
  }],
  status: { type: String, required: true }
},
  {
    timestamps: true
  }
);


export const elections = mongoose.model("elections", electionSchema);


