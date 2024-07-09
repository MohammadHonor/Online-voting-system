import { Router } from "express";
import { forgetPassword, loginAdmin } from "../controllers/admin.controller.js";
import { registerAdmin } from "../controllers/admin.controller.js";


const adminRouter=Router();

adminRouter.route("/login").post(loginAdmin);

adminRouter.route("/register").post(registerAdmin)

adminRouter.route("/forgetPassword").post(forgetPassword)

export default adminRouter;