import { Router } from "express";

import voters_list from "../controllers/voters_list.controller.js";

const voter_list_router = Router();

voter_list_router.route('/voters_list').get(voters_list);

export default voter_list_router;