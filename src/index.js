//require('dotenv').config()
 import dotenv from "dotenv"
import connectDB from "./db/dex.js";
import { app } from "./app.js";
 dotenv.config({
     path:'./.env'
 })
 connectDB()//whener a asyn method ends it return a promise
 .then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`mongo db connnected at port : ${process.env.PORT}`);

    })
    
 })
 .catch((err)=>{
    console.log("DB not connected",err)

 })
 
/*
import express from "express"
const app=express()

(async()=>{
    try{
        await connectDB()w
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
