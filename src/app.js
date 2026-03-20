import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser"; // performing cred operstions on cookies of cusumers browser



const app=express();


app.use(cors({
    origin:process.env.CORS_ORIGN,
    credentials:true
}))

app.use(express.json({limit:"16kb"}))// adding limit to json data  we are acceptomg json and added limit to it
   // form bhara hamne data liya

app.use(express.urlencoded({extended:true, limit:"16kb"}))// taking data from url
// extended mean we can take nested data 
app.use(express.static("public")) // to use statics files stored in our public folder which we have created

app.use(cookieParser())



export { app }
