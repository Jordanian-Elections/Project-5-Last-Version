import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import OcrComponent from "./Imagetotext";

function ListVotes() {
  const [cities, setCities] = useState([]);
  const [selectedList, setSelectedList] = useState(null);
  const [selectedCandidates, setSelectedCandidates] = useState([]);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showReturnPopup, setShowReturnPopup] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isBlankPaper, setIsBlankPaper] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const nationalId = sessionStorage.getItem("national_id");
    if (nationalId) {
      axios
        .get("http://localhost:4003/api/voting/users")
        .then((response) => {
          const foundUser = response.data.find(
            (user) => user.national_id.toString() === nationalId
          );
          if (foundUser) {
            setUser(foundUser);
            fetchCandidates(foundUser.city, foundUser.circle);
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
  }, []);

  const fetchCandidates = async (city, circle) => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "http://localhost:4003/api/voting/candidates-by-city"
      );
      setCities(
        response.data
          .filter((c) => c.city === city)
          .map((c) => ({
            ...c,
            circles: c.circles.filter((cir) => cir.circle === circle),
          }))
      );
    } catch (error) {
      console.error("Error fetching candidates:", error);
      setError("فشل في جلب البيانات. يرجى المحاولة مرة أخرى.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleListChange = (e) => {
    setSelectedList(e.target.value);
    setSelectedCandidates([]);
  };

  const toggleCandidate = (candidate) => {
    setSelectedCandidates((prev) =>
      prev.some(
        (c) => c.candidate_national_id === candidate.candidate_national_id
      )
        ? prev.filter(
            (c) => c.candidate_national_id !== candidate.candidate_national_id
          )
        : [...prev, candidate]
    );
  };

  const handleVote = async () => {
    try {
      await axios.patch("http://localhost:4003/api/voting/votedcircle", {
        user: user,
        candidate: {
          candidate_national_ids: isBlankPaper
            ? []
            : selectedCandidates.map((c) => c.candidate_national_id),
          circle_list: isBlankPaper ? "" : selectedList,
          city: user.city,
          circle: user.circle,
        },
      });
      setShowConfirmPopup(false);
      setShowSuccessPopup(true);
    } catch (error) {
      console.error("Error voting:", error);
      alert("خطأ في تسجيل التصويت. يرجى المحاولة مرة أخرى.");
    }
  };

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
    setShowReturnPopup(true);
  };

  const handleReturn = () => {
    setShowReturnPopup(false);
    navigate("/VotingApp");
  };

  if (isLoading)
    return <div className="text-center mt-8 text-white">جاري التحميل...</div>;
  if (error)
    return <div className="text-center mt-8 text-red-500">{error}</div>;

  return (
    <>
      <Header />

      <div className="bg-gray-100 min-h-screen pb-10 pt-10">
        <div className="flex flex-row items-center p-6">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 mx-auto">
            نظام الانتخاب للقوائم المحلية
          </h1>
        </div>

        <div className="p-6 mb-6 bg-white mx-10 rounded-lg shadow-lg w-[50%] mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">
            معلومات الناخب
          </h2>
          <div className="flex items-center space-x-6 p-6 bg-zait1 border border-gray-200 rounded-lg shadow-md  ">
            <div className="w-32 h-32">
              <img
                src="https://glplaw.com/wp-content/uploads/2021/03/1.png"
                alt="User Icon"
                className="w-full h-full object-cover rounded-full shadow-lg"
              />
            </div>
            <div className="flex flex-col space-y-3 px-20">
              <p className="text-2xl font-bold text-gray-900">{user.name}</p>
              <p className="text-base text-gray-700 font-medium">
                الرقم الوطني: {user.national_id}
              </p>
              <p className="text-base text-gray-700 font-medium">
                المدينة: {user.city}
              </p>
              <p className="text-base text-gray-700 font-medium">
                الدائرة: {user.circle}
              </p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-6 mb-6 bg-white mx-10 rounded-lg shadow w-[50%] mx-auto mb-10"
        >
          <div className="bg-zait1 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              التصويت
            </h2>

            {/* City and Circle Info */}
            {selectedList && (
              <div className="p-4 mb-6 border border-gray-300 rounded-md shadow-md">
                <h3 className="text-lg font-semibold mb-2">
                  معلومات المدينة والدائرة
                </h3>
                <p className="text-sm text-gray-700">المدينة: {user.city}</p>
                <p className="text-sm text-gray-700">الدائرة: {user.circle}</p>
              </div>
            )}

            {/* List Selector */}
            {cities.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6"
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  اختر القائمة
                </label>
                <select
                  value={selectedList || ""}
                  onChange={handleListChange}
                  className="block w-full pl-3 pr-3  py-2 text-base border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#3F795E] sm:text-sm"
                >
                  {cities[0].circles[0].lists.map((list) => (
                    <option key={list.list} value={list.list}>
                      {list.list}
                    </option>
                  ))}
                </select>
              </motion.div>
            )}

            {/* Candidate Selector */}
            {selectedList && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6"
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  اختر المرشحين
                </label>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {cities[0].circles[0].lists
                    .find((list) => list.list === selectedList)
                    ?.candidates.map((candidate) => (
                      <div
                        key={candidate.candidate_national_id}
                        className={`p-4 border-2 rounded-md cursor-pointer ${
                          selectedCandidates.some(
                            (c) =>
                              c.candidate_national_id ===
                              candidate.candidate_national_id
                          )
                            ? "bg-[#3f795e69] border-bg-[#3F795E]"
                            : "bg-white border-gray-300"
                        }`}
                        onClick={() => toggleCandidate(candidate)}
                      >
                        <div className="font-semibold">{candidate.name}</div>
                        <div className="text-gray-600 text-sm">
                          {candidate.description}
                        </div>
                      </div>
                    ))}
                </div>
              </motion.div>
            )}

            {/* Blank Paper Option */}
            <OcrComponent />

            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="blankPaper"
                checked={isBlankPaper}
                onChange={() => setIsBlankPaper(!isBlankPaper)}
                className="h-4 w-4 text-[#3F795E] focus:ring-[#3F795E] border-gray-300 rounded"
              />
              <label
                htmlFor="blankPaper"
                className="ml-2 text-sm font-medium text-gray-700 px-3"
              >
                ورقة بيضاء
              </label>
            </div>

            <button
              onClick={() => setShowConfirmPopup(true)}
              className="w-full bg-[#3F795E] text-white py-2 px-4 rounded-md hover:bg-[#2f4f47]"
            >
              إرسال التصويت
            </button>
          </div>
        </motion.div>

        {/* Confirm Vote Dialog */}
        <Transition appear show={showConfirmPopup} as={Fragment}>
          <Dialog
            as="div"
            open={showConfirmPopup}
            onClose={() => setShowConfirmPopup(false)}
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <Dialog.Panel className="max-w-sm rounded bg-white p-6">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-semibold text-gray-900"
                >
                  تأكيد التصويت
                </Dialog.Title>
                <div className="mt-4">
                  <p className="text-gray-700">
                    هل أنت متأكد من أنك تريد إرسال التصويت؟ تأكد من مراجعة جميع
                    الخيارات قبل الإرسال.
                  </p>
                </div>
                <div className="mt-6 flex space-x-4">
                  <button
                    onClick={() => setShowConfirmPopup(false)}
                    className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400"
                  >
                    إلغاء
                  </button>
                  <button
                    onClick={handleVote}
                    className="bg-[#3F795E] text-white py-2 px-4 rounded-md hover:bg-[#2f4f47]"
                  >
                    نعم، إرسال
                  </button>
                </div>
              </Dialog.Panel>
            </div>
          </Dialog>
        </Transition>

        {/* Success Dialog */}
        <Transition appear show={showSuccessPopup} as={Fragment}>
          <Dialog
            as="div"
            open={showSuccessPopup}
            onClose={() => setShowSuccessPopup(false)}
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <Dialog.Panel className="max-w-sm rounded bg-white p-6">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-semibold text-gray-900"
                >
                  تم التصويت بنجاح
                </Dialog.Title>
                <div className="mt-4">
                  <p className="text-gray-700">
                    تم تسجيل تصويتك بنجاح. شكرًا لمشاركتك!
                  </p>
                </div>
                <div className="mt-6">
                  <button
                    onClick={closeSuccessPopup}
                    className="w-full bg-[#3F795E] text-white py-2 px-4 rounded-md hover:bg-[#2f4f47]"
                  >
                    العودة إلى الصفحة الرئيسية
                  </button>
                </div>
              </Dialog.Panel>
            </div>
          </Dialog>
        </Transition>

        {/* Return Popup */}
        <Transition appear show={showReturnPopup} as={Fragment}>
          <Dialog
            as="div"
            open={showReturnPopup}
            onClose={() => setShowReturnPopup(false)}
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <Dialog.Panel className="max-w-sm rounded bg-white p-6">
                <div className="mt-4">
                  <p className="text-gray-700">
                    هل تريد العودة إلى الصفحة الرئيسية؟
                  </p>
                </div>
                <div className="mt-6 flex space-x-4">
                  <button
                    onClick={() => setShowReturnPopup(false)}
                    className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400"
                  >
                    إلغاء
                  </button>
                  <button
                    onClick={handleReturn}
                    className="bg-[#3F795E] text-white py-2 px-4 rounded-md hover:bg-[#2f4f47]"
                  >
                    نعم، العودة
                  </button>
                </div>
              </Dialog.Panel>
            </div>
          </Dialog>
        </Transition>

        <Footer />
      </div>
    </>
  );
}

export default ListVotes;
