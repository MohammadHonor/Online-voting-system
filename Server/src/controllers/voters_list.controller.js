import { asyncHandler } from "../utils/AsyncHandler.js";

import { Voters } from "../Models/voters.model.js";

const voters_list = async(req,res)=>{

const voters = await Voters.find();

res.status(200).json(voters);
}
export default voters_list;