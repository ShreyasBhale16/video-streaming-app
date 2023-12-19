import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();

//using middlewares
app.use(cors({
    origin : process.env.CORS_ORIGIN,                //TO CONNECT WITH BACKEND
    credentials : true
}))

app.use(express.json({limit: "16kb"}))              //For express to get data in JSON Format and set limit of data to 16kb

app.use(express.urlencoded({limit: "16kb"}))       //To get data from urls

app.use(express.static("public"))                 //Stores files like pdf,etc in public folder

app.use(cookieParser())

export {app}