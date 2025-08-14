import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Myaccount from './pages/Myaccount';
import Loginuser from './pages/Login';
import Rentcars from './pages/Rentcars';


function App() {


  return (
     <Router>
      <div className="p-4 bg-yellow-500 text-white flex justify-between">
        <h1 className="text-xl font-bold" > Car Rental Services</h1>
        <nav className="md:space-x-4 space-x-2 md:text-lg text-sm font-bold ">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/Rentcars" className="hover:underline">Rent Cars</Link>
          <Link to="/booking" className="hover:underline">Booking</Link>
         
<button className="group relative">
          <span className="cursor-pointer hover:underline">My Account</span>

          <ul className="absolute top-full left-1/2 -translate-x-1/2 bg-white 
          text-yellow-800 shadow-md rounded-md mt-1 hidden group-hover:block z-50 min-w-[150px] transition-all duration-200 ease-in-out">
            <li>
              <Link
                to="/Login"
                className="block px-4 py-2 hover:bg-yellow-700 hover:text-white "
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/Signup"
                className="block px-4 py-2 hover:bg-yellow-700 hover:text-white"
              >
                Signup
              </Link>
            </li>
            
          </ul>
        </button>

        </nav>
      </div>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Rentcars" element={<Rentcars />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/Signup" element={<Myaccount />} />
        <Route path="/Login" element={<Loginuser />} />
      
      
      </Routes>
    </Router>
  );
}

export default App;