import React from "react";
import { Outlet } from "react-router-dom";
import './css_/Voterpage.css';
import NavB from "./NavB";
import { NavLink } from "react-router-dom"



export default function Voterpage(setLoginUser ,setVoter ,user) {
    
    return (
        <>

            <div className="navba">
                <NavB />
            </div>
        
            <div className="sidenav">
                <div className="sidenav-links">
                

                    <NavLink to="/Voterpage/Instructions" className='SLi'>Instructions</NavLink>
                    <NavLink to="/" className='SLi'>Profile</NavLink>
                    <NavLink to="/" className='SLi'>Candidates</NavLink>
                    <NavLink to="/" className='SLi'>Vote</NavLink>
                    <NavLink to="/" className='SLi'>Results</NavLink>
                    <NavLink to="/" className='SLi'onClick={()=> setVoter({})} >Logout</NavLink>

                </div>
                <Outlet/>

            </div>




        </>

    )

}
