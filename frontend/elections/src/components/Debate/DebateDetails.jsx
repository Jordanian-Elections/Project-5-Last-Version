import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DebatesList = () => {
  const [debates, setDebates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDebates = async () => {
      try {
        const response = await axios.get('/api/debates'); // This now fetches only approved debates
        setDebates(Array.isArray(response.data) ? response.data : []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching debates:', error);
        setError('Failed to fetch debates. Please try again later.');
        setLoading(false);
      }
    };
    fetchDebates();
  }, []);

  const isDebateActive = (debate) => {
    const now = new Date();
    return new Date(debate.start_time) <= now && now <= new Date(debate.end_time);
  };

  if (loading) {
    return <div className="text-center mt-8">Loading debates...</div>;
  }

  if (error) {
    return <div className="text-center mt-8 text-red-500">{error}</div>;
  }

  if (debates.length === 0) {
    return <div className="text-center mt-8">No approved debates found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">المناظرات المعتمدة</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {debates.map((debate) => (
          <div key={debate.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{debate.name}</h3>
              <p className="text-gray-600 mb-2">المرشح الأول: {debate.candidate1_name}</p>
              <p className="text-gray-600 mb-2">المرشح الثاني: {debate.candidate2_name}</p>
              <p className="text-gray-600 mb-2">البداية: {new Date(debate.start_time).toLocaleString()}</p>
              <p className="text-gray-600 mb-4">النهاية: {new Date(debate.end_time).toLocaleString()}</p>
              {isDebateActive(debate) ? (
                <Link
                  to={`/debates/${debate.id}`}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  الانضمام للمناظرة
                </Link>
              ) : (
                <button
                  className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded cursor-not-allowed"
                  disabled
                >
                  المناظرة غير متاحة حالياً
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DebatesList;