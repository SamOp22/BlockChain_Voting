import './App.css';
import Homepage from "./components/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavB from "./components/NavB"
import Profile from './components/Profile';
import MainHeader from './components/MainHeader'
import SignIn from './components/SignIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
          <Route path='/' element={<Homepage/>} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/SignIn' element={<SignIn/>} />
        
      </Routes>
    </BrowserRouter>

  );
}

export default App;
