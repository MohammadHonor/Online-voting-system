import { Schema } from "mongoose";
import mongoose from "mongoose";
import { elections } from "./elections.model.js";
import { Candidates } from "./candidate.models.js";
import {Voters} from "./voters.model.js";
import bcript from 'bcrypt'

const adminSchema=new Schema({
    name:{
        type:String,
        required:[true,"Admin Name is necessary"]
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
     },
    // // voters:{
    // //     type:Schema.Types.ObjectId,
    // //     ref:Voters,
    // // },
    // Candidates:{
    //     type:Schema.Types.ObjectId,
    //     ref :Candidates
    // },
    // elections:{
    //     type:Schema.Types.ObjectId,
    //     ref:elections
    // }

})

adminSchema.pre("save",async function(next){
    if(!this.isModified('password'))return next();

    this.password = await bcript.hash(this.password,10); 
})

adminSchema.methods.isPasswordCorrect= async function(password){
    return await bcript.compare(password,this.password);

}


export const admins=mongoose.model("admins",adminSchema);

