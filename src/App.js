import logo from './logo.svg';
import './App.css';
import Layout from './components/layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from './pages/users';
import Adduser from './pages/adduser';


function App() {

  return (
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Users />} />
       <Route path="/adduser" element={<Adduser />} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
