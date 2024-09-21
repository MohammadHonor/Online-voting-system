import mongoose from "mongoose";
import { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

const votersSchema=new Schema({
    firstName:{
        type:String,
    },
    midName:{
        type:String,
    },
    lastName:{
        type:String,   
    },
    aadharNumber:{
        type:String,
        required:true,
        unique:true
    },
     dob:{
        type:String,
       required:true,
     },
     gender:{
        type:String,
        required:true
     },
    password:{
        type:String,
        require:[true,
           'password is mandatory'],
        unique:true
    },
    fmName:{
   type:String,
    required:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    constituency:{
        type:String,
    },
    state:{
        type:String
    },
    image:{
        type:String, 
    },
    mobileNumber:{
        type:String,
    },
    address:{
        type:String,
        required:true,
    },
    refreshToken:{
        type:String
    } 
},
{
    timestamps:true   
})


votersSchema.pre("save",async function(next){
    if(!this.isModified('password'))return next();
    console.log(this.password);
    this.password = await bcrypt.hash(this.password,10); 
})

votersSchema.methods.isPasswordCorrect= async function(password){
    return await bcrypt.compare(password,this.password);
}
votersSchema.methods.generateAccessToken = function(){

    return jwt.sign({
        _id:this._id,
        email:this.email
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    })
}

votersSchema.methods.generateRefreshToken = function(){
    return jwt.sign({
        email:this.email
    },
    process.env.REFRESS_TOKEN_SECRET,
    {
        expiresIn:process.env.REFRESS_TOKEN_EXPIRY
    })
}
export const Voters=mongoose.model("Voters",votersSchema)
