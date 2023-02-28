import Adminpage from './Adminpage';
import Metamask_mess from "./Metamask_mess";
import React, { useEffect, useState } from "react";
import "./css_/AddCandidate.css"


export const Addcandidates = () => {
    
    const Addcandidate = async () => {
        const c_name = document.getElementById("C_name").value;
        const c_desc = document.getElementById("C_Description").value;
        const account = JSON.parse(localStorage.getItem("Account"))
        console.log(account)
        await window.contract.methods.addContestant(c_name , c_desc ).send({ from: account})
    }
    
    return (
        <>
            <div>
            
                <Adminpage />
                <Metamask_mess />
                
            </div>

            <div className='AddCandidate'>
              
                    <label>Name</label>
                    <input type="text" name="Name" id='C_name' placeholder=""  />
                    <label>Description</label>
                    <input type="text" name="Description" id='C_Description' placeholder=""  />
                    <button onClick={() => Addcandidate()}></button>
               
            </div>
        </>
    )
}
