import React , { useState} from 'react'
import NavB from './NavB'
import './css_/SignIn.css'
import {Link} from "react-router-dom"

function SignIn() {

  const [ user ,setUser] = useState({
    Email: "",
    Password: ""
   

  })

  const handleChange = e => {
    const {name , value } = e.target
    setUser({
      ...user,
      [name]:value
    })
  }

  return (
    <>
    
        <div className="navb">
          <NavB />
        </div>
        {console.log("User",user)}
        <div className="content">
          <div className='side-panel'>
            <img src='./logo2.png' alt="BigCo Inc. logo" />
          </div>
          <div className='signin-box'>
            <div className="login-page">
              <div className="form">
                <div className="login"> 
                  <div className="login-header">
                    <h3>LOGIN</h3>
                    <p>Please enter your credentials to login.</p>
                  </div>
                </div>
                <form className="login-form">
                <label>Email</label>
                <input type="email" name="Email" value={user.Email} placeholder=""  onChange={handleChange}/>
                <label>Password</label>
                <input type="password" name="Password" value={user.Password} placeholder=""  onChange={handleChange}/>
                <label>Confirm Password</label>
                  <button>login</button>
                  <p className="message">Not registered? <Link to="/SignUp"> Register..</Link> </p>
                </form>
              </div>
            </div>
          </div>
        </div>

    

    </>
  )
}

export default SignIn
