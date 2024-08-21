// // HomePage.js
// import React, { useState, useEffect } from "react";
// import HeroSection from "./Hero";
// import WelcomeMessage from "./WelcomeMessage";
// import Countdown from "./CountdownTimer";
// // import ElectoralDistricts from "./ElectoralDistricts";
// import ImportantDates from "./ImportantDates";
// import AdsSection from "./AdsSection";
// import VoterCounts from "./VoterCounts";
// import NewsUpdates from "./NewsUpdates";
// import PartnersSlider from "./PartnersSlider";
// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";
// import FAQSection from "./FAQSection";
// import ChatBox from "../ChatBox/ChatBox";
// // import Carousel from "../Carusor";

// const HomePage = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [username, setUsername] = useState('');
// const [ads] = useState([
//   {
//     id: 1,
//     imageUrl: "https://via.placeholder.com/300",
//     candidateName: "محمد أحمد",
//     message: "صوتوا لمحمد أحمد لمستقبل أفضل!",
//   },
//   {
//     id: 2,
//     imageUrl: "https://via.placeholder.com/300",
//     candidateName: "سارة خالد",
//     message: "معًا نحو التغيير مع سارة خالد.",
//   },
//   {
//     id: 3,
//     imageUrl: "https://via.placeholder.com/300",
//     candidateName: "خالد علي",
//     message: "اختاروا خالد علي لبناء الوطن.",
//   },
// ]);

// const [voterCount] = useState({
//   الزرقاء: 2045,
//   "العاصمة / الدائرة الأولى": 20595,
//   "العاصمة / الدائرة الثالثة": 20445,
// });

// const importantDates = [
//   { date: "2024-08-01", event: "بداية فترة التسجيل للانتخابات" },
//   { date: "2024-08-15", event: "نهاية فترة التسجيل للانتخابات" },
//   { date: "2024-09-01", event: "بداية فترة الحملات الانتخابية" },
//   { date: "2024-09-09", event: "نهاية فترة الحملات الانتخابية" },
//   { date: "2024-09-10", event: "يوم الانتخابات" },
//   { date: "2024-09-15", event: "الإعلان عن نتائج الانتخابات الأولية" },
// ];

// const newsUpdates = [
//   { id: 1, title: "افتتاح مراكز التسجيل", summary: "تم افتتاح مراكز التسجيل في جميع أنحاء المملكة" },
//   { id: 2, title: "مناظرة المرشحين", summary: "ستقام مناظرة بين المرشحين الرئيسيين الأسبوع المقبل" },
// ];

// const partners = [
//   { id: 1, name: "وزارة الداخلية", logoUrl: "https://via.placeholder.com/150", description: "الجهة المسؤولة عن تنظيم الانتخابات." },
//   { id: 2, name: "مفوضية الانتخابات", logoUrl: "https://via.placeholder.com/150", description: "الإشراف على العملية الانتخابية وضمان نزاهتها." },
//   { id: 3, name: "منظمة الشفافية", logoUrl: "https://via.placeholder.com/150", description: "مراقبة الانتخابات لضمان الشفافية." },
//   { id: 4, name: "برنامج الأمم المتحدة الإنمائي", logoUrl: "https://via.placeholder.com/150", description: "دعم التنمية المستدامة من خلال الانتخابات." },
//   { id: 5, name: "مؤسسة الملكة رانيا", logoUrl: "https://via.placeholder.com/150", description: "مبادرات تعليمية لدعم الانتخابات." }
// ];

//   useEffect(() => {
//     setTimeout(() => {
//       setIsLoggedIn(true);
//       setUsername('مستخدم افتراضي');
//     }, 2000);
//   }, []);

//   return (
//     <>
//     <Header/>
//     <div className=" bg-jordanian-white text-jordanian-black" dir="rtl">
//       <HeroSection />
//       <main className="container mx-auto px-4 py-8">
//         {/* <WelcomeMessage isLoggedIn={isLoggedIn} username={username} /> */}
//         <section className="mb-12">

//             <Countdown />
//         </section>
//         {/* <ElectoralDistricts /> */}
//         <ImportantDates importantDates={importantDates} />
//         {/* <AdsSection ads={ads} /> */}
//         <VoterCounts voterCount={voterCount} />
//         <NewsUpdates newsUpdates={newsUpdates} />
//         <PartnersSlider partners={partners} />
//         <FAQSection />
//       </main>
//       {/* <Carousel/> */}
//     </div>
//     <Footer/>
//     <ChatBox/>
//     </>

//   );
// };

// export default HomePage;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaNewspaper, FaChartBar } from "react-icons/fa";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HeroSection from "./Hero";
import Countdown from "./CountdownTimer";
import FAQSection from "./FAQSection";
import PartnersSlider from "./PartnersSlider";
import AdsSection from "./AdsSection";
import ChatBox from "../ChatBox/ChatBox";
import NewsUpdates1 from "./NewsUpdates";
import ScrollingTickerparty from "../numberofvotes/CounterPartyVotes";
import ScrollingTicker from "../numberofvotes/CounterVotesCircle";
import VoterCounts from "./VoterCounts";
const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
      setUsername("مستخدم افتراضي");
    }, 2000);
  }, []);

  const importantDates = [
    { date: "2024-08-01", event: "بداية فترة التسجيل للانتخابات" },
    { date: "2024-08-15", event: "نهاية فترة التسجيل للانتخابات" },
    { date: "2024-09-01", event: "بداية فترة الحملات الانتخابية" },
    { date: "2024-09-09", event: "نهاية فترة الحملات الانتخابية" },
    { date: "2024-09-10", event: "يوم الانتخابات" },
    { date: "2024-09-15", event: "الإعلان عن نتائج الانتخابات الأولية" },
  ];

  const newsUpdates = [
    {
      id: 1,
      title: "افتتاح مراكز التسجيل",
      summary: "تم افتتاح مراكز التسجيل في جميع أنحاء المملكة",
    },
    {
      id: 2,
      title: "مناظرة المرشحين",
      summary: "ستقام مناظرة بين المرشحين الرئيسيين الأسبوع المقبل",
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <>
      <Header />
      <div className="bg-jordanian-white text-jordanian-black" dir="rtl">
        <HeroSection />
        <main className="">
          <motion.section
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mb-12"
          >
            <ScrollingTicker />
            <Countdown />
          </motion.section>
          <AdsSection />
          <motion.section
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 mb-12"
          >
            {/* <div className="items-center flex justify-start">
              <ImportantDates importantDates={importantDates} />
              <NewsUpdates newsUpdates={newsUpdates} />
            </div> */}
            <VoterCounts />
          </motion.section>
          <motion.section
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mb-12"
          >
            <PartnersSlider />
          </motion.section>
          <motion.section
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mb-12"
          >
            <NewsUpdates1 />
          </motion.section>

          <motion.section
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mb-12"
          >
            <FAQSection />
          </motion.section>
          {/* 
          <motion.section
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className=" mx-24"
          > */}
          {/* <h2 className="text-2xl font-bold mb-4 flex items-center">
              <FaChartBar className="mr-4 " />
              إحصائيات الانتخابات
            </h2> */}
          {/* <ElectionStats /> */}
          {/* </motion.section> */}
        </main>
      </div>
      <Footer />
      <ChatBox />
    </>
  );
};

// const ImportantDates = ({ importantDates }) => (
//   <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mr-12 mt-12">
//     <h2 className="text-2xl font-bold mb-4 flex items-center">
//       <FaCalendarAlt className="mr-2" />
//       تواريخ مهمة
//     </h2>
//     <ul className="space-y-2">
//       {importantDates.map((event, index) => (
//         <li key={index} className="flex items-center">
//           <span className="font-bold mr-2">{event.date}:</span>
//           <span>{event.event}</span>
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// const NewsUpdates = ({ newsUpdates }) => (
//   <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mr-12 mt-12">
//     <h2 className="text-2xl font-bold mb-4 flex items-center">
//       <FaNewspaper className="mr-2" />
//       آخر الأخبار
//     </h2>
//     <ul className="space-y-4">
//       {newsUpdates.map((news) => (
//         <li key={news.id} className="border-b pb-2">
//           <h3 className="font-bold">{news.title}</h3>
//           <p>{news.summary}</p>
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// const ElectionStats = () => {
//   const stats = [
//     { label: "عدد الناخبين المسجلين", value: "373" },
//     { label: "عدد الدوائر الانتخابية", value: "3" },
//     { label: "نسبة مشاركة ", value: "20%" },
//     { label: "عدد المرشحين", value: "66" },
//   ];

//   return (
//     <>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
//         {stats.map((stat, index) => (
//           <div
//             key={index}
//             className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
//           >
//             <div className="text-3xl font-bold text-jordanian-red">
//               {stat.value}
//             </div>
//             <div className="text-sm">{stat.label}</div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

export default HomePage;
