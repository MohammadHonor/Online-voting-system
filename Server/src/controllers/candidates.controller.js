import { asyncHandler} from "../utils/AsyncHandler.js";

import { Candidates } from "../Models/candidate.models.js";

const candidateRegister = asyncHandler(async(req,res)=>{

    const {candidateId,partyName, name,dob, image,gender,email, mobileNumber}=req.body;
    
    const candidate= await Candidates.insertMany({
        candidateId:candidateId,
        partyName:partyName,
        name:name,
        dob:dob, 
        image:image,
        gender:gender,
        email:email,
        mobileNumber:mobileNumber
    })
    res.status(200).json(candidate)
})

export {candidateRegister}