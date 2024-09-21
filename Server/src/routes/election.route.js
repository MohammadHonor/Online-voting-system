import { Router } from "express";

import { electionInformation, electionRegistration } from "../controllers/election.controller.js";

const electionRouter = Router();

electionRouter.route("/register").post(electionRegistration);
electionRouter.route("/info").post(electionInformation)

export default electionRouter;