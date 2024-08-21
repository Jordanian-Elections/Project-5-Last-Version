// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AdsSection = () => {
//   const [ads, setAds] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();  // Navigation for routing

//   useEffect(() => {
//     const fetchAds = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch('http://localhost:4003/api/ads/ads');
//         if (!response.ok) {
//           throw new Error('Failed to fetch ads');
//         }
//         const data = await response.json();
//         setAds(data);
//       } catch (error) {
//         console.error('Failed to fetch ads:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAds();
//   }, []);

//   const handleRequestAd = () => {
//     navigate('/request-ad');  // Navigate to the ad request form
//   };

//   return (
//     <div className="relative">
//       <h2 className="text-center text-2xl font-bold mb-4">إعلانات المرشحين</h2>

//       {loading ? (
//         <p className="text-center">Loading...</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {ads.map((ad) => (
//             <div key={ad.id} className="bg-white p-4 rounded-lg shadow-md">
//               <img
//                 src={ad.image_url}
//                 alt={`Ad for ${ad.candidate_name}`}
//                 className="w-full h-48 object-cover rounded-md mb-4"
//                 onError={(e) => {
//                   e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
//                 }}
//               />
//               <h3 className="text-xl font-semibold">{ad.candidate_name}</h3>
//               <p className="text-gray-600 mt-2">{ad.description}</p>
//             </div>
//           ))}
//         </div>
//       )}

//       <div className="text-center mt-8">
//         <button
//           onClick={handleRequestAd}
//           className="bg-red-600 text-white font-bold py-2 px-4 rounded-full
//                      hover:bg-red-700 transition-colors duration-300
//                      focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 mb-14"
//         >
//           اطلب إعلان
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AdsSection;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaUserTie,
  FaSpinner,
  FaExclamationTriangle,
  FaPlusCircle,
} from "react-icons/fa";

const AdsSection = () => {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAds = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:4003/api/ads");
        if (!response.ok) {
          throw new Error("Failed to fetch ads");
        }
        const data = await response.json();
        setAds(data);
        setError(null);
      } catch (error) {
        console.error("Failed to fetch ads:", error);
        setError("Failed to load ads. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchAds();
  }, []);

  const handleRequestAd = () => {
    navigate("/ads");
  };

  const AdCard = ({ ad }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={ad.image_url}
          alt={`Ad for ${ad.candidate_name}`}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/400x300?text=صورة+غير+متوفرة";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        <h3 className="absolute bottom-2 left-2 right-2 text-white text-xl font-bold text-shadow">
          {ad.candidate_name}
        </h3>
      </div>
      <div className="p-4">
        <p className="text-gray-600 text-sm mb-2">{ad.description}</p>
        {/* <button className="mt-2 bg-zait text-white text-sm font-bold py-2 px-4 rounded-xl transition-colors duration-300">
          المزيد من التفاصيل
        </button> */}
      </div>
    </motion.div>
  );

  return (
    <section className="bg-zait1 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-bold text-zait mb-12">
          إعلانات المرشحين
        </h2>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <FaSpinner className="animate-spin text-4xl text-zait" />
          </div>
        ) : error ? (
          <div className="text-center text-zait">
            <FaExclamationTriangle className="inline-block mr-2" />
            {error}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ads.map((ad) => (
              <AdCard key={ad.id} ad={ad} />
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleRequestAd}
            className="bg-zait text-white font-bold py-3 px-6 rounded-xl
                        transition-colors duration-300 
                       focus:outline-none focus:ring-2 focus:ring-zait focus:ring-opacity-50
                       flex items-center justify-center mx-auto"
          >
            <FaPlusCircle className="mr-2 " />
            اطلب إعلان
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default AdsSection;
