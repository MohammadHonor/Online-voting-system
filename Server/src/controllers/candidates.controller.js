import { Candidates } from "../Models/candidate.models.js";
import uploadOnCloudinary from "../utils/Cloudinary.js";

const createNewCandidate = async (req, res) => {

    const {name,email,gender,dob,mobileNumber,state,constituency,electionName,partyName} = req.body;

    if (!name || !partyName || !dob || !gender || !email || !mobileNumber ||
        !state || !constituency || !electionName) return res.status(400).json({ message: "Resend the data some fields are missing" });

    const prof_photo_localpath = req.files.prof_photo[0].path
    const party_flag_localpath = req.files.party_flag[0].path

    const prof_photo_path = await uploadOnCloudinary(prof_photo_localpath);
    const party_flag_path = await uploadOnCloudinary(party_flag_localpath);
    // console.log("party", prof_photo_path)
    // console.log("flag", party_flag_path)
    
    try {
        const isCandidateExist = await Candidates.findOne({ name, email,state,partyName });
        
        if (isCandidateExist) return res.status(409).json({ message: "Candidate already exits" });
        
        const newCandidate = new Candidates({
            name: name,
            email: email,
            dob: dob,
            state: state,
            gender: gender,
            constituency: constituency,
            electionName:electionName,
            partyName: partyName,
            prof_photo: prof_photo_path,
            party_flag: party_flag_path,
            mobileNumber: mobileNumber,
        })
        
        await newCandidate.save();
        res.status(200).json({message:"Candidate registration successfull"});
    } catch (error) {
        res.status(500).json({message:error.message});
    }


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


export { createNewCandidate };