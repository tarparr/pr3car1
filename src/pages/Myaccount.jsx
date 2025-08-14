import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Myaccount() {
  const [name, setName] = useState('');
  const [gmail, setGmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');

   const navigate = useNavigate();


   
    useEffect(() => {
    alert("Welcome Dear , Create Your Account ! ");
  }, []);
 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(' Signup Details:', {
      name,
      gmail,
      password,
      mobile,
    });
    alert("Successfully Signup ");
  };


 const handleSkip = () => {

    navigate('/Rentcars'); 
  };


  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white shadow-2xl rounded-lg text-center">
      <h2 className="text-3xl font-bold text-gray-700 mb-6 hover:text-gray-800">User Signup</h2>

      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="write your name"
            required
            className="w-full border border-grey-300 rounded-md p-2"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Gmail</label>
          <input
            type="email"
            value={gmail}
            onChange={(e) => setGmail(e.target.value)}
            placeholder="example@gmail.com"
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

        <div>
          <label className="block text-gray-700 font-medium mb-1">Contact</label>
          <input
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="mobile number"
            required
            maxLength={10}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-700 hover:bg-yellow-800 text-white font-bold py-2 px-4 rounded transition"
        >
          Signup Done
        </button>
      </form>


       <button
            onClick={handleSkip}
            className="mt-4 bg-white text-yellow-800 py-2 px-4 rounded hover:underline"
          >
            Skip
          </button>
    </div>
  );
}

export default Myaccount;