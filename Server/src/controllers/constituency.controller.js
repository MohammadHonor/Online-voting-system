import { Candidates } from "../Models/candidate.models.js";
import { ConstituencyModel } from "../Models/constituency.models.js";
import { Voters } from "../Models/voters.model.js";

const createConstituency = async (req,res) =>{
    const {constituencyName,stateName,electionName} = req.body;

    if(!constituencyName) return res.status(400).json({error:"Consituency name field is required"});
    if(!stateName) return res.status(400).json({error:"State name field is required"});
    if(!electionName) return res.status(400).json({error:"election name field is required"});

    try {

        const totalCandidates = await Candidates.find({constituency:constituencyName,state:stateName,electionName:electionName});
        if(!totalCandidates)return res.status(404).json({error:"Candidates not exists please create candidates"});

        const totalVoters = await Voters.find({constituency:constituencyName});
        if(!totalVoters) return res.status(404).json({error:"Voters not exists please create voters"});

        const newConsituency = new ConstituencyModel({
            name:constituencyName,candidates:totalCandidates,voters:totalVoters
        });
        
        await newConsituency.save();
        res.status(200).json({message:`${constituencyName} constituency created successfully`})
    } catch (err) {
        res.status(500).json({error:err.message})
    }
}

export default createConstituency;