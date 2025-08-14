import React from 'react';


class Booking extends React.Component {

  render() {
    return (
      <div className="max-w-xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center"> Book Your Ride</h2>
        <p className="text-gray-600 text-center mb-6">Complete your booking and we’ll get your ride ready!</p>

        <form className="bg-white shadow-lg p-6 rounded-xl space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input
              type="text"
              className="w-full border border-blue-500 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Select Car</label>
            <select className="w-full border border-blue-500 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Swift</option>
              <option>WagonR</option>
              <option>BMW</option>
              <option>Audi</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 border-blue-500 mb-1">Pickup Date</label>
        
         <input type="date" class="px-4 w-full py-2 rounded-md border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-700 hover:bg-yellow-800 text-white py-2 rounded-md text-lg"
          >
            Confirm Booking
          </button>
        </form>

      </div>
    );
  }
}

export default Booking;