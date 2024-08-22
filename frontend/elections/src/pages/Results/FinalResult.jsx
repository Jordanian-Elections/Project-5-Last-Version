import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Award, MapPin, Star } from "lucide-react";

const FinalResult = () => {
  const [electionResults, setElectionResults] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCircle, setSelectedCircle] = useState(null);
  const [expandedCircle, setExpandedCircle] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const [electionRes, candidatesRes] = await Promise.all([
          axios.get("http://localhost:5000/candidates/similar"),
          axios.get("http://localhost:5000/candidates/passedf")
        ]);
        setElectionResults(electionRes.data);
        setCandidates(candidatesRes.data);
        setLoading(false);
      } catch (err) {
        setError("حدث خطأ أثناء جلب البيانات");
        setLoading(false);
      }
    };
    fetchResults();
  }, []);

  if (loading) return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-zait"></div>
    </div>
  );

  if (error) return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">خطأ!</strong>
        <span className="block sm:inline"> {error}</span>
      </div>
    </div>
  );

  // Extract unique circles for the navigation
  const circles = [...new Set(electionResults.map(result => result.circle))];

  // Filter results based on selected circle
  const filteredResults = selectedCircle
    ? electionResults.filter(result => result.circle === selectedCircle)
    : electionResults;

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-12">
      <motion.h1
        className="text-4xl font-bold text-center text-zait mb-8 my-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Star className="inline-block mr-2 text-yellow-500" size={36} /> {/* Icon */}
        نتائج الانتخابات
      </motion.h1>

      {/* Navigation Bar for Circles */}
      <motion.nav
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ul className="flex space-x-4 justify-center">
          <li>
            <button
              className={`px-4 py-2 mx-6 rounded ${!selectedCircle ? 'bg-zait hover:bg-gray-600 text-white' : 'bg-gray-400 text-white hover:bg-gray-600'}`}
              onClick={() => setSelectedCircle(null)}
            >
              الكل
            </button>
          </li>
          {circles.map((circle, index) => (
            <li key={index}>
              <button
                className={`px-4 py-2 rounded ${selectedCircle === circle ? 'bg-zait hover:bg-gray-600 text-white' : 'bg-gray-400 text-white hover:bg-gray-600'}`}
                onClick={() => setSelectedCircle(circle)}
              >
                {circle}
              </button>
            </li>
          ))}
        </ul>
      </motion.nav>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {filteredResults.map((cityResult, index) => (
          <motion.div
            key={index}
            className="bg-zait1 rounded-lg shadow-lg p-6 "
            // whileHover={{ scale: 1.05 }}
            // whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.h2
              className="text-3xl font-bold text-gray-800 mb-4 flex justify-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <MapPin className="inline-block ml-2 text-zait mb-10" size={32} /> {cityResult.city} - {cityResult.circle}
            </motion.h2>
            <div className="mb-4">
              <p className="text-lg font-medium text-zait bg-gray-200 w-48 rounded-xl p-2 opacity-80">إجمالي المقاعد: <span className="font-bold text-gray-800">{cityResult.totalSeats}</span></p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={cityResult.passingCandidates}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="list" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="allocatedSeats" fill="#3F7A5E" name="المقاعد المخصصة" />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">المرشحون</h3>
            <button
              className="my-4 bg-gray-600 text-white px-4 py-2 rounded-md "
              onClick={() => setExpandedCircle(expandedCircle === cityResult.city ? null : cityResult.city)}
              >
              {expandedCircle === cityResult.city ? "إخفاء التفاصيل" : "عرض التفاصيل"}
            </button>
                {expandedCircle === cityResult.city && (
                  <div className=" p-4 bg-gray-100 rounded-md">
              <ul className="space-y-4 ">
                {cityResult.passingCandidates.map((candidate, candidateIndex) => (
                  <motion.li
                    key={candidateIndex}
                    className="bg-gray-50 rounded-lg p-4 shadow-md transition-transform transform hover:scale-105"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center mb-2">
                      <Award className="text-yellow-500 mr-3" size={36} />
                      <span className="text-2xl font-bold text-zait">{candidate.list}</span>
                    </div>
                    <li key={candidateIndex} className="bg-white rounded-lg p-6 shadow-md border border-gray-200 transition-transform transform hover:scale-105">
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <span className="text-gray-600 mr-2">📊</span>
                          <p className="text-gray-800">
                            إجمالي المقاعد: <span className="font-bold">{candidate.allocatedSeats}</span>
                          </p>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-600 mr-2">⚖️</span>
                          <p className="text-gray-800">
                            وزن القائمة: <span className="font-bold">{candidate.listWeight.toFixed(2)}</span>
                          </p>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-600 mr-2">🔢</span>
                          <p className="text-gray-800">
                            مقعد العدد الصحيح: <span className="font-bold">{candidate.wholeNumberSeat}</span>
                          </p>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-600 mr-2">🔢</span>
                          <p className="text-gray-800">
                            جزء المقعد العشري: <span className="font-bold">{candidate.decimalPartSeat.toFixed(2)}</span>
                          </p>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-600 mr-2">🗳️</span>
                          <p className="text-gray-800">
                            أصوات القائمة: <span className="font-bold">{candidate.list_votes}</span>
                          </p>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-600 mr-2">📉</span>
                          <p className="text-gray-800">
                            الحد الأدنى: <span className="font-bold">{candidate.threshold.toFixed(2)}</span>
                          </p>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-600 mr-2">✅</span>
                          <p className="text-gray-800">
                            الحالة: <span className={`font-bold ${candidate.passStatus ? 'text-green-500' : 'text-red-500'}`}>{candidate.passStatus ? 'نجح' : 'فشل'}</span>
                          </p>
                        </div>
                      </div>
                    </li>
                  </motion.li>
                ))}
              </ul>
                  </div>
                )}
                <div className="min-h-screen bg-gray-100 py-10">
      <h2 className="text-3xl font-bold text-center mb-10">نتائج الانتخابات</h2>
      <div className="container mx-auto px-4">
        {candidates.map((result, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 mb-6 transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <div className="text-lg font-semibold text-gray-700">
              {result.city} - {result.circle} - {result.list || result.type}
            </div>
            <div className="mt-2 text-sm text-gray-600">
              مجموع المقاعد: {result.totalSeats || 1}
            </div>
            <div className="mt-4">
              {result.candidates ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {result.candidates.map((candidate) => (
                    <div
                      key={candidate.name}
                      className="p-4 border rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <div className="text-gray-800 font-medium">
                        {candidate.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        الأصوات: {candidate.candidate_votes} - المقاعد المخصصة:{" "}
                        {candidate.allocatedSeats}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 border rounded-lg bg-blue-50">
                  <div className="text-gray-800 font-medium">
                    الفائز: {result.winner.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    الأصوات: {result.winner.candidate_votes} - المقاعد المخصصة:
                    1
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FinalResult;