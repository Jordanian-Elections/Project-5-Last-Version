// src/components/SeatCalculation.jsx
import React, { useState } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const SeatCalculation = () => {
  const [seats, setSeats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchSeats = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        "http://localhost:4003/api/calculate-seats"
      );
      setSeats(response.data);
    } catch (err) {
      setError("Failed to fetch seats");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Seat Allocation Results
        </h1>
        <button
          onClick={fetchSeats}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all mb-6"
          disabled={loading}
        >
          {loading ? "Calculating..." : "Calculate Seats"}
        </button>

        {error && <div className="text-red-500 mb-4">{error}</div>}

        <div className="w-full max-w-2xl">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-3 px-6 text-left">Party</th>
                <th className="py-3 px-6 text-left">Votes</th>
                <th className="py-3 px-6 text-left">Total Seats</th>
              </tr>
            </thead>
            <tbody>
              {seats.map((seat, index) => (
                <tr key={index} className="border-b">
                  <td className="py-3 px-6">{seat.party}</td>
                  <td className="py-3 px-6">{seat.party_votes}</td>
                  <td className="py-3 px-6">{seat.totalSeats}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SeatCalculation;
