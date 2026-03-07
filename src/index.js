//require('dotenv').config()
 import dotenv from "dotenv"
import connectDB from "./db/dex.js";
 dotenv.config({
     path:'./.env'
 })
 connectDB()
/*
import express from "express"
const app=express()

(async()=>{
    try{
        await connectDB()
        app.on("error",(error)=>{
            console.log("error",error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`app is listening on PORT ${process.env.PORT}`)
        })
    } catch(error){
        console.error("ERROR:COULDN'T CONNECT TO DATABASE",error)
        throw error
    }
})()
    */
