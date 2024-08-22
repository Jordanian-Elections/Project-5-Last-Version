import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const ScrollingTicker = () => {
  const [localCount, setLocalCount] = useState(null);
  const [nationalCount, setNationalCount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const [localResponse, nationalResponse] = await Promise.all([
          axios.get("http://localhost:4003/api/voting/countvotedcircle"),
          axios.get("http://localhost:4003/api/voting/countvotedparty"),
        ]);

        console.log(localResponse.data, nationalResponse.data); // Log responses

        setLocalCount(localResponse.data.count);
        setNationalCount(nationalResponse.data.count);
        setLoading(false);
      } catch (err) {
        console.error(err); // Log error
        setError("فشل في جلب بيانات التصويت");
        setLoading(false);
      }
    };

    fetchCounts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center bg-blue-800 text-white py-4 rounded-lg w-full">
        <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        جار التحميل...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center bg-red-500 text-white py-4 rounded-lg w-full">
        <span className="mr-2">⚠️</span>
        {error}
      </div>
    );
  }

  return (
    <motion.div
      className="bg-zait text-white py-4 px-6 rounded-lg flex items-center justify-center w-full overflow-hidden h-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex items-center space-x-4 animate-ticker"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      >
        <span className="text-lg font-semibold">
          عدد المصوتين في القوائم المحلية:
        </span>
        <span className="text-2xl font-bold">{localCount}</span>
        <span className="mx-4">|</span>
        <span className="text-lg font-semibold">
          عدد المصوتين في القوائم الحزبية:{" "}
        </span>
        <span className="text-2xl font-bold">{nationalCount}</span>
      </motion.div>
    </motion.div>
  );
};

export default ScrollingTicker;
