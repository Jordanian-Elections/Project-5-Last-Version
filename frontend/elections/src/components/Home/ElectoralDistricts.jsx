// // ElectoralDistricts.js
// import React from "react";

// const ElectoralDistricts = () => {
//   const electoralDistricts = [
//     "العاصمة / الدائرة الاولى",
//     "العاصمة / الدائرة الثانية",
//     "العاصمة / الدائرة الثالثة",
//     "اربد / الدائرة الاولى",
//     "اربد / الدائرة الثانية",
//     "المفرق",
//     "البلقاء",
//     "الزرقاء",
//     "جرش",
//     "عجلون",
//     "مادبا",
//     "الكرك",
//     "الطفيلة",
//     "معان",
//     "العقبة",
//     "بدو الشمال",
//     "بدو الوسط",
//     "بدو الجنوب"
//   ];

//   return (
//     <section className="mb-12">
//       <h2 className="text-3xl font-bold mb-6 text-center text-jordanian-red">الدوائر الانتخابية</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {electoralDistricts.map((district, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center text-center transform hover:scale-105 transition-transform duration-300 ease-in-out"
//           >
//             <h3 className="text-xl font-bold text-jordanian-black mb-2">{district}</h3>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ElectoralDistricts;










// ElectoralDistricts.js
import React from "react";

const ElectoralDistricts = () => {
  const electoralDistricts = [
    "العاصمة / الدائرة الاولى",
    "العاصمة / الدائرة الثانية",
    "العاصمة / الدائرة الثالثة",
    "اربد / الدائرة الاولى",
    "اربد / الدائرة الثانية",
    "المفرق",
    "البلقاء",
    "الزرقاء",
    "جرش",
    "عجلون",
    "مادبا",
    "الكرك",
    "الطفيلة",
    "معان",
    "العقبة",
    "بدو الشمال",
    "بدو الوسط",
    "بدو الجنوب"
  ];

  return (
    <section className="mb-12">
      <h2 className="text-4xl font-extrabold mb-8 text-center text-jordanian-red">
        الدوائر الانتخابية
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {electoralDistricts.map((district, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-[#d46666] to-[#a43e3e] shadow-2xl rounded-xl p-8 flex flex-col justify-center items-center text-center transform hover:scale-110 transition-transform duration-300 ease-in-out"
          >
            <h3 className="text-2xl font-bold text-white mb-2">{district}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ElectoralDistricts;
