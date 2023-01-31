import React from 'react'
import './css_/NavB.css';
import { Outlet } from "react-router-dom";
import {Link} from "react-router-dom"
import {NavLink} from "react-router-dom"
import {useNavigate} from "react-router-dom"


export default function NavB() {
    const navigate = useNavigate();
const goHome = () => {
    navigate('/')
}

    return (
       <>
       
       
       <div id='page'></div>
       <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'></link>
        <nav>
            <img src='../logo.jpeg' onClick={() => goHome()} alt="BigCo Inc. logo" />
            <Link to="/" className='toggle-button'>
                <input type="checkbox" id="click"></input>  
                <label htmlFor="click" className='menu-btn'>
                <i className="fa fa-bars" aria-hidden="true" id='ccc'></i>
                </label>
            </Link>

            <div className='navlinks'>
                <NavLink to="/SignIn" className='Li' id='voteeeee'>Vote</NavLink>
                <NavLink to="/" className='Li'>Results</NavLink>
                <NavLink to="/" className='Li'>Contact</NavLink>
                <NavLink to="/" className='Li'>About</NavLink> 
                <NavLink to="/AdminLogin" id='adminloginn' className="Li">Admin</NavLink>
            </div>
            <div className='login'>
                
                <NavLink to="/SignIn"  className='Li'>Login</NavLink>
                <Outlet/>
            </div>
             
        </nav>
       
        
        </>
    )
    
    
}

