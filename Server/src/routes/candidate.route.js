import { Router } from "express";

import { candidateRegister } from "../controllers/candidates.controller.js";

const candidateRoute=Router();

candidateRoute.route("/register").post(candidateRegister)

export {candidateRoute}