import dotenv from "dotenv";
import express from "express";
import { app } from "./app.js";
import connectDB from "./db/index.js";

dotenv.config(
    {path: "./env"}
)






connectDB()
.then(function()
{
    app.listen(process.env.PORT || 8000, function()
    {
        console.log(`Server is running at port : ${process.env.PORT}`)
    })
})
.catch(function(err)
{
    console.log("mongodb connection failed", err)
})

/*
const app = express();
(async()=>{
    try {
        
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

       app.on("error",(error)=>{
        console.log("ERROR: ",error)
       })

       app.listen(process.env.PORT, ()=>{
        console.log(`app is listening on port ${process.env.PORT}`)
       })

    } catch (error) {
        console.error("ERROR: ", error)
    }

})()
*/