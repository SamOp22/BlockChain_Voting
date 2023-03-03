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
import configuration from '../abi/Voting.json'
import { Contract } from "ethers";

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

  // window.onload = function() {
  //   activate();
  //   connectContract();
    
  // };
  useEffect(() => {
    activate();
    connectContract();
    
  }, []);

  

  const connectContract = async ()=>{
    const ADDRESS = configuration.networks['5777'].address ;
    const ABI = configuration.abi;
    window.web3 = await new Web3(window.ethereum);
    window.contract = await await new window.web3.eth.Contract(ABI,ADDRESS);

   
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
          <NavLink to="/Voterpage/Votingpage" className='SLi'>Vote</NavLink>
          <NavLink to="/Voterpage/Results" className='SLi'>Results</NavLink>
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

