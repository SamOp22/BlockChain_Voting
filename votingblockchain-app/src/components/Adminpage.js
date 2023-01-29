import React from "react";
import { Outlet } from "react-router-dom";
import {Link} from "react-router-dom"
import {NavLink} from "react-router-dom"
import {useNavigate} from "react-router-dom"
import "./css_/Adminpage.css"


export default function Adminpage() {
    return (
        <>
            
       <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'></link>
        <nav>
            <img src='./logo.jpeg' />
            <Link to="/" className='toggle-button'>
                <input type="checkbox" id="click"></input>  
                <label htmlFor="click" className='menu-btn'>
                <i className="fa fa-bars" aria-hidden="true" id='ccc'></i>
                </label>
            </Link>

            <div className='admin_navlinks'>
                <NavLink to="/Profile" className='Li'>Profile</NavLink>
                <NavLink to="/Profile" className='Li'>Candidates</NavLink>
                <NavLink to="/" className='Li'>Add Candidates</NavLink>
                <NavLink to="/" className='Li'>Results</NavLink>
                <NavLink to="/" className='Li'>About</NavLink> 
            </div>
            <div className='logout'>
                <NavLink to="/SignIn"  className='Li'>Logout</NavLink>
                <Outlet/>
            </div>
             
        </nav>
       
       
        </>

    )


}