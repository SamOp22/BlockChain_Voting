import React from 'react'
import NavB from './NavB'
import './css_/SignUp.css'
import { Link } from "react-router-dom"

function SignUp() {
  return (
    <>
      <body>
        <div className="navb">
          <NavB />
        </div>
        <div className="content">
          <div className='side-panel'>
            <img src='./logo2.png' alt="BigCo Inc. logo" />
          </div>
          <div className='signUp-box'>
            <div class="login-page">
              <div class="form">
                <div class="login">
                  <div class="login-header">
                    <h3>REGISTER</h3>
                    <p>Please enter your information.</p>
                  </div>
                </div>
                <form class="login-form">
                <label>First Name</label>
            <input type="text" name="Fname" placeholder="" />
            <label>Last Name</label>
            <input type="text" name="Lname" placeholder="" />
            <label>Aadhar number</label>
            <input type="number" name="AadharNumber" placeholder="" />
            <label>Email</label>
            <input type="email" name="email" placeholder="" />
            <label>Password</label>
            <input type="password" name="password" placeholder="" />
            <label>Confirm Password</label>
            <input type="password" name="Cpassword" placeholder="" />
                  <button>Register</button>
                  <p class="message">Already have an account?<Link to="/SignIn"> Sign in..</Link> </p>
                </form>
              </div>
            </div>
          </div>
        </div>

      </body>
    </>
  )
}

export default SignUp