import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import morgan from "morgan";
import request from "request";
import User from "./models/User.js";
const app = express();


dotenv.config({path :'./config/config.env'});
connectDB();
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=> res.send('hello user'));


app.post('/signup',async (req,res)=>{
    const user = new User({email:req.body.email,name:req.body.name,password:req.body.password});
    await user.save();
})

app.post('/login',async(req,res)=>{
    let user = await User.find({email:req.body.username,password:req.body.password});
    if(user){
        res.status(200).send(user[0]);
     }
     else{
        res.status(200).send(false);
     }
})







const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`));