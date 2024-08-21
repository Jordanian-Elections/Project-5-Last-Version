// // ImportantDates.js
// import React from "react";

// const ImportantDates = ({ importantDates }) => (
//   <section className="mb-12">
//     <h2 className="text-3xl font-bold mb-6 text-center text-jordanian-red">التواريخ المهمة</h2>
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {importantDates.map((date, index) => (
//         <div key={index} className="bg-white shadow-lg rounded-lg p-6">
//           <h3 className="text-xl font-bold text-jordanian-black mb-2">{date.event}</h3>
//           <p className="text-gray-600">{date.date}</p>
//         </div>
//       ))}
//     </div>
//   </section>
// );

// export default ImportantDates;

// ImportantDates.js
import React from "react";

const ImportantDates = ({ importantDates }) => (
  <section className="mb-12">
    <h2 className="text-4xl font-extrabold mb-8 text-center text-jordanian-red">
      التواريخ المهمة
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {importantDates.map((date, index) => (
        <div
          key={index}
          className="bg-gradient-to-b from-white to-gray-100 shadow-2xl rounded-xl p-8 transform hover:-translate-y-2 hover:shadow-3xl transition-all duration-300 ease-in-out"
        >
          <h3 className="text-2xl font-bold text-jordanian-black mb-3">
            {date.event}
          </h3>
          <p className="text-lg text-gray-800">{date.date}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ImportantDates;
