import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

function ListVotes() {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedCircle, setSelectedCircle] = useState(null);
  const [selectedList, setSelectedList] = useState(null);
  const [selectedCandidates, setSelectedCandidates] = useState([]);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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

    fetchCandidates();
  }, []);

  const fetchCandidates = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "http://localhost:4003/api/voting/candidates-by-city"
      );
      setCities(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching candidates:", error);
      setError("فشل في جلب البيانات. يرجى المحاولة مرة أخرى.");
      setIsLoading(false);
    }
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    setSelectedCircle(null);
    setSelectedList(null);
    setSelectedCandidates([]);
  };

  const handleCircleChange = (e) => {
    setSelectedCircle(e.target.value);
    setSelectedList(null);
    setSelectedCandidates([]);
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
          candidate_national_ids: selectedCandidates.map(
            (c) => c.candidate_national_id
          ),
          circle_list: selectedList,
          circle: selectedCircle,
          city: selectedCity,
        },
      });
      setShowConfirmPopup(false);
      setShowSuccessPopup(true);
      alert("تم تسجيل صوتك بنجاح");
    } catch (error) {
      console.error("Error voting:", error);
      alert("خطأ في تسجيل التصويت. يرجى المحاولة مرة أخرى.");
    }
  };

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
  };

  if (isLoading)
    return <div className="text-center mt-8 text-white">جاري التحميل...</div>;
  if (error)
    return <div className="text-center mt-8 text-red-500">{error}</div>;
  if (user && user.is_voted) {
    return (
      <div className="text-center mt-8 text-gray-800">
        <Header />
        <div className="bg-gray-100 min-h-screen pb-40">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            لقد قمت بالفعل بالتصويت.
          </h2>
          <p className="text-lg text-gray-600">
            شكراً لك على مشاركتك. لا يمكنك التصويت مرة أخرى.
          </p>
        </div>
        <Footer />
      </div>
    );
  }
  return (
    <>
      <div className="bg-gray-100 min-h-screen pb-40">
        <Header />

        <div className="flex flex-row items-center p-6">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 mx-auto">
            نظام الانتخاب للقوائم المحلية
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
            <p className="text-sm text-gray-600">المدينة: {user.city}</p>
            <p className="text-sm text-gray-600">الدائرة: {user.circle}</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-6 mb-6 bg-white mx-10 rounded-lg shadow"
        >
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              التصويت
            </h2>

            {/* City Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                اختر مدينتك
              </label>
              <select
                value={selectedCity || ""}
                onChange={handleCityChange}
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#3F795E] sm:text-sm"
              >
                <option value="">اختر مدينة</option>
                {cities.map((city) => (
                  <option key={city.city} value={city.city}>
                    {city.city}
                  </option>
                ))}
              </select>
            </div>

            {/* Circle Selector */}
            {selectedCity && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6"
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  اختر دائرتك
                </label>
                <select
                  value={selectedCircle || ""}
                  onChange={handleCircleChange}
                  className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#3F795E] sm:text-sm"
                >
                  <option value="">اختر دائرة</option>
                  {cities
                    .find((c) => c.city === selectedCity)
                    ?.circles.map((circle) => (
                      <option key={circle.circle} value={circle.circle}>
                        {circle.circle}
                      </option>
                    ))}
                </select>
              </motion.div>
            )}

            {/* List Selector */}
            {selectedCircle && (
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
                  className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#3F795E] sm:text-sm"
                >
                  <option value="">
                    اختر قائمة أو اترك فارغًا للورقة البيضاء
                  </option>
                  {cities
                    .find((c) => c.city === selectedCity)
                    ?.circles.find((circle) => circle.circle === selectedCircle)
                    ?.lists.map((list) => (
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
                  {cities
                    .find((c) => c.city === selectedCity)
                    ?.circles.find((circle) => circle.circle === selectedCircle)
                    ?.lists.find((list) => list.list === selectedList)
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

            <button
              onClick={() => setShowConfirmPopup(true)}
              className="w-full bg-[#3F795E] text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-[#3F795E]"
            >
              تسجيل التصويت
            </button>
          </div>
        </motion.div>

        {/* Confirmation Popup */}
        <Transition.Root show={showConfirmPopup} as={Fragment}>
          <Dialog as="div" onClose={setShowConfirmPopup}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            </Transition.Child>
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6">
                  <Dialog.Title className="text-lg font-semibold text-gray-800">
                    تأكيد التصويت
                  </Dialog.Title>
                  <Dialog.Description className="text-gray-600 mt-2 mb-4">
                    هل أنت متأكد أنك تريد تسجيل تصويتك؟
                  </Dialog.Description>
                  <div className="flex justify-end gap-4">
                    <button
                      type="button"
                      className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                      onClick={() => setShowConfirmPopup(false)}
                    >
                      إلغاء
                    </button>
                    <button
                      type="button"
                      className="bg-[#3F795E] text-white px-4 py-2 rounded-md hover:bg-[#315f49]"
                      onClick={handleVote}
                    >
                      تأكيد
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Success Popup */}
        <Transition.Root show={showSuccessPopup} as={Fragment}>
          <Dialog as="div" onClose={setShowSuccessPopup}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            </Transition.Child>
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6">
                  <Dialog.Title className="text-lg font-semibold text-gray-800">
                    تصويت ناجح
                  </Dialog.Title>
                  <Dialog.Description className="text-gray-600 mt-2 mb-4">
                    تم تسجيل تصويتك بنجاح.
                  </Dialog.Description>
                  <div className="flex justify-end gap-4">
                    <Link to="/VotingApp">
                      <button className="px-6 py-3 bg-[#3F795E] text-white rounded-full shadow-lg hover:bg-[#2c5e5f] transition duration-300">
                        العودة إلى الصفحة السابقة
                      </button>
                    </Link>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <Footer />
      </div>
    </>
  );
}

export default ListVotes;

// مع صور

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";
// import { Dialog, Transition } from "@headlessui/react";
// import { Fragment } from "react";
// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";

// function ListVotes() {
//   const [cities, setCities] = useState([]);
//   const [selectedCity, setSelectedCity] = useState(null);
//   const [selectedCircle, setSelectedCircle] = useState(null);
//   const [selectedList, setSelectedList] = useState(null);
//   const [selectedCandidates, setSelectedCandidates] = useState([]);
//   const [showConfirmPopup, setShowConfirmPopup] = useState(false);
//   const [showSuccessPopup, setShowSuccessPopup] = useState(false);
//   const [user, setUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const nationalId = sessionStorage.getItem("national_id");
//     if (nationalId) {
//       axios.get(`http://localhost:4003/api/voting/users`)
//         .then((response) => {
//           const user = response.data.find(user => user.national_id.toString() === nationalId);
//           if (user) {
//             setUser(user);
//           } else {
//             setError("الرقم الوطني غير موجود.");
//           }
//         })
//         .catch((error) => {
//           console.error("Error fetching users:", error);
//           setError("فشل في استرجاع بيانات المستخدم.");
//         });
//     } else {
//       setError("الرقم الوطني غير موجود في التخزين.");
//     }

//     fetchCandidates();
//   }, []);

//   const fetchCandidates = async () => {
//     try {
//       setIsLoading(true);
//       const response = await axios.get("http://localhost:4003/api/voting/candidates-by-city");
//       setCities(response.data);
//       setIsLoading(false);
//     } catch (error) {
//       console.error("Error fetching candidates:", error);
//       setError("فشل في جلب البيانات. يرجى المحاولة مرة أخرى.");
//       setIsLoading(false);
//     }
//   };

//   const handleCityChange = (e) => {
//     setSelectedCity(e.target.value);
//     setSelectedCircle(null);
//     setSelectedList(null);
//     setSelectedCandidates([]);
//   };

//   const handleCircleChange = (e) => {
//     setSelectedCircle(e.target.value);
//     setSelectedList(null);
//     setSelectedCandidates([]);
//   };

//   const handleListChange = (e) => {
//     setSelectedList(e.target.value);
//     setSelectedCandidates([]);
//   };

//   const toggleCandidate = (candidate) => {
//     setSelectedCandidates((prev) =>
//       prev.some(c => c.candidate_national_id === candidate.candidate_national_id)
//         ? prev.filter(c => c.candidate_national_id !== candidate.candidate_national_id)
//         : [...prev, candidate]
//     );
//   };

//   const handleVote = async () => {
//     try {
//       await axios.patch("http://localhost:4003/api/voting/votedcircle", {
//         user: user,
//         candidate: {
//           candidate_national_ids: selectedCandidates.map(c => c.candidate_national_id),
//           circle_list: selectedList,
//           circle: selectedCircle,
//           city: selectedCity,
//         },
//       });
//       setShowConfirmPopup(false);
//       setShowSuccessPopup(true);
//     } catch (error) {
//       console.error("Error voting:", error);
//       alert("خطأ في تسجيل التصويت. يرجى المحاولة مرة أخرى.");
//     }
//   };

//   const closeSuccessPopup = () => {
//     setShowSuccessPopup(false);
//   };

//   if (isLoading)
//     return <div className="text-center mt-8 text-white">جاري التحميل...</div>;
//   if (error)
//     return <div className="text-center mt-8 text-red-500">{error}</div>;

//   return (
//     <>
//       <div className="bg-gray-100 min-h-screen pb-40">
//         <Header />

//         <div className="flex flex-row items-center p-6">
//           <h1 className="text-4xl font-bold mb-4 text-gray-900 mx-auto">
//             نظام الانتخاب للقوائم المحلية
//           </h1>
//         </div>

//         <div className="p-6 mb-6 bg-white mx-10 rounded-lg shadow">
//           <h2 className="text-2xl font-semibold mb-4 text-gray-800">
//             معلومات الناخب:
//           </h2>
//           <div className="p-4 border-2 border-gray-300 rounded-lg shadow-lg flex flex-col items-center bg-white">
//             <div className="w-24 h-24 bg-gray-200 rounded-full mb-4">
//               <img src="https://th.bing.com/th/id/OIP.n59iODvFUshbfYyyHmSnPQHaHh?rs=1&pid=ImgDetMain" alt="" />
//             </div>
//             <p className="text-lg font-bold">{user.name}</p>
//             <p className="text-sm text-gray-600">الرقم الوطني: {user.national_id}</p>
//             <p className="text-sm text-gray-600">المدينة: {user.city}</p>
//             <p className="text-sm text-gray-600">الدائرة: {user.circle}</p>
//           </div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="p-6 mb-6 bg-white mx-10 rounded-lg shadow"
//         >
//           <div className="bg-white rounded-lg shadow-lg p-6">
//             <h2 className="text-2xl font-semibold mb-6 text-gray-800">
//               التصويت
//             </h2>

//             {/* City Selector */}
//             <div className="mb-6">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 اختر مدينتك
//               </label>
//               <select
//                 value={selectedCity || ""}
//                 onChange={handleCityChange}
//                 className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 sm:text-sm"
//               >
//                 <option value="">اختر مدينة</option>
//                 {cities.map((city) => (
//                   <option key={city.city} value={city.city}>
//                     {city.city}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Circle Selector */}
//             {selectedCity && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="mb-6"
//               >
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   اختر دائرتك
//                 </label>
//                 <select
//                   value={selectedCircle || ""}
//                   onChange={handleCircleChange}
//                   className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 sm:text-sm"
//                 >
//                   <option value="">اختر دائرة</option>
//                   {cities
//                     .find((c) => c.city === selectedCity)
//                     ?.circles.map((circle) => (
//                       <option key={circle.circle} value={circle.circle}>
//                         {circle.circle}
//                       </option>
//                     ))}
//                 </select>
//               </motion.div>
//             )}

//             {/* List Selector */}
//             {selectedCircle && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="mb-6"
//               >
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   اختر القائمة
//                 </label>
//                 <select
//                   value={selectedList || ""}
//                   onChange={handleListChange}
//                   className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 sm:text-sm"
//                 >
//                   <option value="">
//                     اختر قائمة أو اترك فارغًا للورقة البيضاء
//                   </option>
//                   {cities
//                     .find((c) => c.city === selectedCity)
//                     ?.circles.find((circle) => circle.circle === selectedCircle)
//                     ?.lists.map((list) => (
//                       <option key={list.list} value={list.list}>
//                         {list.list}
//                       </option>
//                     ))}
//                 </select>
//               </motion.div>
//             )}

//             {/* Candidate Selector */}
//             {selectedList && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="mb-6"
//               >
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   اختر المرشحين
//                 </label>
//                 <div className="flex flex-wrap -m-2">
//                   {cities
//                     .find((c) => c.city === selectedCity)
//                     ?.circles.find((circle) => circle.circle === selectedCircle)
//                     ?.lists.find((list) => list.list === selectedList)
//                     ?.candidates.map((candidate) => (
//                       <div
//                         key={candidate.candidate_national_id}
//                         className={`p-4 w-full md:w-1/2 lg:w-1/3 ${
//                           selectedCandidates.some(
//                             (c) =>
//                               c.candidate_national_id ===
//                               candidate.candidate_national_id
//                           )
//                             ? "bg-green-100"
//                             : "bg-gray-100"
//                         } border-2 border-gray-300 rounded-lg shadow-md mb-4`}
//                         onClick={() => toggleCandidate(candidate)}
//                       >
//                         <div className="flex items-center">
//                           <div className="flex-shrink-0">
//                             <img
//                               className="w-16 h-16 rounded-full"
//                               src={candidate.photo || "default_photo_url"}
//                               alt={candidate.name}
//                             />
//                           </div>
//                           <div className="ml-4">
//                             <p className="text-lg font-semibold text-gray-800">
//                               {candidate.name}
//                             </p>
//                             <p className="text-sm text-gray-600">
//                               الرقم الوطني: {candidate.candidate_national_id}
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                 </div>
//               </motion.div>
//             )}

//             <button
//               onClick={() => setShowConfirmPopup(true)}
//               className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//             >
//               تسجيل التصويت
//             </button>
//           </div>
//         </motion.div>

//         {/* Confirmation Modal */}
//         <Transition.Root show={showConfirmPopup} as={Fragment}>
//           <Dialog as="div" static open={showConfirmPopup} onClose={() => setShowConfirmPopup(false)}>
//             <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />
//             <div className="fixed inset-0 flex items-center justify-center p-4">
//               <Dialog.Panel className="mx-auto max-w-sm bg-white rounded-lg shadow-lg p-6">
//                 <Dialog.Title className="text-lg font-semibold text-gray-800">
//                   تأكيد التصويت
//                 </Dialog.Title>
//                 <div className="mt-4">
//                   <p className="text-gray-600">
//                     هل أنت متأكد من تسجيل تصويتك؟ هذه العملية غير قابلة للتراجع.
//                   </p>
//                 </div>
//                 <div className="mt-6 flex justify-end gap-4">
//                   <button
//                     onClick={() => setShowConfirmPopup(false)}
//                     className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-base font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
//                   >
//                     إلغاء
//                   </button>
//                   <button
//                     onClick={handleVote}
//                     className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//                   >
//                     تأكيد
//                   </button>
//                 </div>
//               </Dialog.Panel>
//             </div>
//           </Dialog>
//         </Transition.Root>

//         {/* Success Notification */}
//         <Transition.Root show={showSuccessPopup} as={Fragment}>
//           <Dialog as="div" static open={showSuccessPopup} onClose={closeSuccessPopup}>
//             <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />
//             <div className="fixed inset-0 flex items-center justify-center p-4">
//               <Dialog.Panel className="mx-auto max-w-sm bg-white rounded-lg shadow-lg p-6">
//                 <Dialog.Title className="text-lg font-semibold text-gray-800">
//                   تصويت ناجح
//                 </Dialog.Title>
//                 <div className="mt-4">
//                   <p className="text-gray-600">
//                     تم تسجيل تصويتك بنجاح. شكرًا لك!
//                   </p>
//                 </div>
//                 <div className="mt-6 flex justify-end">
//                   <button
//                     onClick={closeSuccessPopup}
//                     className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//                   >
//                     حسنًا
//                   </button>
//                 </div>
//               </Dialog.Panel>
//             </div>
//           </Dialog>
//         </Transition.Root>

//         <Footer />
//       </div>
//     </>
//   );
// }

// export default ListVotes;
