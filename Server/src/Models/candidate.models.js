import mongoose from "mongoose";

import { Schema } from "mongoose";

const candidateSchema=new Schema({
    candidateId:{
        type:String,
    },
    partyName:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        // required:true
    },
    dob:{
        type:String,
        // required:true,
    },
    
    // constituency:{
    //     type:String,
    //     required:true
    // },
    image:{
        type:String, //cloudinary
        
    },
    email:{
        type: String
    },
    mobileNumber:{
        type:String
    }
    
})

export const Candidates=mongoose.model('Candidates',candidateSchema);






// candidateId: '',
// partyName: '',
// name: '',
// dob: '',
// image: '',
// gender: '',
// email: '',
// mobileNumber: ''