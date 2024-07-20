import mongoose from "mongoose";
import { Schema } from "mongoose";
import jwt from "json-web-token"
import bcrypt from"bcrypt";

const votersSchema=new Schema({
    
    aadharNumber:{
        type:String,
        required:true,
        unique:true
    },
    
    firstName:{
        type:String,
    },
    midName:{
        type:String,
    },
    lastName:{
        type:String,   
    },
     dob:{
        type:String,
     },
     gender:{
        type:String
     },
    password:{
        type:String,
        require:[true,
        'password is mandatory'],
        unique:true
    },
    email:{
        type:String,
        require:true,
    },
    
    mobileNumber:{
        type:String,
        min:10,
        unique:true
    },
    image:{
        type:String, //Cloudnary
    },
    address:{
        type:String
    }
    
},
{
    timestamps:true   
})

votersSchema.pre("save",async function(next){
    if(!this.isModified(password))return next()
    this.password=bcrypt.hash(this.password,10)
    next();
})

votersSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password)

}

export const Voters=mongoose.model("Voters",votersSchema)