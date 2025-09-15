//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // includes Popper
// import {route, ro}
import Navbar from "./components/Navbar"
import Footer from "./pages/Footer"
import Home from './Home';
// import ShipmentList from "./pages/Adminshipmentform"
import AdminLogin from "./pages/AdminLogin"
import { Routes, Route } from 'react-router-dom';
import DashboardFrom from "./components/Adminshipmentform"
import AboutP from './components/AboutP';
import Credibility from './components/Credibility';
//import ShowshipmentList from './components/Showshipments';
import Myshipment from './components/Myshipment';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>

        <Route path="/" element={<Home />} />
         <Route path="/admin" element={<AdminLogin />} /> 
        <Route path="/dashboard" element={< DashboardFrom/>} />
        {/* <Route path="/listshipments" element={<ShipmentList />} /> */}
        <Route path="/showlist" element={<Myshipment/>} />
         <Route path="/aboutus" element={<AboutP />} />
         <Route path='/ourcert' element={<Credibility/>}/>
       



      </Routes>
<Footer/>

    </div>
  );
}

export default App;
