import { elections } from "../Models/elections.model.js";
import { Candidates } from "../Models/candidate.models.js";
const electionRegistration = async (req, res) => {

    const { electionName, startDate, endDate,state, constituency } = req.body;

    if (!electionName || !startDate || !endDate || !constituency || !state) {
        return res.status(401).json({ field_missing: "electionName , data or constituency not provide" });
    }

    try {
        const candidateExists = await Candidates.find({state,constituency,electionName}) 
        if( !candidateExists )return res.status(404).json({message:"there is no any candidate"})
        const registered = await elections.create({ electionName, startDate,endDate, state, constituency ,candidate:candidateExists})
        return res.status(200).json({message:"Election registration successfull"});
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

const electionInformation = async (req, res) => {

    try {
        const info = await elections.find();
        res.status(200).json(info);
    } catch (error) {
        console.log(error);
    }
}

export { electionRegistration, electionInformation };