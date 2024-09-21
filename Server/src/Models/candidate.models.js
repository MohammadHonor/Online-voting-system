import mongoose from "mongoose";

import { Schema } from "mongoose";

const candidateSchema=new Schema({
    name:{
        type:String,
    //    required:true,
        unique:true
    },
    prof_photo:{
        type:String, 
       // required:true
    },
    partyName:{
        type:String,
    //    required:true,
        unique:true
    },
    party_flag:{
        type:String,
      },
    gender:{
        type:String,
    //    required:true
    },
    dob:{
        type:String,
    //    required:true
    },
    state:{
        type:String
    },
    constituency:{
        type:String,
    //    required:true
    },
    mobileNumber:{
        type:String
    }
},
{
    timestamps:true
}
)

export const Candidates=mongoose.model('Candidates',candidateSchema);



