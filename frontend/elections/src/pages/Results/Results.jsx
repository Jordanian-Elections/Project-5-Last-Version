// import React, { useState, useEffect } from "react";
// import { ChevronDown, ChevronUp } from "lucide-react";

// const ResultsPage = () => {
//   const [electionEnded, setElectionEnded] = useState(true);
//   const [localListsExpanded, setLocalListsExpanded] = useState(true);
//   const [partyListsExpanded, setPartyListsExpanded] = useState(true);

//   // Mock data - replace with actual API calls
//   const electionEndDate = new Date("2024-08-14");
//   const localLists = [
//     {
//       id: 1,
//       name: "القائمة المحلية أ",
//       candidates: ["مرشح 1", "مرشح 2", "مرشح 3"],
//     },
//     {
//       id: 2,
//       name: "القائمة المحلية ب",
//       candidates: ["مرشح 4", "مرشح 5", "مرشح 6"],
//     },
//   ];
//   const partyLists = [
//     { id: 1, name: "حزب التقدم", candidates: ["مرشح 7", "مرشح 8", "مرشح 9"] },
//     {
//       id: 2,
//       name: "حزب المستقبل",
//       candidates: ["مرشح 10", "مرشح 11", "مرشح 12"],
//     },
//   ];

//   useEffect(() => {
//     const checkElectionStatus = () => {
//       const now = new Date();
//       setElectionEnded(now > electionEndDate);
//     };

//     checkElectionStatus();
//     const timer = setInterval(checkElectionStatus, 60000); // Check every minute

//     return () => clearInterval(timer);
//   }, []);

//   if (!electionEnded) {
//     return (
//       <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-3xl font-bold text-gray-800 mb-4">
//             نتائج الانتخابات
//           </h1>
//           <p className="text-xl text-gray-600">
//             سيتم عرض النتائج بعد انتهاء الانتخابات في{" "}
//             {electionEndDate.toLocaleDateString("ar-JO")}
//           </p>
//           <p className="text-lg text-gray-500 mt-4">
//             نقدر صبركم ونتطلع إلى مشاركتكم في هذه اللحظات المهمة من العملية
//             الانتخابية. نؤكد لكم أننا سنعمل على تقديم النتائج بأعلى درجات الدقة
//             والشفافية.
//           </p>
//         </div>
//       </div>
//     );
//   }

//   const ExpandableSection = ({ title, items, expanded, setExpanded }) => (
//     <div className="mb-8">
//       <button
//         onClick={() => setExpanded(!expanded)}
//         className="w-full flex justify-between items-center bg-[#01332A] text-white p-4 rounded-t-lg focus:outline-none"
//       >
//         <h2 className="text-xl font-bold">{title}</h2>
//         {expanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
//       </button>
//       {expanded && (
//         <div className="bg-white p-4 rounded-b-lg shadow-md">
//           {items.map((item) => (
//             <div key={item.id} className="mb-4 last:mb-0">
//               <h3 className="text-lg font-semibold text-[#01332A] mb-2">
//                 {item.name}
//               </h3>
//               <ul className="list-disc list-inside">
//                 {item.candidates.map((candidate, index) => (
//                   <li key={index} className="text-gray-700">
//                     {candidate}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-4xl font-bold text-center text-[#01332A] mb-8">
//           نتائج الانتخابات الأردنية
//         </h1>

//         <p className="text-lg text-gray-700 mb-6">
//           نشكركم على مشاركتكم الفعالة في العملية الانتخابية. نحن ملتزمون بتقديم
//           نتائج دقيقة وشفافة تعكس إرادة الشعب الأردني. أدناه تجدون تفاصيل
//           القوائم المحلية وقوائم الأحزاب التي حصلت على أعلى الأصوات في
//           الانتخابات.
//         </p>

//         <ExpandableSection
//           title="القوائم المحلية الفائزة"
//           items={localLists}
//           expanded={localListsExpanded}
//           setExpanded={setLocalListsExpanded}
//         />

//         <ExpandableSection
//           title="قوائم الأحزاب الفائزة"
//           items={partyLists}
//           expanded={partyListsExpanded}
//           setExpanded={setPartyListsExpanded}
//         />
//       </div>
//     </div>
//   );
// };

// export default ResultsPage;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const ElectionResults = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4003/candidates/similar"
        );
        setResults(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching election results");
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-blue-600" />
      </div>
    );

  if (error)
    return (
      <div className="text-center mt-8 text-red-600">
        {error}. Please try refreshing the page.
      </div>
    );

  return (
    <>
      <Header />
      <div className="container mx-auto p-4 mb-20 mt-6">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-700">
          نتائج الانتخابات
        </h1>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 border-b border-gray-400">
              <th className="p-3 text-left text-gray-700">City</th>
              <th className="p-3 text-left text-gray-700">Circle</th>
              <th className="p-3 text-left text-gray-700">List</th>
              <th className="p-3 text-left text-gray-700">Allocated Seats</th>
              <th className="p-3 text-left text-gray-700">List Weight</th>
              <th className="p-3 text-left text-gray-700">Whole Number Seat</th>
              <th className="p-3 text-left text-gray-700">Decimal Part Seat</th>
              <th className="p-3 text-left text-gray-700">List Votes</th>
              <th className="p-3 text-left text-gray-700">Threshold</th>
              <th className="p-3 text-left text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {results.flatMap((cityResult, cityIndex) =>
              cityResult.passingCandidates.map((candidate, candidateIndex) => (
                <tr
                  key={`${cityIndex}-${candidateIndex}`}
                  className={
                    candidateIndex % 2 === 0
                      ? "bg-gray-50 hover:bg-gray-100"
                      : "bg-white hover:bg-gray-50"
                  }
                >
                  <td className="p-3 text-gray-800">{cityResult.city}</td>
                  <td className="p-3 text-gray-800">{cityResult.circle}</td>
                  <td className="p-3 text-gray-800 font-medium">
                    {candidate.list}
                  </td>
                  <td className="p-3 text-center">
                    {candidate.allocatedSeats}
                  </td>
                  <td className="p-3 text-center">
                    {candidate.listWeight.toFixed(2)}
                  </td>
                  <td className="p-3 text-center">
                    {candidate.wholeNumberSeat}
                  </td>
                  <td className="p-3 text-center">
                    {candidate.decimalPartSeat.toFixed(2)}
                  </td>
                  <td className="p-3 text-center">{candidate.list_votes}</td>
                  <td className="p-3 text-center">
                    {candidate.threshold.toFixed(2)}
                  </td>
                  <td className="p-3 text-center">
                    <span
                      className={`px-2 py-1 rounded ${
                        candidate.status === "pass"
                          ? "bg-green-200 text-green-800"
                          : "bg-red-200 text-red-800"
                      }`}
                    >
                      {candidate.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default ElectionResults;
