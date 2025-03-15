import mongoose from "mongoose";

import { Schema } from "mongoose";

const candidateSchema = new Schema({
    name: { 
        type: String,
        required:[true,"Name is required"],
        unique: true ,
        minlength:[3,"Name must be at least 3 characters"],
        maxlength:[50,"Name must be at most 50 characters"],
        match:[/^[A-Za-z\s]+$/, "Name must contains only letters and spaces"],
        trim : true
    },
    dob: { 
        type: Date, 
        required: [true ,"Date of birth is required"],
        validate:{
            validator:(value)=>{
                const today = new Date();
                const birthDate = new Date(value);
                const minAge = 18
                const age = today.getFullYear() - birthDate.getFullYear();
                return age >= minAge && birthDate < today
            },
            message:"Age must be at least 18 year and dob can not be in future"
        }
    },
    gender: { type: String, required: true },
    email:{
        type:String,
        required:[true , "email is required"],
        unique:true,
        trim:true,
        match:[/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,"Please enter valid email address"]
    },
    mobileNumber: {
        type: String,
        required: [true, "Mobile number is required"],
        unique: true,
        match: [/^\d{10}$/, "Please enter a valid 10-digt mobile number"]
    },
    electionName: { type: String, required: true },
    state: { type: String, required: true },
    constituency: { type: String, required: true },
    prof_photo: { type: String, },
    partyName: { type: String, required: true, unique: true },
    party_flag: { type: String, },
},
    {
        timestamps: true
    }
)

export const Candidates = mongoose.model('Candidates', candidateSchema);



