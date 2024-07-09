import { Router } from "express";
import { registerVoters,loginVoters } from "../controllers/voters.controller.js";



const router=Router()

router.route("/register").post(registerVoters)
router.route("/login").post(loginVoters)




export default router;