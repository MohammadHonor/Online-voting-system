import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"10kb"}))
app.use(express.urlencoded({extended:true,limit:"10kb"}))
app.use(express.static("public"))
app.use(cookieParser());

//routes

import votersRouter from "./routes/voters.route.js";

// routes declaration

app.use("/api/v1/voters",votersRouter)

import adminRouter from "./routes/admin.route.js";
app.use("/api/admin",adminRouter)

// app.use("/admin",adminRouter);

//app.use("/admin",adminRouter)

import { candidateRoute } from "./routes/candidate.route.js";

app.use("/api/candidate",candidateRoute);

import voter_list_router from "./routes/voters_list.js";

app.use('/api',voter_list_router);
export{app};