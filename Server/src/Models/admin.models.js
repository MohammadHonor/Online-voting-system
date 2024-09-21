import { Schema } from "mongoose";
import mongoose from "mongoose";
import { elections } from "./elections.model.js";
import { Candidates } from "./candidate.models.js";
import {Voters} from "./voters.model.js";
import bcrypt from 'bcrypt'

const adminSchema=new Schema({
    name:{
        type:String,
        required:[true,"Admin Name is necessary"],
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
     },
    voters:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Voters",
        unique:true
    }],
    Candidates:[{
        type:mongoose.Schema.Types.ObjectId,
        ref :"Candidates",
        unique:true
    }],
    elections:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"elections",
        unique:true
    }]
})

adminSchema.pre("save",async function(next){
    if(!this.isModified('password'))return next();

    this.password = await bcrypt.hash(this.password,10); 
})

adminSchema.methods.isPasswordCorrect= async function(password){
    return await bcrypt.compare(password,this.password);

}


export const admins=mongoose.model("admins",adminSchema);

