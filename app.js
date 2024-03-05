import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import userRouter from "./routes/user.js"
import taskRouter from './routes/task.js'
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
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

app.use(express.static(path.join(__dirname, "../dist")));

// Catch all routes and serve the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

//error middleware
app.use(errorMiddleware)


