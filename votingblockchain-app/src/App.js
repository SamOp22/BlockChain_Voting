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
import Footer from './components/Footer';
import Metamask_mess from './components/Metamask_mess';
import Candidates from './components/Candidates';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Addcandidates } from './components/Addcandidates';
import { Changephase } from './components/Changephase';
import { Votingpage } from './components/Votingpage';
import { Results } from './components/Results';
import { Adminresult } from './components/Adminresult';

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
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route exact path='/Voterpage' element={user && user._id ?(<Voterpage setVoter={setVoter}  />) : (<SignIn setVoter={setVoter} />)}/>
        <Route exact path='/Adminpage' element={admin && admin._id ? (<Adminpage setAdminn={setAdminn}  />) : (<Adminlogin setAdminn={setAdminn} />)}/>
        <Route path='/SignIn' element={<SignIn setVoter={setVoter } />} />
        <Route path='/Adminlogin' element={<Adminlogin setAdminn={setAdminn} />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/admin' element={<Adminpage />} />
        <Route path='/Voterpage/Instructions' element={user && user._id ?(<Instructions />):(<SignIn setVoter={setVoter} />)} />
        <Route path='/Voterpage/Profile' element={user && user._id ?(<Profile user = {user}/>):(<SignIn setVoter={setVoter} />)} />
        <Route path='/Voterpage/Candidates' element={user && user._id ?(<Candidates />):(<SignIn setVoter={setVoter} />)} />
        <Route path='/Voterpage/Votingpage' element={user && user._id ?(<Votingpage />):(<SignIn setVoter={setVoter} />)} />
        <Route path='/Voterpage/Results' element={user && user._id ?(<Results />):(<SignIn setVoter={setVoter} />)} />
        <Route path='/Adminpage/Addcandidates' element={admin && admin._id ?(<Addcandidates />):(<Adminlogin setAdminn={setAdminn} />)} />
        <Route path='/Adminpage/Changephase' element={admin && admin._id ?(<Changephase />):(<Adminlogin setAdminn={setAdminn} />)} />
        <Route path='/Adminpage/Adminresult' element={admin && admin._id ?(<Adminresult/>):(<Adminlogin setAdminn={setAdminn} />)} />
        
      </Routes>
    </BrowserRouter>
  <Footer/>
  </>
  );
}




export default App;
