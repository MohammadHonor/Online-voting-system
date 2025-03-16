import mongoose, { mongo } from "mongoose";
import { Schema } from "mongoose";
const electionSchema = new Schema({
  electionName: { type: String, required: true, unique: false },
  startDate: { type: Date, required: true, unique: true, },
  endDate: { type: Date, required: true, unique: true, },
  state: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "stateModel"
  }],
  status: { type: String, required: true }
},
  {
    timestamps: true
  }
);


export const elections = mongoose.model("elections", electionSchema);


