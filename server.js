import {app} from "./app.js";
import { connectDB } from "./data/database.js";

connectDB();

const port=process.env.PORT;

app.listen(port,()=>{
    console.log(`server is running on ${port} in ${process.env.NODE_ENV}`);
})