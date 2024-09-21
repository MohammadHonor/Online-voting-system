import { admins } from "../Models/admin.models.js";
import { asyncHandler } from "../utils/AsyncHandler.js";

import bcrypt from 'bcrypt'


const loginAdmin=async(req,res)=>{

    const {email,password }=req.body;
     
    try {
        const admin_info= await admins.findOne({
            $or:[{password:password},{email:email}]
        }
        )
    
        const isPasswordValied =await admin_info.isPasswordCorrect(password);
         if(!isPasswordValied){
            res.status(401).json("password is incorrect");
         }
    
        res.status(200).send(isPasswordValied);
        
    } catch (error) {
        res.status(500).json("admin login failed");
    }
}

const registerAdmin = async(req,res)=>{
    const {name,email,password} = req.body;

    if(!name || !email || !password){

        res.status(400).json({error:"name ,email and password required"})
    }

    try{
        const adminInstance = await admins.create({
            name:name,
            email:email,
            password:password
        })
       
        res.status(200).json(true)
    }
    catch(error){
     
        res.status(500).json(error);
    }
}

const forgetPassword = async(req,res)=>{
    const {email,password} =req.body

    if( !email || !password){

        res.status(400).json({error:"email and password required"})
    }
    
    try {
        const pass=await bcrypt.hash(password,10);
        const doc = await admins.findOneAndUpdate({email:email},{password:pass},{
        new: true,
        upsert: false
    })
    if (!doc) {
        res.status(400).json({ erro: "email is not persent" });
      }
      res.st
   res.status(200).json(true)
    } catch (error) {
        res.status(500).json("password not forgeted");
    }
    
}

export { forgetPassword, loginAdmin, registerAdmin };
