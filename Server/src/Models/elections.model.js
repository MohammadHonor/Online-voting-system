import mongoose, { mongo } from "mongoose";
import { Schema } from "mongoose";
const electionSchema = new Schema({
    electionName:{
      type:String,
      required:true,
      unique:false
    },
    date:{
      type:Date,
      required:true,
      unique:true,
    }, 
    constituency:{
      type:String,
      required:true,
      unique:true
    },
    Candidate:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Candidates"
    }]
  });


 export const elections = mongoose.model("elections",electionSchema);
 
 
