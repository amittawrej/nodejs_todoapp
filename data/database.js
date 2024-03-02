import mongoose from "mongoose";

export const connectDB=()=>{
    mongoose.connect(process.env.MONGO_URI,{
    dbName:"todoApi"
}).then((c)=>{console.log(`Database Connected c ${c.connection.host}`)})
.catch((e)=>console.log(e));

}