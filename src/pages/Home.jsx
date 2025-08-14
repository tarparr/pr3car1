import React from 'react';

import { Link } from 'react-router-dom';

const Home=()=>{

    return (
       
<div className="grid h-100 md:grid-cols-2 grid-cols-1 content-start gap-4 ...">


      <div className="myboxx"></div>
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="text-center mb-10">
           <h2 className="md:text-6xl text-4xl font-extrabold text-yellow-700 mb-8">GET BEST FRESH CAR'S FOR RENT TODAY ! </h2>
          <h1 className="md:text-4xl text-2xl font-extrabold text-yellow-600 mb-2">Special 50% Discount ! </h1>
          <p className="text-gray-600 text-lg">Explore our wide range of economy and luxury cars available for rent.</p>
           
        </div>
  <div className="grid content-center ">
 <Link to="/Rentcars" className="block text-center mt-2 w-full font-bold text-white bg-yellow-700 
 hover:bg-yellow-800 py-2 rounded-lg text-lg ">Explore Cars</Link>

          </div></div>



          </div>
  


    );
  
}

export default Home;