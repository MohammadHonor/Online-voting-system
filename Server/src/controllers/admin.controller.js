import { admins } from "../Models/admin.models.js";
import { asyncHandler } from "../utils/AsyncHandler.js";

import bcrypt from 'bcrypt'


const loginAdmin=asyncHandler(async(req,res)=>{

    const {email,password }=req.body;
     
    const admin_info= await admins.findOne({
        $or:[{password:password},{email:email}]
    }
    )

    const isPasswordValied =await admin_info.isPasswordCorrect(password);
     if(!isPasswordValied){
        res.status(401).json("password is incorrect");
     }

    res.status(200).send(isPasswordValied);
})

const registerAdmin = asyncHandler(async(req,res)=>{
    const {name,email,password} = req.body;

    const adminInstance = await admins.create({
        name,
        email,
        password
    })
   
    res.status(200).json(true)
})

const forgetPassword = asyncHandler(async(req,res)=>{
    const {email,password} =req.body
    const pass=await bcrypt.hash(password,10);
    
    const doc = await admins.findOneAndUpdate({email},{password:pass},{
        new: true,
       upsert: true
    })
    
    // const filter ={password:password}   
    console.log(password)
    // await admins.deleteOne(forPass._id)
    // forPass.password = password;
    // await admins.create(forPass);
   res.status(200).json(true)
    


})

export { forgetPassword, loginAdmin, registerAdmin };
