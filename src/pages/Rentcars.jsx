import React from 'react';
import CarList from '../components/CarList';

class Rentcars extends React.Component {
  render() {
    return (
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-2">Find Your Perfect Ride</h2>
         <p className="text-gray-600 text-lg">Explore our wide range of economy and luxury cars available for rent.</p>
        </div>
        <CarList/>
      </div>
    );
  }
}

export default Rentcars;