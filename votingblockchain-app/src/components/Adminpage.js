import React from "react";
import { Outlet } from "react-router-dom";
import {Link} from "react-router-dom"
import NavB from "./NavB";
import Web3 from 'web3';
import { NavLink } from "react-router-dom"
import { useState, useEffect } from 'react'

import "./css_/Adminpage.css"
import Metamask_mess from "./Metamask_mess";


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
    const ABI = [
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_description",
            "type": "string"
          }
        ],
        "name": "addContestant",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "enum Contest.PHASE",
            "name": "x",
            "type": "uint8"
          }
        ],
        "name": "changeState",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_contestantId",
            "type": "uint256"
          }
        ],
        "name": "vote",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "contestants",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "voteCount",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "description",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "contestantsCount",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "state",
        "outputs": [
          {
            "internalType": "enum Contest.PHASE",
            "name": "",
            "type": "uint8"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "voters",
        "outputs": [
          {
            "internalType": "bool",
            "name": "hasVoted",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "vote",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ];
    const Address = "0x19c52156c6fdB55f77a2F8Efe724b32D87848Bab";
    window.web3 = await new Web3(window.ethereum);
    window.contract =  await await new window.web3.eth.Contract(ABI,Address);
    // document.getElementById("metamask-contract").innerHTML = "Metamask Contract connected"
  
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