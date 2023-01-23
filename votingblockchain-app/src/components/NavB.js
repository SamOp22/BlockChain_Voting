import React from 'react'
import './NavB.css';
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
       <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'></link>
        <nav>
            <img src='./logo.jpeg' onClick={() => goHome()} alt="BigCo Inc. logo" />
            <Link to="/" className='toggle-button'>
                <input type="checkbox" id="click"></input>  
                <label for="click" className='menu-btn'>
                <i class="fa fa-bars" aria-hidden="true" id='ccc'></i>
                </label>
            </Link>

            <div className='navlinks'>
                <NavLink to="/Profile" className='Li'>Profile</NavLink>
                <NavLink to="/" className='Li'>Instructions</NavLink>
                <NavLink to="/" className='Li'>Candidates</NavLink>
                <NavLink to="/" className='Li'>Vote</NavLink>
                <NavLink to="/" className='Li'>Results</NavLink>
                <NavLink to="/" className='Li'>Contact</NavLink>
                <NavLink to="/" className='Li'>About</NavLink> 
            </div>
             
        </nav>
        </> 
    
    )
    
    
}

