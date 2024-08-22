// // // VoterCounts.js
// // import React from "react";

// // const VoterCounts = ({ voterCount }) => (
// //   <section className="mb-12">
// //     <h2 className="text-3xl font-bold mb-6 text-center text-jordanian-red">عدد الناخبين المسجلين</h2>
// //     <div className="bg-jordanian-white p-6 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //       {Object.entries(voterCount).map(([key, count]) => (
// //         <div key={key} className="bg-[#b6abab] p-6 text-white rounded-lg text-center">
// //           <h3 className="text-2xl font-bold mb-2">{key}</h3>
// //           <p className="text-4xl font-bold">{count}</p>
// //         </div>
// //       ))}
// //     </div>
// //   </section>
// // );

// // export default VoterCounts;

// // import React, { useState, useEffect } from "react";
// // import { motion } from "framer-motion";

// // const VoterCounts = ({ voterCount }) => {
// //   const [animatedCounts, setAnimatedCounts] = useState({});

// //   useEffect(() => {
// //     const totalVoters = Object.values(voterCount).reduce((sum, count) => sum + count, 0);
// //     const animationDuration = 2000; // 2 seconds

// //     Object.entries(voterCount).forEach(([key, count]) => {
// //       let startTimestamp;
// //       const percentage = (count / totalVoters) * 100;

// //       const step = (timestamp) => {
// //         if (!startTimestamp) startTimestamp = timestamp;
// //         const progress = Math.min((timestamp - startTimestamp) / animationDuration, 1);
// //         const currentValue = progress * percentage;

// //         setAnimatedCounts((prev) => ({
// //           ...prev,
// //           [key]: currentValue.toFixed(1),
// //         }));

// //         if (progress < 1) {
// //           requestAnimationFrame(step);
// //         }
// //       };

// //       requestAnimationFrame(step);
// //     });
// //   }, [voterCount]);

// //   return (
// //     <section className="mb-12 px-4">
// //       <h2 className="text-4xl font-extrabold mb-8 text-center text-jordanian-red">
// //         عدد الناخبين المسجلين
// //       </h2>
// //       <div className="bg-[#bc9a9a] from-jordanian-white to-gray-100 p-8 rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //         {Object.entries(voterCount).map(([key, count]) => (
// //           <motion.div
// //             key={key}
// //             className="bg-gradient-to-r from-jordanian-red to-red-700 p-6 text-white rounded-xl text-center shadow-md hover:shadow-lg transition-shadow duration-300"
// //             whileHover={{ scale: 1.05 }}
// //             whileTap={{ scale: 0.95 }}
// //           >
// //             <h3 className="text-2xl font-bold mb-4">{key}</h3>
// //             <div className="relative pt-1">
// //               <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-red-200">
// //                 <motion.div
// //                   style={{ width: `${animatedCounts[key]}%` }}
// //                   className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-white"
// //                   initial={{ width: 0 }}
// //                   animate={{ width: `${animatedCounts[key]}%` }}
// //                   transition={{ duration: 2 }}
// //                 />
// //               </div>
// //             </div>
// //             <p className="text-5xl font-bold">
// //               {animatedCounts[key]}%
// //             </p>
// //             <p className="text-lg mt-2">({count} ناخب)</p>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default VoterCounts;

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const VoterCounts = ({ voterCount }) => {
//   const [animatedCounts, setAnimatedCounts] = useState({});

//   useEffect(() => {
//     const totalVoters = Object.values(voterCount).reduce((sum, count) => sum + count, 0);
//     const animationDuration = 2; // 2 seconds in seconds

//     const entries = Object.entries(voterCount);
//     const initialCounts = entries.reduce((acc, [key, count]) => {
//       acc[key] = 0;
//       return acc;
//     }, {});

//     setAnimatedCounts(initialCounts);

//     entries.forEach(([key, count]) => {
//       const percentage = (count / totalVoters) * 100;

//       setAnimatedCounts(prev => ({
//         ...prev,
//         [key]: percentage
//       }));
//     });
//   }, [voterCount]);

//   return (
//     <section className="mb-12 px-4">
//       <h2 className="text-4xl font-extrabold mb-8 text-center text-jordanian-red">
//         عدد الناخبين المسجلين
//       </h2>
//       <div className="bg-[#bc9a9a] from-jordanian-white to-gray-100 p-8 rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {Object.entries(voterCount).map(([key, count]) => (
//           <motion.div
//             key={key}
//             className="bg-gradient-to-r from-jordanian-red to-red-700 p-6 text-white rounded-xl text-center shadow-md hover:shadow-lg transition-shadow duration-300"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <h3 className="text-2xl font-bold mb-4">{key}</h3>
//             <div className="relative pt-1">
//               <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-red-200">
//                 <motion.div
//                   style={{ width: `${animatedCounts[key] || 0}%` }}
//                   className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-white"
//                   initial={{ width: 0 }}
//                   animate={{ width: `${animatedCounts[key] || 0}%` }}
//                   transition={{ duration: 2 }}
//                 />
//               </div>
//             </div>
//             <p className="text-5xl font-bold">
//               {animatedCounts[key] ? animatedCounts[key].toFixed(1) : 0}%
//             </p>
//             <p className="text-lg mt-2">({count} ناخب)</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default VoterCounts;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaMapMarkedAlt,
  FaUserGraduate,
  FaUserTie,
  FaChartBar,
} from "react-icons/fa";

const VoterCounts = () => {
  const [currentStatIndex, setCurrentStatIndex] = useState(0);

  const stats = [
    { label: "عدد الناخبين المسجلين", value: "3,500,000", icon: FaUsers },
    { label: "عدد الدوائر الانتخابية", value: "18", icon: FaMapMarkedAlt },
    { label: "نسبة مشاركة الشباب", value: "35%", icon: FaUserGraduate },
    { label: "عدد المرشحين", value: "650", icon: FaUserTie },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatIndex((prevIndex) => (prevIndex + 1) % stats.length);
    }, 4003); // Change stat every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="bg-gradient py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="flex justify-center">
        <FaChartBar className="ml-2 text-4xl" />
        <h2 className="text-4xl font-bold mb-4 flex items-center text-center text-zait">
          إحصائيات الانتخابات
        </h2>
      </div>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-white text-center mb-8">
          إحصائيات الانتخابات
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={`bg-white p-6 rounded-xl shadow-lg text-center transform transition-all duration-500 ${
                index === currentStatIndex ? "scale-110 z-10" : "scale-100 z-0"
              }`}
              variants={itemVariants}
            >
              <motion.div
                className="text-5xl mb-4 text-red-600"
                initial={{ rotateY: 0 }}
                animate={{ rotateY: index === currentStatIndex ? 360 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <stat.icon className="text-zait" />
              </motion.div>
              <motion.div
                className="text-4xl font-bold text-gray-800 mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {stat.value}
              </motion.div>
              <motion.div
                className="text-sm text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default VoterCounts;
