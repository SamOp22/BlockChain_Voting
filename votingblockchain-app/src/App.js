import './App.css';
import Homepage from "./components/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavB from "./components/NavB"
import Profile from './components/Profile';
import MainHeader from './components/MainHeader'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainHeader/>} >
          <Route index element={<Homepage/>} />
          <Route path='/Profile' element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
