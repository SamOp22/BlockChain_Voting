import express from "express";
import cors from 'cors';
import mongoose from "mongoose";

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/project',{useNewUrlParser:true , useUnifiedTopology:true})
const db = mongoose.connection;

db.on("error",()=>{console.log("error connection");})
db.once('open',()=>{console.log("connection established");})

//Schema 

const userSchema = new mongoose.Schema({
    First_Name: String,
    Last_Name:String,
    Aadhar_number:String,
    Email:String,
    Password:String
})

const User = new mongoose.model("User",userSchema)

//Routes 

app.post("/Signin", (req ,res)=>{
    res.send("API")
})

app.post("/Signup", (req ,res)=>{
    res.send("API")
})


app.listen(3000,()=>{
    console.log("API online")
})