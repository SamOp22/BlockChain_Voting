import React from "react";
import { Outlet } from "react-router-dom";
import './css_/Voterpage.css';
import Web3 from 'web3';
import NavB from "./NavB";
import { NavLink } from "react-router-dom"
import { useState, useEffect } from 'react'
import Metamask_mess from "./Metamask_mess";
import { Instructions } from "./Instructions";
import Candidates from "./Candidates";




const Voterpage = (setLoginUser, setVoter, user ) => {
  // let web3
  // //window.ethereum
  // const connectWalletHandler = () => {

  //     if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  //         window.ethereum.request({method: "eth_requestAccounts "})
  //         web3 = new Web3(window.ethereum)
  //     } else {
  //         console.log("please install metamask")
  //     }
  // }
  
  const [account, setAccount] = useState(null)
  let [web3, setWeb3] = useState(null)
  // useEffect(() => {
  //     checkAccount()
  // }, [])

  
  
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

  window.onload = function() {
    activate();
    connectContract();
    
  };

  

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
    const Address = "0x6c9B00C28DFf22bbEc79b40d7717265C5930337a";
    window.web3 = await new Web3(window.ethereum);
    window.contract =  await await new window.web3.eth.Contract(ABI,Address);
    document.getElementById("metamask-contract").innerHTML = "contract connected"
  
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
         
          <NavLink to="/Voterpage/Instructions" className='SLi'>Instructions</NavLink>
          <NavLink to="/Voterpage/Profile" className='SLi'>Profile</NavLink>
          <NavLink to="/Voterpage/Candidates" className='SLi'>Candidates</NavLink>
          <NavLink to="/" className='SLi'>Vote</NavLink>
          <NavLink to="/" className='SLi'>Results</NavLink>
          <NavLink to="/" className='SLi' onClick={() => localStorage.clear()} >Logout</NavLink>

        </div>
      </div>

      <div className="main-page">


          

      </div>
      <Outlet />






    </>

  )

}
export default Voterpage

