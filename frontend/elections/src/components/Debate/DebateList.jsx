// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Header from '../Header/Header';
// import Footer from '../Footer/Footer';
// const DebatesList = () => {
//   const [debates, setDebates] = useState([]);

//   useEffect(() => {
//     const fetchDebates = async () => {
//       try {
//         const response = await axios.get('http://localhost:4003/api/debates');
//         setDebates(response.data);
//       } catch (error) {
//         console.error('Error fetching debates:', error);
//       }
//     };

//     fetchDebates();
//   }, []);

//   return (
//     <>
//     <Header/>

//     <div className="max-w-4xl mx-auto mt-10">
//       <h2 className="text-2xl font-bold mb-6 text-center">قائمة المناظرات</h2>
//       <table className="min-w-full bg-white border border-gray-200">
//         <thead>
//           <tr>
//             <th className="py-2 px-4 border-b border-gray-200">اسم المناظرة</th>
//             <th className="py-2 px-4 border-b border-gray-200">المرشح الأول</th>
//             <th className="py-2 px-4 border-b border-gray-200">المرشح الثاني</th>
//             <th className="py-2 px-4 border-b border-gray-200">وقت البداية</th>
//             <th className="py-2 px-4 border-b border-gray-200">وقت النهاية</th>
//             <th className="py-2 px-4 border-b border-gray-200">الاجراء</th>
//           </tr>
//         </thead>
//         <tbody>
//           {debates.map(debate => (
//             <tr key={debate.id}>
//               <td className="py-2 px-4 border-b border-gray-200">{debate.name}</td>
//               <td className="py-2 px-4 border-b border-gray-200">{debate.candidate1_name}</td>
//               <td className="py-2 px-4 border-b border-gray-200">{debate.candidate2_name}</td>
//               <td className="py-2 px-4 border-b border-gray-200">{new Date(debate.start_time).toLocaleString()}</td>
//               <td className="py-2 px-4 border-b border-gray-200">{new Date(debate.end_time).toLocaleString()}</td>
//               {/* <td className="py-2 px-4 border-b border-gray-200">
//                 <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline">
//                   الانضمام
//                 </button>
//               </td> */}
//               <td className="py-2 px-4 border-b border-gray-200">
//   <button
//     onClick={() => window.location.href = "http://localhost:5173/Debate-Room/as970b61724008870416?type=group-call"}
//     className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
//   >
//     الانضمام
//   </button>
// </td>

//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//     <Footer/>
//     </>
//   );
// };

// export default DebatesList;

//////////////////////List///////////////

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Header from '../Header/Header';
// import Footer from '../Footer/Footer';

// const DebatesList = () => {
//   const [debates, setDebates] = useState([]);

//   useEffect(() => {
//     const fetchDebates = async () => {
//       try {
//         const response = await axios.get('http://localhost:4003/api/debates');
//         setDebates(response.data);
//       } catch (error) {
//         console.error('Error fetching debates:', error);
//       }
//     };

//     fetchDebates();
//   }, []);

//   return (
//     <>
//       <Header />

//       <div className="max-w-4xl mx-auto mt-10">
//         <h2 className="text-2xl font-bold mb-6 text-center">قائمة المناظرات</h2>
//         <table className="min-w-full bg-white border border-gray-200">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 border-b border-gray-200">اسم المناظرة</th>
//               <th className="py-2 px-4 border-b border-gray-200">المرشح الأول</th>
//               <th className="py-2 px-4 border-b border-gray-200">المرشح الثاني</th>
//               <th className="py-2 px-4 border-b border-gray-200">وقت البداية</th>
//               <th className="py-2 px-4 border-b border-gray-200">وقت النهاية</th>
//               <th className="py-2 px-4 border-b border-gray-200">الاجراء</th>
//             </tr>
//           </thead>
//           <tbody>
//             {debates.map(debate => (
//               <tr key={debate.id}>
//                 <td className="py-2 px-4 border-b border-gray-200">{debate.name}</td>
//                 <td className="py-2 px-4 border-b border-gray-200">{debate.candidate1_name}</td>
//                 <td className="py-2 px-4 border-b border-gray-200">{debate.candidate2_name}</td>
//                 <td className="py-2 px-4 border-b border-gray-200">{new Date(debate.start_time).toLocaleString()}</td>
//                 <td className="py-2 px-4 border-b border-gray-200">{new Date(debate.end_time).toLocaleString()}</td>
//                 <td className="py-2 px-4 border-b border-gray-200">
//                   <button
//                     onClick={() => window.location.href = `http://localhost:5173/Debate-Room/${debate.code}?type=group-call`}
//                     className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
//                   >
//                     الانضمام
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default DebatesList;

///////////// card ////////////

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Header from '../Header/Header';
// import Footer from '../Footer/Footer';

// const DebatesList = () => {
//   const [debates, setDebates] = useState([]);

//   useEffect(() => {
//     const fetchDebates = async () => {
//       try {
//         const response = await axios.get('http://localhost:4003/api/debates');
//         setDebates(response.data);
//       } catch (error) {
//         console.error('Error fetching debates:', error);
//       }
//     };

//     fetchDebates();
//   }, []);

//   return (
//     <>
//       <Header />

//       <div className="max-w-6xl mx-auto mt-10">
//         <h2 className="text-3xl font-bold mb-8 text-center">قائمة المناظرات</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {debates.map(debate => (
//             <div
//               key={debate.id}
//               className="bg-white border border-gray-200 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 ease-in-out"
//             >
//               <h3 className="text-xl font-semibold mb-2 text-gray-800">{debate.name}</h3>
//               <p className="text-gray-600"><span className="font-semibold">المرشح الأول: </span>{debate.candidate1_name}</p>
//               <p className="text-gray-600"><span className="font-semibold">المرشح الثاني: </span>{debate.candidate2_name}</p>
//               <p className="text-gray-600"><span className="font-semibold">وقت البداية: </span>{new Date(debate.start_time).toLocaleString()}</p>
//               <p className="text-gray-600"><span className="font-semibold">وقت النهاية: </span>{new Date(debate.end_time).toLocaleString()}</p>
//               <button
//                 onClick={() => window.location.href = `http://localhost:5173/Debate-Room/${debate.code}?type=group-call`}
//                 className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full"
//               >
//                 الانضمام
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default DebatesList;

//////////////////////////////////timeout////////

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Header from "../Header/Header";
// import Footer from "../Footer/Footer"
// const DebatesList = () => {
//   const [debates, setDebates] = useState([]);

//   useEffect(() => {
//     const fetchDebates = async () => {
//       try {
//         const response = await axios.get("http://localhost:4003/api/debates");
//         setDebates(response.data);
//       } catch (error) {
//         console.error("Error fetching debates:", error);
//       }
//     };

//     fetchDebates();
//   }, []);

//   const isDebateActive = (startTime, endTime) => {
//     const now = new Date();
//     const start = new Date(startTime);
//     const end = new Date(endTime);
//     return now >= start && now <= end;
//   };

//   const handleJoinClick = (debate) => {
//     if (isDebateActive(debate.start_time, debate.end_time)) {
//       window.location.href = `http://localhost:5173/DebateRoom/${debate.code}?type=group-call`;
//     } else {
//       alert("هذه المناظرة انتهت");
//     }
//   };

//   return (
//     <>
//       <Header />
//       <div
//         className="w-full md:w-2/3 mx-auto mt-10 p-6 rounded-lg shadow-lg"
//         style={{
//           backgroundImage: "url('/picture.jpg')",
//           backgroundColor: "rgba(255, 255, 255, 0.8)",
//           backgroundBlendMode: "overlay",
//           backgroundPosition: "20% 30%",
//         }}
//       >
//         <h2 className="text-xl font-bold mb-6 text-right text-[#8E1B3B]">
//           قائمة المناظرات
//         </h2>
//         <div className="overflow-x-auto">
//           <table className="w-full bg-white border border-gray-200">
//             <thead>
//               <tr className="bg-gray-50">
//                 <th className="py-2 px-4 border-b border-gray-200 text-right text-[#8E1B3B]">
//                   اسم المناظرة
//                 </th>
//                 <th className="py-2 px-4 border-b border-gray-200 text-right text-[#8E1B3B]">
//                   المرشح الأول
//                 </th>
//                 <th className="py-2 px-4 border-b border-gray-200 text-right text-[#8E1B3B]">
//                   المرشح الثاني
//                 </th>
//                 <th className="py-2 px-4 border-b border-gray-200 text-right text-[#8E1B3B]">
//                   وقت البداية
//                 </th>
//                 <th className="py-2 px-4 border-b border-gray-200 text-right text-[#8E1B3B]">
//                   وقت النهاية
//                 </th>
//                 <th className="py-2 px-4 border-b border-gray-200 text-right text-[#8E1B3B]">
//                   الاجراء
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {debates.map((debate) => (
//                 <tr key={debate.id} className="hover:bg-gray-50">
//                   <td className="py-2 px-4 border-b border-gray-200 text-right">
//                     {debate.name}
//                   </td>
//                   <td className="py-2 px-4 border-b border-gray-200 text-right">
//                     {debate.candidate1_name}
//                   </td>
//                   <td className="py-2 px-4 border-b border-gray-200 text-right">
//                     {debate.candidate2_name}
//                   </td>
//                   <td className="py-2 px-4 border-b border-gray-200 text-right">
//                     {new Date(debate.start_time).toLocaleString("ar-SA")}
//                   </td>
//                   <td className="py-2 px-4 border-b border-gray-200 text-right">
//                     {new Date(debate.end_time).toLocaleString("ar-SA")}
//                   </td>
//                   <td className="py-2 px-4 border-b border-gray-200 text-right">
//                     <button
//                       onClick={() => handleJoinClick(debate)}
//                       className={`${
//                         isDebateActive(debate.start_time, debate.end_time)
//                           ? "bg-[#8E1B3B] hover:bg-[#72152d]"
//                           : "bg-gray-400 cursor-not-allowed"
//                       } text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300`}
//                       disabled={
//                         !isDebateActive(debate.start_time, debate.end_time)
//                       }
//                     >
//                       {isDebateActive(debate.start_time, debate.end_time)
//                         ? "الانضمام"
//                         : "انتهت"}
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//       <Footer/>
//     </>
//   );
// };

// export default DebatesList;

///

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";

// const DebatesList = () => {
//   const [debates, setDebates] = useState([]);

//   useEffect(() => {
//     const fetchDebates = async () => {
//       try {
//         const response = await axios.get("http://localhost:4003/api/debates");
//         setDebates(response.data);
//       } catch (error) {
//         console.error("Error fetching debates:", error);
//       }
//     };

//     fetchDebates();
//   }, []);

//   const isDebateActive = (startTime, endTime) => {
//     const now = new Date();
//     const start = new Date(startTime);
//     const end = new Date(endTime);
//     return now >= start && now <= end;
//   };

//   const handleJoinClick = (debate) => {
//     if (isDebateActive(debate.start_time, debate.end_time)) {
//       window.location.href = `http://localhost:5173/Debate-Room/${debate.code}?type=group-call`;
//     } else {
//       alert("هذه المناظرة انتهت");
//     }
//   };

//   return (
//     <>
//       <Header />
//       <div className="w-full md:w-2/3 mx-auto mt-10 p-6 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-6 text-right text-[#274C77]">
//           قائمة المناظرات
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {debates.map((debate) => (
//             <div
//               key={debate.id}
//               className="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-300"
//             >
//               <h3 className="text-lg font-semibold text-right text-[#274C77] mb-2">
//                 {debate.name}
//               </h3>
//               <p className="text-right mb-1">
//                 <strong>المرشح الأول:</strong> {debate.candidate1_name}
//               </p>
//               <p className="text-right mb-1">
//                 <strong>المرشح الثاني:</strong> {debate.candidate2_name}
//               </p>
//               <p className="text-right mb-1">
//                 <strong>وقت البداية:</strong>{" "}
//                 {new Date(debate.start_time).toLocaleString("ar-SA")}
//               </p>
//               <p className="text-right mb-4">
//                 <strong>وقت النهاية:</strong>{" "}
//                 {new Date(debate.end_time).toLocaleString("ar-SA")}
//               </p>
//               <button
//                 onClick={() => handleJoinClick(debate)}
//                 className={`w-full py-2 px-4 rounded font-bold text-white transition duration-300 ${
//                   isDebateActive(debate.start_time, debate.end_time)
//                     ? "bg-[#274C77] hover:bg-[#1E385A]"
//                     : "bg-[#5E385A] cursor-not-allowed"
//                 }`}
//                 disabled={!isDebateActive(debate.start_time, debate.end_time)}
//               >
//                 {isDebateActive(debate.start_time, debate.end_time)
//                   ? "انضم للمناظرة"
//                   : " انتهت المناظرة"}
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default DebatesList;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const DebatesList = () => {
  const [debates, setDebates] = useState([]);

  useEffect(() => {
    const fetchDebates = async () => {
      try {
        const response = await axios.get("http://localhost:4003/api/debates");
        setDebates(response.data);
      } catch (error) {
        console.error("Error fetching debates:", error);
      }
    };

    fetchDebates();
  }, []);

  const isDebateActive = (startTime, endTime) => {
    const now = new Date();
    const start = new Date(startTime);
    const end = new Date(endTime);
    return now >= start && now <= end;
  };

  const isDebateEnded = (endTime) => {
    const now = new Date();
    const end = new Date(endTime);
    return now > end;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const handleJoinClick = (debate) => {
    if (isDebateActive(debate.start_time, debate.end_time)) {
      window.location.href = `http://localhost:5173/Debate-Room/${debate.code}?type=group-call`;
    } else if (isDebateEnded(debate.end_time)) {
      alert("This debate has ended");
    } else {
      alert("This debate has not started yet");
    }
  };

  return (
    <>
      <Header />
      <div className="w-full md:w-2/3 mx-auto mt-10 p-6 rounded-lg shadow-lg bg-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-right text-zait">
          قائمة المناظرات
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {debates.map((debate) => (
            <div
              key={debate.id}
              className="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold text-right text-zait mb-2">
                  {debate.name}
                </h3>
                <p className="text-right mb-1">
                  <strong>المرشح الأول:</strong> {debate.candidate1_name}
                </p>
                <p className="text-right mb-1">
                  <strong>المرشح الثاني:</strong> {debate.candidate2_name}
                </p>
                <p className="text-right mb-1">
                  <strong>وقت البداية:</strong> {formatDate(debate.start_time)}
                </p>
                <p className="text-right mb-4">
                  <strong>وقت النهاية:</strong> {formatDate(debate.end_time)}
                </p>
              </div>
              <button
                onClick={() => handleJoinClick(debate)}
                className={`w-full py-2 px-4 rounded font-bold text-white transition duration-300 ${
                  isDebateActive(debate.start_time, debate.end_time)
                    ? "bg-zait hover:bg-[#1E385A]"
                    : isDebateEnded(debate.end_time)
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gray-500 cursor-not-allowed"
                }`}
                disabled={!isDebateActive(debate.start_time, debate.end_time)}
              >
                {isDebateActive(debate.start_time, debate.end_time)
                  ? "انضم للمناظرة"
                  : isDebateEnded(debate.end_time)
                  ? "انتهت المناظرة"
                  : "لم تبدأ المناظرة بعد"}
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DebatesList;
