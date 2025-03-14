import { VoteModel } from "../Models/vote.models.js";
const voteGivenByVoters = async (req, res) => {
    const { voterId, electionName, candidateId } = req.body;

    if (!voterId) return res.status(404).json({ message: `$Id {voterId} not found"` });

    if (!electionName) return res.status(404).json({ message: `$Election {electionName} not found ` });

    if (!candidateId) return res.status(404).json({ message: `$Candidate {candidateId} not found ` });

    try {

        const voter = { voterId: voterId, candidateId: candidateId, electionName: electionName };
        const response = await VoteModel.create(voter)
        if (!response) return res.json({ message: "you vote not counted yet " });
        res.status(200).json({ message: "your vote counted" });
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error });
    }

}

export default voteGivenByVoters;