import React from 'react'
import NavB from './NavB'
import './css_/SignIn.css'
import {Link} from "react-router-dom"

function SignIn() {
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
          <div className='signin-box'>
            <div class="login-page">
              <div class="form">
                <div class="login"> 
                  <div class="login-header">
                    <h3>LOGIN</h3>
                    <p>Please enter your credentials to login.</p>
                  </div>
                </div>
                <form class="login-form">
                  <input type="text" placeholder="username" />
                  <input type="password" placeholder="password" />
                  <button>login</button>
                  <p class="message">Not registered? <Link to="/SignUp"> Register..</Link> </p>
                </form>
              </div>
            </div>
          </div>
        </div>

      </body>

    </>
  )
}

export default SignIn
