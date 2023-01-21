import React from 'react'
import './Nav_bar.css';

export default function Nav_bar() {
    return (
        <nav>
            <img src='./logo.jpeg' alt="BigCo Inc. logo" />
            <a href='#' className='toggle-button'>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
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
            
        </nav>

    
    )
    
    
}
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navlinks = document.getElementsByClassName('navlinks')[0]

toggleButton.addEventListener('click', ()=>{
    navlinks.classList.toggle('active')
})

