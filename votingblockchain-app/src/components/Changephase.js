import Adminpage from './Adminpage';
import Metamask_mess from "./Metamask_mess";
import React, { useEffect, useState } from "react";
import "./css_/Changephase.css"
import { Addcandidates } from './Addcandidates';

export const Changephase = () => {
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
    
    
    
    const displaystate = () => {

        if (curr_state == 0) {

            const phaseee = document.getElementById("phase").innerHTML = "The current phase is REGISTRATION"
            console.log("done")
        }
        if (curr_state == 1) {
            const phase2 = document.getElementById("phase").innerHTML = "The current phase is VOTING"
            console.log("done2")
        }
        if (curr_state == 2) {
            const phase2 = document.getElementById("phase").innerHTML = "The current phase is RESULTS"
            console.log("done3")
        }    
    }

    const changes = async () => {
        const account = JSON.parse(localStorage.getItem("Account"))
        console.log(account)
        await window.contract.methods.changeState((parseInt(curr_state) + 1)).send({ from: account })
        readstate();
    }



    return (
        <>
            <div>

                <Adminpage />
                <Metamask_mess />
                
            </div>
            <div className="message">
                <button class="button-42" onClick={()=>{ displaystate();}}>Current Phase</button>
                <button class="button-42" onClick={()=>{ changes();}}>Change Phase</button>
                <p id='phase'></p>
                
            </div>
           

        </>
    )
}
