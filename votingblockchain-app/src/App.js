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



function App() {

  const [user, setLoginUser] = useState({})

  useEffect(() => {
    setLoginUser(JSON.parse(localStorage.getItem("User")))
  }, [])

  const setVoter = (user) => {
    localStorage.setItem("User", JSON.stringify(user))
    setLoginUser(user)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route exact path='/Voterpage' element={user && user._id ? (<Voterpage setVoter={setVoter} />) : (<SignIn setVoter={setVoter} />)}/>
        
        <Route path='/Profile' element={<Profile />} />
        <Route path='/SignIn' element={<SignIn setVoter={setVoter} />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/admin' element={<Adminpage />} />
        <Route path='/Voterpage/Instructions' element={<Instructions />} />




      </Routes>
    </BrowserRouter>

  );
}




export default App;
