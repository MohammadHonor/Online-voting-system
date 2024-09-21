import { Router } from "express";

import { candidateRegister } from "../controllers/candidates.controller.js";
import {upload} from "../middlewares/multer.js"

const candidateRouter=Router();
candidateRouter.route("/register").post(upload.fields(
  [
    {
      name: "prof_photo",
      maxCount:1
    }
  ]),upload.fields(
    [
      {
    name:"party_flag",
    maxCount:1
  }
]),candidateRegister);
export {candidateRouter}