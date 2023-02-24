import React ,{useState} from 'react'
import NavB from './NavB'
import './css_/SignUp.css'
import { Link } from "react-router-dom"

function SignUp() {

  const [ user ,setUser] = useState({
    First_Name: "",
    Last_Name: "",
    Aadhar_number: "",
    Email: "",
    Password: "",
    Confirm_Password: ""

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
          <div className='signUp-box'>
            <div className="login-page">
              <div className="form">
                <div className="login">
                  <div className="login-header">
                    <h3>REGISTER</h3>
                    <p>Please enter your information.</p>
                  </div>
                </div>
                <form className="login-form">
                <label>First Name</label>
            <input type="text" name="First_Name" value={user.First_Name}  placeholder="" onChange={handleChange}/>
            <label>Last Name</label>
            <input type="text" name="Last_Name" value={user.Last_Name} placeholder=""  onChange={handleChange}/>
            <label>Aadhar number</label>
            <input type="number" name="Aadhar_number" value={user.Aadhar_number} placeholder=""  onChange={handleChange}/>
            <label>Email</label>
            <input type="email" name="Email" value={user.Email} placeholder=""  onChange={handleChange}/>
            <label>Password</label>
            <input type="password" name="Password" value={user.Password} placeholder=""  onChange={handleChange}/>
            <label>Confirm Password</label>
            <input type="password" name="Confirm_Password" value={user.Confirm_Password} placeholder="" onChange={handleChange} />
                  <button>Register</button>
                  <p className="message">Already have an account?<Link to="/SignIn"> Sign in..</Link> </p>
                </form>
              </div>
            </div>
          </div>
        </div>

      
    </>
  )
}

export default SignUp