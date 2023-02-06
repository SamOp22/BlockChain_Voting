import axios from "axios";
import React, { useEffect, useState } from "react";
import './css_/Profile.css'
import Voterpage from "./Voterpage";
import Metamask_mess from "./Metamask_mess";

export default function Profile(props) {
    console.log(props.user.First_Name)
    return (
        <>
            <div>
                <Voterpage />
                <Metamask_mess />
            </div>
            <div className="profile-main">
                <h1>PROFILE</h1>
                <div className="left-info">
                    <label>First Name :</label>
                    <span>{props.user.First_Name}</span>
                    <label>Last Name :</label>
                    <span>{props.user.Last_Name}</span>
                    <label>Email :</label>
                    <span>{props.user.Email}</span>
                    <label>Aadhar Number :</label>
                    <span>{props.user.Aadhar_number}</span>
                    
                </div>
            </div>
        </>

    )


}



