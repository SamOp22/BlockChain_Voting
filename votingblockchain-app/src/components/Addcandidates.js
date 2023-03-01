import Adminpage from './Adminpage';
import Metamask_mess from "./Metamask_mess";
import React, { useEffect, useState } from "react";
import "./css_/AddCandidate.css"


export const Addcandidates = () => {

    useEffect((onload) => {
        readstate();

    }, []);

    const [curr_state, setstate] = useState(0)

    const readstate = async (curr_state) => {
        curr_state = await window.contract.methods.state().call();
        setstate(curr_state)
        console.log(curr_state);
        // displaystate(); 
    }



    if (curr_state != 0) {

        const dasta =  document.getElementsByClassName("C_details")[0];
            dasta.style.display = "none"
            const but =  document.getElementsByClassName("button-42")[0];
            but.style.display = "none"    
            const phaseee = document.getElementById("addCE").innerHTML = "THE REGISTRATION PHASE IS OVER"
        

        // document.getElementsByClassName("C_details").style.display = "none";
        console.log("done")
    }

    const Addcandidate = async () => {
        const c_name = document.getElementById("C_name").value;
        const c_desc = document.getElementById("C_Description").value;
        const account = JSON.parse(localStorage.getItem("Account"))
        console.log(account)
        await window.contract.methods.addContestant(c_name, c_desc).send({ from: account })
    }


    return (
        <>
            <div>

                <Adminpage />
                <Metamask_mess />

            </div>

            <div className='AddCandidate'>
                <div>
                    <p id="addCE"></p>
                </div>
                <div className="C_details">
                    <label>Name</label>
                    <input type="text" name="Name" id='C_name' placeholder="" />
                    <label>Description</label>
                    <input type="text" name="Description" id='C_Description' placeholder="" />
                </div>
                <button onClick={() => Addcandidate()} className ="button-42" role="button">Add Candidate</button>




            </div>
        </>
    )
}
