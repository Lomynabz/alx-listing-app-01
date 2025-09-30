"use client";

import { useState } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [nights, setNights] = useState(0);

  const calculateNights = () => {
    if (checkIn && checkOut) {
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);
      const diffTime = Math.abs(checkOutDate.getTime() - checkInDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setNights(diffDays);
    }
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg sticky top-4">
      <h3 className="text-xl font-semibold text-gray-800">${price}/night</h3>
      <div className="mt-4">
        <label className="block text-gray-700">Check-in</label>
        <input
          type="date"
          className="border p-2 w-full mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          value={checkIn}
          onChange={(e) => {
            setCheckIn(e.target.value);
            calculateNights();
          }}
        />
      </div>
      <div className="mt-4">
        <label className="block text-gray-700">Check-out</label>
        <input
          type="date"
          className="border p-2 w-full mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          value={checkOut}
          onChange={(e) => {
            setCheckOut(e.target.value);
            calculateNights();
          }}
        />
      </div>
      <div className="mt-4">
        <p className="text-gray-700">
          Total payment: <strong>${nights > 0 ? price * nights : 0}</strong> ({nights} nights)
        </p>
      </div>
      <button className="mt-6 w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition">
        Reserve Now
      </button>
    </div>
  );
};

export default BookingSection;