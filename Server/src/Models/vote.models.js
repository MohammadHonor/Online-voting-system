import { Schema } from "mongoose";
import mongoose from "mongoose";
import { Voters } from "./voters.model";
import { elections } from "./elections.model";

const voteSchema=new Schema({
     voter:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Voters',
      required:true
     }],
     candidate:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Candidates',
      required:true
     }],
     election:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:'elections',
      required:true
     }]
})
export const Vote=mongoose.model("Vote",voteSchema);