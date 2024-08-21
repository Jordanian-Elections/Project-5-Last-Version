import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const VotePage = () => {
  const [parties, setParties] = useState([]);
  const [selectedParty, setSelectedParty] = useState("");
  const [selectedWhitePaper, setSelectedWhitePaper] = useState(false); // New state for white paper
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasVoted, setHasVoted] = useState(false);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);

  const partiesPerPage = 6;

  useEffect(() => {
    const nationalId = sessionStorage.getItem("national_id");

    if (nationalId) {
      axios
        .get(`http://localhost:4003/api/voting/users`)
        .then((response) => {
          const user = response.data.find(
            (user) => user.national_id.toString() === nationalId
          );
          if (user) {
            setUser(user);
          } else {
            setError("الرقم الوطني غير موجود.");
          }
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
          setError("فشل في استرجاع بيانات المستخدم.");
        });
    } else {
      setError("الرقم الوطني غير موجود في التخزين.");
    }

    axios
      .get("http://localhost:4003/parties")
      .then((response) => {
        setParties(response.data);
      })
      .catch((error) => {
        console.error("Error fetching parties:", error);
        setError("فشل في استرجاع الأحزاب.");
      });
  }, []);

  const handleVote = () => {
    setShowConfirmPopup(true);
  };

  const confirmVote = () => {
    setShowConfirmPopup(false);
    axios
      .patch("http://localhost:4003/votedparty", {
        user,
        candidate: {
          party: selectedParty || null,
          whitePaper: selectedWhitePaper,
        },
      })
      .then((response) => {
        setSuccess("تم تسجيل صوتك بنجاح!");
        setError(null);
        setHasVoted(true);
      })
      .catch((error) => {
        console.error("Error recording vote:", error);
        setError("فشل في تسجيل الصوت.");
      });
  };

  const cancelVote = () => {
    setShowConfirmPopup(false);
    setError("تم إلغاء التصويت.");
  };

  const indexOfLastParty = currentPage * partiesPerPage;
  const indexOfFirstParty = indexOfLastParty - partiesPerPage;
  const currentParties = parties.slice(indexOfFirstParty, indexOfLastParty);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-200 text-right pb-20" dir="rtl">
        {hasVoted ? (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-green-50 p-8 rounded-lg shadow-lg w-80 max-w-lg text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                تم تسجيل صوتك بنجاح!
              </h2>
              <p className="text-gray-600 mb-4">
                شكراً لك على مشاركتك في الانتخابات.
              </p>
              <Link to="/VotingApp">
                <button className="px-6 py-3 bg-[#3F795E] text-white rounded-full shadow-lg hover:bg-[#2c5e5f] transition duration-300">
                  العودة إلى الصفحة السابقة
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex flex-row items-center p-6">
              <h1 className="text-4xl font-bold mb-4 text-gray-900 mx-auto">
                نظام الانتخاب للقائمة الحزبية
              </h1>
            </div>

            <div className="p-6 mb-6 bg-white mx-10 rounded-lg shadow">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                معلومات الناخب:
              </h2>
              <div className="p-4 border-2 border-gray-300 rounded-lg shadow-lg flex flex-col items-center bg-white">
                <div className="w-24 h-24 bg-gray-200 rounded-full mb-4">
                  <img
                    src="https://cdn2.iconfinder.com/data/icons/office-extras/512/Name_Tag-512.png"
                    alt=""
                  />
                </div>
                <p className="text-lg font-bold">{user.name}</p>
                <p className="text-sm text-gray-600">
                  الرقم الوطني: {user.national_id}
                </p>
                <p className="text-sm text-gray-600">المدينة : {user.city}</p>
                <p className="text-sm text-gray-600">الدائرة: {user.circle}</p>
              </div>
            </div>

            <p className="text-lg px-6 mb-6 mx-10">
              صوتك هو قوة التغيير في انتخابات النواب. اختر الحزب الذي تريد
              التصويت له أو اختر الورقة البيضاء.
            </p>

            {error && (
              <div className="bg-red-100 text-red-700 p-4 mb-6 rounded-lg shadow-lg mx-10">
                {error}
              </div>
            )}
            {success && (
              <div className="bg-green-100 text-green-700 p-4 mb-6 rounded-lg shadow-lg mx-10">
                {success}
              </div>
            )}

            <div className="px-6 mb-6 mx-10">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                اختر الحزب للتصويت
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentParties.map((party, index) => (
                  <div
                    key={index}
                    className={`p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
                      selectedParty === party.party
                        ? "bg-[#3f795e] text-white"
                        : "bg-white hover:bg-[#f3f3f3]"
                    }`}
                    onClick={() => setSelectedParty(party.party)}
                  >
                    <h3 className="text-lg font-semibold mb-2">
                      {party.party}
                    </h3>
                    <p className="text-sm">
                      {party.description || "وصف الحزب غير متوفر"}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-4">
                {Array.from({
                  length: Math.ceil(parties.length / partiesPerPage),
                }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => paginate(index + 1)}
                    className={`mx-1 px-3 py-1 rounded ${
                      currentPage === index + 1
                        ? "bg-[#3F795E] text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center mb-6 mx-10">
              <input
                type="checkbox"
                id="whitePaper"
                checked={selectedWhitePaper}
                onChange={() => setSelectedWhitePaper(!selectedWhitePaper)}
                className="mr-2"
              />
              <label
                htmlFor="whitePaper"
                className="text-lg font-semibold text-gray-800"
              >
                التصويت بالورقة البيضاء
              </label>
            </div>

            <div className="flex justify-center mb-12">
              <button
                onClick={handleVote}
                className={`px-6 py-3 rounded-full transition duration-300 shadow-lg text-lg font-semibold ${
                  selectedParty || selectedWhitePaper
                    ? "bg-[#3F795E] text-white hover:bg-[#2c5e5f]"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                disabled={!selectedParty && !selectedWhitePaper}
              >
                {selectedParty || selectedWhitePaper
                  ? "تأكيد التصويت"
                  : "الرجاء اختيار حزب أو الورقة البيضاء"}
              </button>
            </div>

            {/* Confirmation Popup */}
            {showConfirmPopup && (
              <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-80 max-w-md mx-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    هل أنت متأكد من التصويت بـ{" "}
                    {selectedWhitePaper ? "الورقة البيضاء" : selectedParty}؟
                  </h3>
                  <div className="flex justify-around">
                    <button
                      onClick={confirmVote}
                      className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                    >
                      نعم
                    </button>
                    <button
                      onClick={cancelVote}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                      لا
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default VotePage;
