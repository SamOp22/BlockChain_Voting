import express from "express";
import cors from 'cors';
import mongoose from "mongoose";

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/vote', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection;

db.on("error", () => { console.log("error connection"); })
db.once('open', () => { console.log("connection established"); })

//Schema 

const userSchema = new mongoose.Schema({
    First_Name: String,
    Last_Name: String,
    Aadhar_number: String,
    Email: String,
    Password: String
})

const adminSchema = new mongoose.Schema({
    Email: String,
    Password: String
})


const User = new mongoose.model("User", userSchema)
const Admin = new mongoose.model("admin", adminSchema )

// Routes 

app.post("/Signin", (req, res) => {
    const { Email, Password } = req.body
    User.findOne({Email:Email}, (err,user)=> {
        if(user){
            if(Password === user.Password){
                res.send({message: "login successful", user:user })
            }
            else{
                res.send({message: "password incorrect"})
            } 
        }else{
            res.send({message:"user not present"})
        }
    })
})

// app.post('/Signin', (req, res) => {
//     const {
//         Email,
//         Password
//     } = req.body;

//     userSchema.findOne({ Email: Email })
//         .then((savedata) => {
//             if (!savedata) {
//                 // return res.send("invaid");
//                 adminSchema.findOne({ Email: Email })
//                     .then((savedetail) => {
//                         if (!savedetail) {
//                             return res.send("invalid");
//                         }
//                         adminSchema.findOne({ Password: Password })
//                             .then((savepass, user) => {
//                                 if (!savepass) {
//                                     return res.send("invalid");
//                                 }
//                                 return res.send({message: "login successful", user:user});
//                             })

//                     })
//             }

//             else {
//                 userSchema.findOne({ Password: Password })
//                     .then((savepass, user) => {
//                         if (!savepass) {
//                             return res.send("invalid");
//                         }
//                         return res.send({message: "login successful", user:user});
//                     })
//             }
//         })
//         .catch((error) => {
//             console.log("error");
//         })




// })



app.post("/Signup", (req, res) => {
    const { First_Name, Last_Name, Aadhar_number, Email, Password } = req.body

    User.findOne({ Email: Email }, (err, user) => {
        if (user) {
            res.send({ message: "User already registered" })
        }
        else {
            const user = new User({
                First_Name,
                Last_Name,
                Aadhar_number,
                Email,
                Password
            })
            user.save(err => {
                if (err) {
                    res.send(err)
                }
                else {
                    res.send({ message: "Successfully SignUp" })
                }
            })
        }
    })


})


app.listen(3000, () => {
    console.log("API online")
})