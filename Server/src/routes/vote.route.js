import { Router } from "express";
import voteGivenByVoters from "../controllers/vote.controller.js";

const votesRouter = Router();

votesRouter.route("/vote").post(voteGivenByVoters);

export default votesRouter;