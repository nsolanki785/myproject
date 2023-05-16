import logo from './logo.svg';
import './App.css';
import Layout from './components/layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from './pages/users';
import Adduser from './pages/adduser';
import LandingPage from './pages/landing';
// import Signup from './pages/Signup/signup';
import Login from './pages/login/login';
import Privateroute from './routes/privateroute';


function App() {

    let secretID = localStorage.getItem('secretkey');
  return (
    <BrowserRouter>
    <Routes>
       <Route path='/' element={<LandingPage/>} />
       <Route path="/users" element={
        //  <Privateroute secretID ={secretID}>
           <Users />
            /* </Privateroute> */
          }

        />
       <Route path="/adduser" element={<Adduser />} />
       <Route path="/login" element={<Login/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
