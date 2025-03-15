import { Router } from "express";
import { createNewCandidate } from "../controllers/candidates.controller.js";
import { upload } from "../middlewares/multer.js"

const newCandidateRoutner = Router();

newCandidateRoutner.route("/register").post(upload.fields(
  [
    { name: "prof_photo", maxCount: 1 },
    { name: "party_flag", maxCount: 1 }
  ]),
  createNewCandidate
);
export { newCandidateRoutner }