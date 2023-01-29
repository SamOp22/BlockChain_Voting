import React from "react";
import { Outlet } from "react-router-dom";
import NavB from "./NavB";
import './css_/Homepage.css';



export default function Homepage() {
    return (
        <>
        
        <div className="navv">
            <NavB/> 
            
            </div>
            <Outlet/>
            

        </>

    )

}
