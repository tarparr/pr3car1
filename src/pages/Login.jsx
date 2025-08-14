import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Loginuser() {
  const [name, setName] = useState('');
  
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(' Login Details:', {
      name,
      
      password,
      
    });
    alert("Welcome ! You Are Successfully Login");

 navigate('/Rentcars');

  };




  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white shadow-2xl rounded-lg text-center">
      <h2 className="text-3xl font-bold text-gray-700 mb-6 hover:text-gray-800">User Login</h2>

      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="write your name"
            required
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>


        <div>
          <label className="block text-gray-700 font-medium mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="write your Password"
            required
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-700 hover:bg-yellow-800 text-white font-bold py-2 px-4 rounded transition"
        >
          Login
        </button>
        
      </form>

    </div>
  );
}

export default Loginuser;