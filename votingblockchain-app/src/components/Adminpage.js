import React from "react";
import { Outlet } from "react-router-dom";
import {Link} from "react-router-dom"
import {NavLink} from "react-router-dom"
import NavB from "./NavB";

import "./css_/Adminpage.css"


export default function Adminpage(setAdminn) {
    return (
        <>
            
            <div className="navba">
                <NavB />
            </div>
        
            <div className="sidenav">
                <div className="sidenav-links">
                
                    <NavLink to="/" className='SLi'>Profile</NavLink>
                    <NavLink to="/" className='SLi'>Add Candidates</NavLink>
                    <NavLink to="/" className='SLi'>Results</NavLink>
                    <NavLink to="/" className='SLi'onClick={()=> setAdminn({})} >Logout</NavLink>

                </div>
                <Outlet/>

            </div>

       
        </>

    )


}