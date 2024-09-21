import { elections } from "../Models/elections.model.js";
const electionRegistration = async(req,res)=>{

    const {electionName,date,constituency} = req.body;

    if(!electionName || !date || !constituency){

        res.status(401).json({field_missing:"electionName , data or constituency not provide"});
    }

    try {
        const registered = await elections.create({
            electionName,
            date,
            constituency
        })
        
        res.status(200).json("true")

        
    } catch (error) {
        res.status(500).json(error);
    }
}

const electionInformation = async(req,res)=>{
     
    try {
       const info= await elections.find();
       res.status(200).json(info);
    } catch (error) {
        console.log(error);
    }
}


export {electionRegistration,electionInformation} ;