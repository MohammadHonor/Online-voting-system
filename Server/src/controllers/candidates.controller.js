import { asyncHandler} from "../utils/AsyncHandler.js";
import { Candidates } from "../Models/candidate.models.js";
import { admins } from "../Models/admin.models.js";
import uploadOnCloudinary from "../utils/Cloudinary.js";

const candidateRegister = async(req,res)=>{

    const {
        partyName,
        name,
        dob,
        gender,
        email,
        mobileNumber,
        state,
        constituency,
    }=req.body;
     
    if(!name || !partyName || !dob || !gender || !email || !mobileNumber || !state || !constituency ){
        res.status(400).json({"error":"resend the data"});
    }

    console.log(req.files)
    
    res.status(200).json("success")
    // var prof_photo_localpath;
    // if (req.files && Array.isArray(req.files?.prof_photo) && req.files?.prof_photo.length > 0) {
    //     prof_photo_localpath = req.files?.prof_photo[0]?.path 
    // }
    // var party_flag_localpath;
    // if (req.files && Array.isArray(req.files?.party_flag) && req.files?.party_flag.length > 0) {
    //     party_flag_localpath = req.files?.party_flag[0]?.path
    // }

    // const prof_photo_path = await uploadOnCloudinary(prof_photo_localpath);

    // const party_flag_path = await uploadOnCloudinary(party_flag_localpath);
    // console.log("party"+prof_photo_localpath)
    // console.log("flag"+party_flag_localpath)


    // const candidate_exist = await Candidates.findOne({email});
    // try {
    //     if(!candidate_exist){

    //         const candidate= await Candidates.create({
    //             partyName:partyName,
    //             name:name,
    //             dob:dob,
    //             prof_photo:prof_photo_path?.url,
    //             party_flag: party_flag_path?.url,
    //             gender:gender,
    //             email:email,
    //             mobileNumber: mobileNumber,
    //             state: state,
    //             constituency: constituency,
    //         })
    //     }
    //     else{
    //         res.status(403).json("candidate already exist");
    //     }
    //     res.status(200).json("candidate registered successfully");
        
    // } catch (error) {
    //     res.status(500).json(error);
    // }
    

    // await admins.updateMany({
    //     "name":process.env.Admin_Name
    // },{
    //     $push:{
    //         "candidates":candidate._id
    //     }
    // },
    //     {
    //         upsert:true
    //     }
    // )
    // res.status(200).json(candidate)
}

export {candidateRegister}