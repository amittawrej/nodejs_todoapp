import express from "express";

import userRouter from "./routes/user.js"
import taskRouter from './routes/task.js'
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";
// import { createProxyMiddleware } from "http-proxy-middleware";
export const app=express();
config({
    path:'./data/config.env'
});
//using middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
}))

app.use("/api/v1/users",userRouter);
app.use("/api/v1/tasks",taskRouter);


app.get('*', (req, res) => {
    res.redirect(process.env.FRONTEND_URL);
});

//error middleware
app.use(errorMiddleware)


