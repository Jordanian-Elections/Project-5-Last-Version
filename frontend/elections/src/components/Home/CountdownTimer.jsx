// // // // CountdownTimer.js
// // // import React, { useState, useEffect } from "react";

// // // const CountdownTimer = ({ targetDate }) => {
// // //   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

// // //   useEffect(() => {
// // //     const timer = setInterval(() => {
// // //       setTimeLeft(calculateTimeLeft());
// // //     }, 1000);

// // //     return () => clearInterval(timer);
// // //   }, [targetDate]);

// // //   function calculateTimeLeft() {
// // //     const difference = +new Date(targetDate) - +new Date();
// // //     let timeLeft = {};

// // //     if (difference > 0) {
// // //       timeLeft = {
// // //         أيام: Math.floor(difference / (1000 * 60 * 60 * 24)),
// // //         ساعات: Math.floor((difference / (1000 * 60 * 60)) % 24),
// // //         دقائق: Math.floor((difference / 1000 / 60) % 60),
// // //         ثواني: Math.floor((difference / 1000) % 60),
// // //       };
// // //     } else {
// // //       timeLeft = {
// // //         أيام: 0,
// // //         ساعات: 0,
// // //         دقائق: 0,
// // //         ثواني: 0,
// // //       };
// // //     }

// // //     return timeLeft;
// // //   }

// // //   return (
// // //     <div className="text-2xl font-bold text-jordanian-red">
// // //       {Object.keys(timeLeft).length ? (
// // //         Object.entries(timeLeft).map(([unit, value]) => (
// // //           <span key={unit} className="mx-2">
// // //             {value} {unit}
// // //           </span>
// // //         ))
// // //       ) : (
// // //         <span>انتهى وقت الانتخابات!</span>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default CountdownTimer;

// // // CountdownTimer.js
// // import React, { useState, useEffect } from "react";

// // const CountdownTimer = ({ targetDate }) => {
// //   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setTimeLeft(calculateTimeLeft());
// //     }, 1000);

// //     return () => clearInterval(timer);
// //   }, [targetDate]);

// //   function calculateTimeLeft() {
// //     const difference = +new Date(targetDate) - +new Date();
// //     let timeLeft = {};

// //     if (difference > 0) {
// //       timeLeft = {
// //         أيام: Math.floor(difference / (1000 * 60 * 60 * 24)),
// //         ساعات: Math.floor((difference / (1000 * 60 * 60)) % 24),
// //         دقائق: Math.floor((difference / 1000 / 60) % 60),
// //         ثواني: Math.floor((difference / 1000) % 60),
// //       };
// //     } else {
// //       timeLeft = {
// //         أيام: 0,
// //         ساعات: 0,
// //         دقائق: 0,
// //         ثواني: 0,
// //       };
// //     }

// //     return timeLeft;
// //   }

// //   return (
// //     <div className="flex justify-center items-center space-x-4 text-white">
// //       {Object.keys(timeLeft).length ? (
// //         Object.entries(timeLeft).map(([unit, value]) => (
// //           <div
// //             key={unit}
// //             className="flex flex-col items-center bg-gradient-to-r ml-5 from-[#d46666] to-[#a43e3e] shadow-2xl rounded-xl px-6 py-4 w-28 text-center transform transition-transform hover:scale-105"
// //           >
// //             <span className="text-5xl font-extrabold block">{value}</span>
// //             <span className="text-2xl mt-2">{unit}</span>
// //           </div>
// //         ))
// //       ) : (
// //         <span className="text-3xl font-extrabold">انتهى وقت الانتخابات!</span>
// //       )}
// //     </div>
// //   );
// // };

// // export default CountdownTimer;

// // // // CountdownTimer.js
// // // import React, { useState, useEffect } from "react";

// // // const CountdownTimer = ({ targetDate }) => {
// // //   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

// // //   useEffect(() => {
// // //     const timer = setInterval(() => {
// // //       setTimeLeft(calculateTimeLeft());
// // //     }, 1000);

// // //     return () => clearInterval(timer);
// // //   }, [targetDate]);

// // //   function calculateTimeLeft() {
// // //     const difference = +new Date(targetDate) - +new Date();
// // //     let timeLeft = {};

// // //     if (difference > 0) {
// // //       timeLeft = {
// // //         أيام: Math.floor(difference / (1000 * 60 * 60 * 24)),
// // //         ساعات: Math.floor((difference / (1000 * 60 * 60)) % 24),
// // //         دقائق: Math.floor((difference / 1000 / 60) % 60),
// // //         ثواني: Math.floor((difference / 1000) % 60),
// // //       };
// // //     } else {
// // //       timeLeft = { أيام: 0, ساعات: 0, دقائق: 0, ثواني: 0 };
// // //     }

// // //     return timeLeft;
// // //   }

// // //   return (
// // //     <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl shadow-2xl">
// // //       <h2 className="text-3xl font-bold text-white text-center mb-6">الوقت المتبقي للانتخابات</h2>
// // //       <div className="flex justify-center items-center space-x-4 text-white">
// // //         {Object.keys(timeLeft).length ? (
// // //           Object.entries(timeLeft).map(([unit, value]) => (
// // //             <div
// // //               key={unit}
// // //               className="flex flex-col items-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl px-6 py-4 w-32 text-center transform transition-all duration-300 hover:scale-110 hover:bg-opacity-30"
// // //             >
// // //               <span className="text-5xl font-extrabold block mb-2">{value}</span>
// // //               <span className="text-lg uppercase tracking-wider">{unit}</span>
// // //             </div>
// // //           ))
// // //         ) : (
// // //           <span className="text-3xl font-extrabold animate-pulse">انتهى وقت الانتخابات!</span>
// // //         )}
// // //       </div>
// // //       <div className="mt-8 text-center">
// // //         <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full transition-all duration-300 hover:bg-blue-100 hover:shadow-lg transform hover:scale-105">
// // //           شارك الآن
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CountdownTimer;

// // Countdown.js

// import React, { useState, useEffect } from 'react';
// import { Clock } from 'lucide-react'; // Make sure you have this icon package installed

// const Countdown = ({ startDate, endDate }) => {
//   const [countdown, setCountdown] = useState("");

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const now = new Date();
//       const start = new Date(startDate);
//       const end = new Date(endDate);
//       let timeDiff, message;

//       if (now < start) {
//         timeDiff = start - now;
//         message = "لم تبدأ الانتخابات، المتبقي على بدئها: ";
//       } else if (now >= start && now <= end) {
//         timeDiff = end - now;
//         message = "الوقت المتبقي لانتهاء الانتخابات: ";
//       } else {
//         setCountdown("لقد انتهت الانتخابات");
//         clearInterval(timer);
//         return;
//       }

//       const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
//       const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//       const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

//       setCountdown(`${message} ${days} أيام ${hours} ساعات ${minutes} دقائق ${seconds} ثوانٍ`);
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [startDate, endDate]);

//   return (
//     <div className="bg-gradient-to-r from-white to-gray-600 text-zait p-4 md:p-6 rounded-xl shadow-lg text-center">
//       <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">الوقت المتبقي</h2>
//       <div className="text-lg md:text-xl font-bold flex items-center justify-center space-x-2 md:space-x-4">
//         <Clock size={24} className="ml-2" />
//         <span>{countdown}</span>
//       </div>
//     </div>
//   );
// };

// export default Countdown;

// import React, { useState, useEffect } from 'react';
// import { Clock } from 'lucide-react'; // Ensure this package is installed

// const Countdown = () => {
//   const [countdown, setCountdown] = useState("");
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);

//   useEffect(() => {
//     // Fetch upcoming election data
//     const fetchUpcomingElection = async () => {
//       try {
//         const response = await fetch('http://localhost:4003/api/over/upcoming-election');
//         const data = await response.json();

//         if (response.ok) {
//           setStartDate(new Date(data.start_date));
//           setEndDate(new Date(data.end_date));
//         } else {
//           setCountdown("لا توجد انتخابات قادمة");
//         }
//       } catch (error) {
//         console.error('Error fetching upcoming election:', error);
//         setCountdown("حدث خطأ أثناء جلب البيانات");
//       }
//     };

//     fetchUpcomingElection();
//   }, []);

//   useEffect(() => {
//     if (!startDate || !endDate) return;

//     const timer = setInterval(() => {
//       const now = new Date();
//       let timeDiff, message;

//       if (now < startDate) {
//         timeDiff = startDate - now;
//         message = "لم تبدأ الانتخابات، المتبقي على بدئها: ";
//       } else if (now >= startDate && now <= endDate) {
//         timeDiff = endDate - now;
//         message = "الوقت المتبقي لانتهاء الانتخابات: ";
//       } else {
//         setCountdown("لقد انتهت الانتخابات");
//         clearInterval(timer);
//         return;
//       }

//       const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
//       const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//       const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

//       setCountdown(`${message} ${days} أيام ${hours} ساعات ${minutes} دقائق ${seconds} ثوانٍ`);
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [startDate, endDate]);

//   return (
//     <div className="bg-gradient-to-r from-white to-gray-600 text-zait p-4 md:p-6 rounded-xl shadow-lg text-center">
//       <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">الوقت المتبقي</h2>
//       <div className="text-lg md:text-xl font-bold flex items-center justify-center space-x-2 md:space-x-4">
//         <Clock size={24} className="ml-2" />
//         <span>{countdown}</span>
//       </div>
//     </div>
//   );
// };

// export default Countdown;

import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react"; // Ensure this package is installed

const Countdown = () => {
  const [countdown, setCountdown] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    // Fetch upcoming election data
    const fetchUpcomingElection = async () => {
      try {
        const response = await fetch(
          "http://localhost:4003/api/over/upcoming-election"
        );
        const data = await response.json();

        if (response.ok) {
          setStartDate(new Date(data.start_date));
          setEndDate(new Date(data.end_date));
        } else {
          setCountdown("لا توجد انتخابات قادمة");
        }
      } catch (error) {
        console.error("Error fetching upcoming election:", error);
        setCountdown("حدث خطأ أثناء جلب البيانات");
      }
    };

    fetchUpcomingElection();
  }, []);

  useEffect(() => {
    if (!startDate || !endDate) return;

    const timer = setInterval(() => {
      const now = new Date();
      let timeDiff, message;

      if (now < startDate) {
        timeDiff = startDate - now;
        message = "لم تبدأ الانتخابات، المتبقي على بدئها: ";
      } else if (now >= startDate && now <= endDate) {
        timeDiff = endDate - now;
        message = "الوقت المتبقي لانتهاء الانتخابات: ";
      } else {
        setCountdown("لقد انتهت الانتخابات");
        clearInterval(timer);
        return;
      }

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      setCountdown({
        days,
        hours,
        minutes,
        seconds,
        message,
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [startDate, endDate]);

  if (typeof countdown === "string") {
    return (
      <div className=" text-zait p-4 md:p-6 rounded-xl  text-center">
        <h2 className="text-xl mb-12 text-zait md:text-4xl font-bold md:mb-12 flex items-center justify-center">
          <Clock size={42} className="mr-2" />
          <span>الوقت المتبقي</span>
        </h2>
        <div className="text-lg md:text-xl font-bold">{countdown}</div>
      </div>
    );
  }

  return (
    <div className=" p-2 md:p-2 rounded-xl  text-center my-16 mx-20">
      <div className="flex justify-center text-center">
        <Clock size={42} className=" ml-2 text-4xl mb-4" />
        <h2 className="text-xl mb-4 text-zait md:text-4xl font-bold  md:mb-12  ">
          الوقت المتبقي
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
        <div className="bg-zait1  p-2 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 ">
          <h3 className="text-lg font-bold text-zait">أيام</h3>
          <p className="text-2xl font-bold">{countdown.days}</p>
        </div>
        <div className="bg-zait1  p-2 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 ">
          <h3 className="text-lg font-bold text-zait">ساعات</h3>
          <p className="text-2xl font-bold">{countdown.hours}</p>
        </div>
        <div className="bg-zait1  p-2 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 ">
          <h3 className="text-lg font-bold text-zait">دقائق</h3>
          <p className="text-2xl font-bold">{countdown.minutes}</p>
        </div>
        <div className="bg-zait1  p-2 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 ">
          <h3 className="text-lg font-bold text-zait">ثوانٍ</h3>
          <p className="text-2xl font-bold">{countdown.seconds}</p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;

// import React, { useState, useEffect } from 'react';
// import { Clock } from 'lucide-react'; // Ensure this package is installed

// const Countdown = () => {
//   const [countdown, setCountdown] = useState("");
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);

//   useEffect(() => {
//     // Fetch upcoming election data
//     const fetchUpcomingElection = async () => {
//       try {
//         const response = await fetch('http://localhost:4003/api/over/upcoming-election');
//         const data = await response.json();

//         if (response.ok) {
//           setStartDate(new Date(data.start_date));
//           setEndDate(new Date(data.end_date));
//         } else {
//           setCountdown("لا توجد انتخابات قادمة");
//         }
//       } catch (error) {
//         console.error('Error fetching upcoming election:', error);
//         setCountdown("حدث خطأ أثناء جلب البيانات");
//       }
//     };

//     fetchUpcomingElection();
//   }, []);

//   useEffect(() => {
//     if (!startDate || !endDate) return;

//     const timer = setInterval(() => {
//       const now = new Date();
//       let timeDiff, message;

//       if (now < startDate) {
//         timeDiff = startDate - now;
//         message = "لم تبدأ الانتخابات، المتبقي على بدئها: ";
//       } else if (now >= startDate && now <= endDate) {
//         timeDiff = endDate - now;
//         message = "الوقت المتبقي لانتهاء الانتخابات: ";
//       } else {
//         setCountdown("لقد انتهت الانتخابات");
//         clearInterval(timer);
//         return;
//       }

//       const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
//       const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//       const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

//       setCountdown({
//         days,
//         hours,
//         minutes,
//         seconds,
//         message
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [startDate, endDate]);

//   if (typeof countdown === 'string') {
//     return (
//       <div className="text-zait p-4 md:p-6 rounded-xl shadow-lg text-center bg-gradient-to-r from-white to-gray-200">
//         <h2 className="text-xl mb-12 text-zait md:text-4xl font-bold md:mb-12 flex items-center justify-center">
//           <Clock size={30} className="mr-2" />
//           <span>الوقت المتبقي</span>
//         </h2>
//         <div className="text-lg md:text-xl font-bold">{countdown}</div>
//       </div>
//     );
//   }

//   return (
//     <div className="p-4 md:p-6 rounded-xl bg-gradient-to-r from-white to-gray-200 text-center my-16 shadow-lg">
//       <div className="flex justify-center items-center mb-12">
//         <Clock size={42} className="text-4xl text-zait mr-4" />
//         <h2 className="text-xl text-zait md:text-4xl font-bold">الوقت المتبقي</h2>
//       </div>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         <div className="bg-zait1 p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
//           <h3 className="text-lg font-bold text-white">أيام</h3>
//           <p className="text-2xl font-bold text-white">{countdown.days}</p>
//         </div>
//         <div className="bg-zait1 p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
//           <h3 className="text-lg font-bold text-white">ساعات</h3>
//           <p className="text-2xl font-bold text-white">{countdown.hours}</p>
//         </div>
//         <div className="bg-zait1 p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
//           <h3 className="text-lg font-bold text-white">دقائق</h3>
//           <p className="text-2xl font-bold text-white">{countdown.minutes}</p>
//         </div>
//         <div className="bg-zait1 p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
//           <h3 className="text-lg font-bold text-white">ثوانٍ</h3>
//           <p className="text-2xl font-bold text-white">{countdown.seconds}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Countdown;
