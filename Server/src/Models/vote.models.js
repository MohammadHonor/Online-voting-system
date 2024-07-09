import { Schema } from "mongoose";
import mongoose from "mongoose";
import { Voters } from "./voters.model";

const voteSchema=new Schema({
     voter_ID:{
        type:Schema.Types.ObjectId,
        ref:Voters
     },
     candidate_ID:{
        type:Schema.Types.ObjectId,
        ref:Candidates
     }
})

export const Vote=mongoose.model("Vote",voteSchema);