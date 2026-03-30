// it is a processing pipeline like how data will come and how we will handle it
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
app.use(express.static("public")) 
//storing all the static files in the public folder like images and videos
app.use(cookieParser())



export { app }
