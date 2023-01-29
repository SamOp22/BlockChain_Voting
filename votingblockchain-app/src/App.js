import './App.css';
import Homepage from "./components/Homepage";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Profile from './components/Profile';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Adminpage from './components/Adminpage';
import Voterpage from './components/Voterpage';

// const  [user , setLoginUser ] = useState({

// })

function App() {

  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Homepage/>} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/admin' element={<Adminpage/>} />
        <Route path='/Voterpage' element={<Voterpage/>}></Route>
      </Routes>
    </BrowserRouter>

  );
}




export default App;
