
import { Router } from "express";
import createConstituency from "../controllers/constituency.controller.js";

const constituencyRouter = Router();

constituencyRouter.route("/create").post(createConstituency);

export default constituencyRouter;