import React from 'react'
import './Nav_bar.css';

export default function Nav_bar() {
    return (
       <>
       <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'></link>
        <nav>
            <img src='./logo.jpeg' alt="BigCo Inc. logo" />
            <a href='#' className='toggle-button'>
                <input type="checkbox" id="click"></input>
                <label for="click" className='menu-btn'>
                <i class="fa fa-bars" aria-hidden="true"></i>
                </label>
            </a>

            <div className='navlinks'>

                <a href="#">Profile</a>
                <a href="#">Instructions</a>
                <a href="#">Candidates</a>
                <a href="#">Vote</a>
                <a href="#">Results</a>
                <a href="#">Contact</a>
                <a href="#">About</a>
            </div>
            <div className='search'>
            <input type="text" placeholder="Search.."></input>
            </div>
            
        </nav>
        </> 
    
    )
    
    
}

