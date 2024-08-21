import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ScrollingTicker.css"; // Import the custom CSS file for scrolling

const ScrollingTicker = () => {
  const [localCount, setLocalCount] = useState(null);
  const [partyCount, setPartyCount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVotingCounts = async () => {
      try {
        const localResponse = await axios.get(
          "http://localhost:4003/api/voting/countvotedcircle"
        );
        const partyResponse = await axios.get(
          "http://localhost:4003/api/voting/countvotedparty"
        );

        setLocalCount(localResponse.data.count);
        setPartyCount(partyResponse.data.count);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch voting counts");
        setLoading(false);
      }
    };

    fetchVotingCounts();
  }, []);

  if (loading) {
    return <div className="text-center text-lg text-gray-500">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-lg text-red-500">{error}</div>;
  }

  return (
    <div className="ticker-wrapper">
      <div className="ticker">
        <p className="ticker-text">
          عدد المصوتين في القائمة المحلية: {localCount} | عدد المصوتين في
          القائمة الحزبية: {partyCount}
        </p>
      </div>
    </div>
  );
};

export default ScrollingTicker;
