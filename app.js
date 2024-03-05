import express from "express";
import path from "path";

import userRouter from "./routes/user.js"
import taskRouter from './routes/task.js'
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";
import axios from "axios";


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



// Catch all routes and serve the React app
app.get('*', async (req, res) => {
    try {
        // Redirect to the frontend server
        const response = await axios.get(`${process.env.FRONTEND_URL}${req.url}`);
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

//error middleware
app.use(errorMiddleware)


