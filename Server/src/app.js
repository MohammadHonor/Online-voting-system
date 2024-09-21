import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express();

app.use(cors({
    origin:[process.env.CORS_ORIGIN],
    credentials:true
}))

app.use(express.json({limit:"10kb"}))
app.use(express.urlencoded({extended:true,limit:"10kb"}))
app.use(express.static("public"))
app.use(cookieParser());

//routes

import votersRouter from "./routes/voters.route.js";
import adminRouter from "./routes/admin.route.js";
import { candidateRouter } from "./routes/candidate.route.js";
import voter_list_router from "./routes/voters_list.js";
import electionRouter from "./routes/election.route.js";



app.use("/voters",votersRouter)

app.use("/api/admin",adminRouter)

app.use("/api/candidate",candidateRouter);

app.use('/api',voter_list_router);

app.use("/elections",electionRouter);
app.use("/api/elections",electionRouter)

export{app};