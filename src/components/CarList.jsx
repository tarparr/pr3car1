import React from 'react';
import { Car } from '../classes/Car';
import { LuxuryCar } from '../classes/LuxuryCar';
import { Link } from 'react-router-dom';
import swiftImg from '../assets/dcarimg1.png';
import wagonrImg from '../assets/dcarimg2.png';
import bmwImg from '../assets/dcarimg3.jpg';
import audiImg from '../assets/dcarimg4.png';

class CarList extends React.Component {
  constructor() {
    super();
    this.cars = [
      new Car("Swift", "2021", 1500, swiftImg),
      new Car("WagonR", "2020", 1200, wagonrImg),
      new LuxuryCar("BMW", "2022", 5000, bmwImg, "Sunroof, Leather Seats"),
      new LuxuryCar("Audi", "2023", 6000, audiImg, "Panoramic View, Massage Seats"),
    ];
  }

  render() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {this.cars.map((car, index) => (
          <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={car.image} alt={car.name} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {car.name} ({car.model})
              </h3>
              <p className="text-gray-600">
                ₹{car.price}/day
              </p>
              {car instanceof LuxuryCar && (
                <p className="mt-2 text-sm text-blue-600 italic">
                  Includes: {car.feature}
                </p>
              )}
              <Link
  to="/booking"
  className="block text-center mt-4 w-full bg-yellow-700 hover:bg-yellow-800 text-white py-2 rounded-lg transition-all"
>
  Rent Now
</Link>
      
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default CarList;
