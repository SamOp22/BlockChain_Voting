import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const SECRET_KEY = "NOTESAPI"

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
const Admin = new mongoose.model("Admin", adminSchema)

// Routes 

app.use(express.json());

app.post("/Signin", async (req, res) => {
    const { Email, Password } = req.body

    try {
        const existuser = await User.findOne({ Email: Email });
        if (!existuser) {
          return res.send({ message: "User does not exist" });

        }

        const matchpass = await bcrypt.compare(Password, existuser.Password);
    
        if (!matchpass) {
            return res.send({ message: "Invalid credentials" })
        }


        const token = jwt.sign({ Email: existuser.Email, id: existuser._id }, SECRET_KEY);
        return res.status(201).json({user: existuser, token: token })


    } catch (error) {
        console.log(error);
        return  res.send({ message: "something went wrong" })

    }

    // await User.findOne({ Email: Email }, (err, user) => {
    //     if (user) {
    //         if (Password === user.Password) {
    //             res.send({ message: "login successful", user: user })
    //         }
    //         else {
    //             res.send({ message: "password incorrect" })
    //         }
    //     } else {
    //         res.send({ message: "user not present" })
    //     }
    // })
})

app.post("/Adminlogin", async (req, res) => {
    const { Email, Password } = req.body;
    // await Admin.findOne({ Email: Email }, (err, admin) => {
    //     if (admin) {
    //         if (Password === admin.Password) {
    //             res.send({ message: "login successful", admin: admin })
    //         }
    //         else {
    //             res.send({ message: "password incorrect" })
    //         }
    //     } else {
    //         res.send({ message: "user not present" })
    //     }
    // })

    try {
        const existadmin = await Admin.findOne({ Email: Email });
        if (!existadmin) {
          return res.send({ message: "User not found " });
        }
        if (!(Password === existadmin.Password)) {
            return res.send({ message: "invalid credentials" })
        }
        return res.status(201).json({ admin: existadmin })
    }catch(error){
                console.log(error);
                return res.send({message:"went wrong"})
        
             }
})

// app.post("/Signin", async (req, res) => {
//     const { Email, Password } = req.body

//      try{
//         const existuser = await User.findOne({ Email: Email });
//         if (!existuser) {
//            res.send({ message: "User not found "});

//         }

//         const matchpass = await bcrypt.compare(Password , existuser.Password);

//         if(!matchpass){
//             res.send({message: "invalid credentials"})
//         }


//         const token = jwt.sign({ Email: existuser.Email, id: existuser._id }, SECRET_KEY);
//         res.status(201).json({ user: existuser, token: token })


//      }catch(error){
//         console.log(error);
//         res.send({message:"went wrong"})

//      }


app.get("/Voterpage/Profile", (req, res) => {
    User.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(200).send(data);
        }
    })
})


app.post("/Signup", async (req, res) => {
    const { First_Name, Last_Name, Aadhar_number, Email, Password } = req.body
    try {

        const existuser = await User.findOne({ Email: Email });
        if (existuser) {
            res.send({ message: "User already registered" })
        }

        const hashPassword = await bcrypt.hash(Password, 10);



        const user = await new User({
            First_Name: First_Name,
            Last_Name: Last_Name,
            Aadhar_number: Aadhar_number,
            Email: Email,
            Password: hashPassword
        })
        user.save(err => {
            if (err) {
                res.status(err)
                return;
            }
            else {
                res.status({ message: "Successfully SignUp" })
                return;
            }
        })

        const token = jwt.sign({ Email: user.Email, id: user._id }, SECRET_KEY);
        res.status(201).json({ user: user, token: token })
        return;



    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "went wrong" })
        return;
    }

})


app.listen(3000, () => {
    console.log("API online")
})