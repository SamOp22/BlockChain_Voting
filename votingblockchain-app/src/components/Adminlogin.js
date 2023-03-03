import React , { useState} from 'react'
import NavB from './NavB'
import './css_/SignIn.css'
import axios from "axios"
import { useNavigate} from  "react-router-dom"


function Adminlogin({setAdminn}) {

  const navigate = useNavigate()

  const [ admin ,setAdmin] = useState({
    Email: "",
    Password: ""
  
  })

  const handleChange = e => {
    const {name , value } = e.target
    setAdmin({
      ...admin,
      [name]:value
    })
  }

  const Adminlogin = () =>{
    axios.post("http://localhost:3000/Adminlogin" , admin)
    .then(res => {
      if(res.data.message){
        document.getElementById("errormess").style.display = "block";  
        document.getElementById("errormess").innerHTML = res.data.message
      }
      setAdminn(res.data.admin)
      navigate("/Adminpage/Changephase")
    })
  }

  window.onscroll = function () { window.scrollTo(0, 0); };

  return (
    <>
    
        <div className="navb">
          <NavB />
        </div>
        {console.log("User",admin)}
        <div className="content">
          <div className='side-panel'>
            <div className='logo-margin'>
              <div className='rotateimg'>
                <img src='./logo2.png' alt="BigCo Inc. logo" />
              </div>
            </div>
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
                <div className="login-form">
                <label>Email</label>
                <input type="email" name="Email" value={admin.Email} placeholder=""  onChange={handleChange}/>
                <label>Password</label>
                <input type="password" name="Password" value={admin.Password} placeholder=""  onChange={handleChange}/>
                
                <button onClick={Adminlogin}>login</button>  
                </div>
                <div id='errormess'></div>
                
              </div>
            </div>
          </div>
        </div>

    

    </>
  )
}

export default Adminlogin
