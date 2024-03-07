// import express from "express";

// import userRouter from "./routes/user.js"
// import taskRouter from './routes/task.js'
// import { config } from "dotenv";
// import cookieParser from "cookie-parser";
// import { errorMiddleware } from "./middlewares/error.js";
// import cors from "cors";
// // import { createProxyMiddleware } from "http-proxy-middleware";
// export const app=express();
// config({
//     path:'./data/config.env'
// });
// //using middleware
// app.use(express.json());
// app.use(cookieParser());
// app.use(cors({
//     origin:[process.env.FRONTEND_URL],
//     methods:["GET","POST","PUT","DELETE"],
//     credentials:true,
// }))

// app.use("/api/v1/users",userRouter);
// app.use("/api/v1/tasks",taskRouter);


// app.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
//   });

// // error middleware
// app.use(errorMiddleware)

import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
// import path from 'path';
const __dirname = dirname(fileURLToPath(import.meta.url));

export const app = express();
config({
    path: './data/config.env'
});

//using middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

// Serving static files from the 'todobyaat' directory
app.use(express.static(__dirname + '/todobyaat'));

// Wildcard route handler
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/todobyaat/index.html');
});

// Error middleware
app.use(errorMiddleware);
