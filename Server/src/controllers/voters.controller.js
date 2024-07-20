import {asyncHandler} from "../utils/AsyncHandler.js"
import { Voters } from "../Models/voters.model.js";
import  bcrypt from 'bcrypt'
const registerVoters =  asyncHandler( async ( req , res ) =>{
     const {
      aadharNumber,
         firstName,
           midName,
          lastName,
              dob,
          password,
            gender,
      mobileNumber,
           address,
           email ,
           image
     }=req.body;
const pass = await bcrypt.hash(password,10);
const voter= await Voters.insertMany([{

     aadharNumber:aadharNumber,
     firstName:firstName,
     midName:midName,
    lastName:lastName,
        dob:dob,
    password:pass,
      gender:gender,
mobileNumber:mobileNumber,
     address:address,
     email:email,
     image:image
}])
res.status(200).json({"success":true})

 })

 const loginVoters=asyncHandler(async(req,res ) =>{
     const {password,email}=req.body;

     const login_info=await Voters.findOne({
        $or:[{password:password},{email:email}]}
    )
   
    const loginValidation = await login_info.isPasswordCorrect(password);
     res.status(200).json(login_info)

 })

export{registerVoters,loginVoters}