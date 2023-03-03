import React from "react";
import { Await, Outlet } from "react-router-dom";
import {Link} from "react-router-dom"
import NavB from "./NavB";
import Web3 from 'web3';
import { NavLink } from "react-router-dom"
import { useState, useEffect } from 'react'
import "./css_/Adminpage.css"
import Metamask_mess from "./Metamask_mess";
import configuration from '../abi/Voting.json'

export default function Adminpage(setAdminn) {

  const [account, setAccount] = useState(null)
  let [web3, setWeb3] = useState(null)

  
  async function activate() {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });  
        checkAccount()
        
      } catch (err) {
        console.log('user did not add account...', err)
        const disconnected = document.getElementById("metamask-message").innerHTML = "Metamask Account not connected  "
      }
    }
  }
 
  // invoke to check if account is already connected
  async function checkAccount() {
    
    
    let web3 = new Web3(window.ethereum)
    setWeb3(web3)
    const accounts = await web3.eth.getAccounts()
    setAccount(accounts[0])
    console.log(accounts[0])
    localStorage.setItem("Account", JSON.stringify(accounts[0]))
    const connected = document.getElementById("metamask-message").innerHTML = "Metamask Account connected" + " " + accounts[0]
  }

  useEffect(() => {
    activate();
    connectContract();
    
  }, []);

  
  

  const connectContract = async ()=>{
    
    
    const ADDRESS = configuration.networks['5777'].address ;
    const ABI = configuration.abi;
    window.web3 = await new Web3(window.ethereum);
    window.contract = await await new window.web3.eth.Contract(ABI,ADDRESS);
    // document.getElementById("metamask-contract").innerHTML = "Metamask Contract connected"
    console.log(ADDRESS)
  }

    return (
        <>
            
            <div className="navba">
                <NavB />
              
            </div>
        
              <div className="sidenav">
                <div className="sidenav-links">
                    <button onClick={() => activate()} className='SLi'>Connect Wallet</button>
                   {/* <button onClick={() => connectContract()} className='SLi'>Connect Contract</button> */}
                    <NavLink to="/Adminpage/Addcandidates" className='SLi'>Add Candidates</NavLink>
                    <NavLink to="/Adminpage/Changephase" className='SLi'>Change Phase</NavLink>
                    <NavLink to="/Adminpage/Adminresult" className='SLi'>Results</NavLink>
                    <NavLink to="/" className='SLi' onClick={() => localStorage.clear()} >Logout</NavLink>

                </div>
                <Outlet/>

            </div>

       
        </>

    )


}