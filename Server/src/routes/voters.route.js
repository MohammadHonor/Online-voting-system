import { Router } from "express";
import { registerVoters,loginVoters, forgetPassword } from "../controllers/voters.controller.js";
import {upload} from "../middlewares/multer.js"

const votersRouter=Router()

votersRouter.route("/register").post(upload.fields([{
  name:"image",
  count:1
}]),registerVoters)
votersRouter.route("/login").post(loginVoters)
votersRouter.route("/forget").post(forgetPassword)

export default votersRouter;