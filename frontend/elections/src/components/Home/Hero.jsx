// // HeroSection.js
// import React from "react";
// import v from "../../assets/videoplayback.mp4";
// import bgImage from "../../assets/download.jpg"; // Import the background image
// import {Link} from "react-router-dom"
// const HeroSection = () => (
//   <section
//     className="relative h-screen flex items-center justify-center text-center text-white"
//     style={{
//       backgroundImage: `url(${bgImage})`,
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//     }}
//   >
//     <div className="absolute inset-0 bg-black opacity-50"></div>
//     <div className="relative z-10 max-w-4xl mx-auto">
//       <h1 className="text-5xl font-bold mb-4">مرحبًا بكم في منصة الانتخابات الأردنية</h1>
//       <p className="text-xl mb-8">
//         صوتكم هو قوتكم! انضم إلينا لبناء مستقبل مشرق لأردننا الحبيب.
//       </p>
//       <div className="flex justify-center items-center mb-8">

//       </div>
//       <Link to="/create-debate">
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//               طلب مناظرة
//             </button>
//           </Link>
//     </div>
//   </section>
// );

// export default HeroSection;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown, Vote, Users, PieChart } from "lucide-react";
import bg from "../../assets/bg.png";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "صوتك يصنع التغيير",
      description: "شارك في بناء مستقبل أردن أفضل",
    },
    {
      title: "انتخابات شفافة ونزيهة",
      description: "نضمن لك تجربة انتخابية آمنة وعادلة",
    },
    {
      title: "قم بدورك في الديمقراطية",
      description: "كل صوت مهم في تشكيل مستقبلنا",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4003);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <motion.div
        initial={{ scale: 1.2, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70" />
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-shadow-lg">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-shadow">
              {slides[currentSlide].description}
            </p>
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link to="/VotingApp">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-600 hover:bg-gray-600 text-white font-bold py-3 mx-4 px-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg flex items-center"
            >
              <Vote className="mr-2" size={24} />
              صوّت الآن
            </motion.button>
          </Link>
          <Link to="/create-debate">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-zait hover:bg-zait text-white font-bold py-3 px-6 mx-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg flex items-center"
            >
              <Users className="mr-2" size={24} />
              طلب مناظرة
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          {[
            {
              icon: Vote,
              title: "سهولة التصويت",
              description: "عملية تصويت بسيطة وآمنة",
            },
            {
              icon: Users,
              title: "مشاركة فعالة",
              description: "فرصتك للتأثير في القرارات",
            },
            {
              icon: PieChart,
              title: "نتائج شفافة",
              description: "متابعة فورية لنتائج الانتخابات",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-zait bg-opacity-50 p-6 rounded-lg backdrop-filter backdrop-blur-lg"
            >
              <feature.icon className="mx-auto mb-4 text-black" size={48} />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      []
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDown size={32} className="text-white opacity-50" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
