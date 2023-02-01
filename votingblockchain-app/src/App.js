import './App.css';
import Homepage from "./components/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from './components/Profile';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Adminpage from './components/Adminpage';
import Voterpage from './components/Voterpage';
import { Instructions } from './components/Instructions';
import { useEffect, useState } from 'react';
import Adminlogin from './components/Adminlogin';




function App() {

  const [admin, setLoginAdmin] = useState({})

  useEffect(() => {
    setLoginAdmin(JSON.parse(localStorage.getItem("Admin")))
  }, [])

  const setAdminn = (admin) => {
    localStorage.setItem("Admin", JSON.stringify(admin))
    setLoginAdmin(admin)
  }

const [user, setLoginUser] = useState({})

useEffect(() => {
  setLoginUser(JSON.parse(localStorage.getItem("User")))
}, [])

  function setVoter(user) {
    localStorage.setItem("User", JSON.stringify(user));
    setLoginUser(user);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route exact path='/Voterpage' element={user && user._id ? (<Voterpage setVoter={setVoter} />) : (<SignIn setVoter={setVoter} />)}/>
        <Route exact path='/Adminpage' element={admin && admin._id ? (<Adminpage setAdminn={setAdminn} />) : (<Adminlogin setAdminn={setAdminn} />)}/>
        <Route path='/Profile' element={<Profile voter= {user._id} />} />
        <Route path='/SignIn' element={<SignIn setVoter={setVoter} />} />
        <Route path='/Adminlogin' element={<Adminlogin setAdminn={setAdminn} />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/admin' element={<Adminpage />} />
        <Route path='/Voterpage/Instructions' element={<Instructions />} />
        <Route path='/Voterpage/Profile' element={<Profile/>} />




      </Routes>
    </BrowserRouter>

  );
}




export default App;
