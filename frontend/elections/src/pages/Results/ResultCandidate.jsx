import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const CandidatesList = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4003/candidates/passedf"
        );
        setCandidates(response.data);
      } catch (error) {
        console.error("Error fetching candidates", error);
      }
    };

    fetchCandidates();
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-12">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          نتائج الانتخابات
        </h2>
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-md p-4 mb-8 overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 text-center">
              <thead>
                <tr className="bg-blue-100">
                  <th className="px-2 py-2 text-gray-600 font-medium border-b">
                    المدينة
                  </th>
                  <th className="px-2 py-2 text-gray-600 font-medium border-b">
                    الدائرة
                  </th>
                  <th className="px-2 py-2 text-gray-600 font-medium border-b">
                    القائمة
                  </th>
                  <th className="px-2 py-2 text-gray-600 font-medium border-b">
                    الاسم
                  </th>
                  <th className="px-2 py-2 text-gray-600 font-medium border-b">
                    الأصوات
                  </th>
                  <th className="px-2 py-2 text-gray-600 font-medium border-b">
                    المقاعد المخصصة
                  </th>
                </tr>
              </thead>
              <tbody>
                {candidates.map((result, index) =>
                  result.candidates ? (
                    result.candidates.map((candidate, candidateIndex) => (
                      <tr
                        key={`${index}-${candidateIndex}`}
                        className="hover:bg-blue-50"
                      >
                        {candidateIndex === 0 && (
                          <>
                            <td
                              className="px-2 py-2 border-b text-gray-700"
                              rowSpan={result.candidates.length}
                            >
                              {result.city}
                            </td>
                            <td
                              className="px-2 py-2 border-b text-gray-700"
                              rowSpan={result.candidates.length}
                            >
                              {result.circle}
                            </td>
                            <td
                              className="px-2 py-2 border-b text-gray-700"
                              rowSpan={result.candidates.length}
                            >
                              {result.list || result.type}
                            </td>
                          </>
                        )}
                        <td className="px-2 py-2 border-b text-gray-700">
                          {candidate.name}
                        </td>
                        <td className="px-2 py-2 border-b text-gray-700">
                          {candidate.candidate_votes}
                        </td>
                        <td className="px-2 py-2 border-b text-gray-700">
                          {candidate.allocatedSeats}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr key={index} className="hover:bg-blue-50">
                      <td className="px-2 py-2 border-b text-gray-700">
                        {result.city}
                      </td>
                      <td className="px-2 py-2 border-b text-gray-700">
                        {result.circle}
                      </td>
                      <td className="px-2 py-2 border-b text-gray-700">
                        {result.list || result.type}
                      </td>
                      <td className="px-2 py-2 border-b text-gray-700">
                        {result.winner.name}
                      </td>
                      <td className="px-2 py-2 border-b text-gray-700">
                        {result.winner.candidate_votes}
                      </td>
                      <td className="px-2 py-2 border-b text-gray-700">1</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CandidatesList;
