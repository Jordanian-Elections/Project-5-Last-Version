// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";
// import { motion } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import logo from "../../assets/logo.png";
// import logo12 from "../../assets/logo1.png";

// const Header = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = Cookies.get("token");
//     setIsLoggedIn(!!token);
//   }, []);

//   const handleLogout = () => {
//     Cookies.remove("token");
//     setIsLoggedIn(false);
//     navigate("/");
//   };

//   const menuItems = [
//     { title: "الرئيسية", path: "/" },
//     { title: "صوت الآن", path: "/VotingApp" },
//     { title: "الخدمات والطلبات", path: "/requests" },
//     { title: "قائمة المناظرات", path: "/debates" },
//     { title: "من نحن", path: "/about" },
//     { title: "تواصل معنا", path: "/contact" },
//   ];

//   return (
//     <motion.header
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ type: "spring", stiffness: 120, damping: 20 }}
//       className="bg-gradient-to-r from-zait to-gray-600 p-4 text-white shadow-lg top-0 z-50 sticky"
//     >
//       <nav className="container mx-auto flex justify-between items-center px-6">
//         <motion.div
//           className="flex items-center space-x-4"
//           whileHover={{ scale: 1.05 }}
//         >
//           <img src={logo12} alt="Logo" className="h-28 w-40" />
//         </motion.div>

//         <div className="hidden md:flex gap-10">
//           {menuItems.map((item, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Link
//                 to={item.path}
//                 className="text-white hover:text-gray-200 transition-colors duration-200 text-lg"
//               >
//                 {item.title}
//               </Link>
//             </motion.div>
//           ))}
//         </div>

//         <div className="md:hidden">
//           <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         <motion.div
//           className="ml-4"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           {isLoggedIn ? (
//             <button
//               onClick={handleLogout}
//               className="bg-red-500 text-white px-4 py-2 rounded-xl font-bold shadow-md hover:scale-104 transition-colors duration-200"
//             >
//               تسجيل الخروج
//             </button>
//           ) : (
//             <Link
//               to="/login"
//               className="bg-white text-zait px-4 py-2 rounded-xl font-bold shadow-md hover:bg-gray-100 transition-colors duration-200"
//             >
//               تسجيل الدخول
//             </Link>
//           )}
//         </motion.div>
//       </nav>

//       {isMenuOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           transition={{ duration: 0.2 }}
//           className="md:hidden mt-4"
//         >
//           {menuItems.map((item, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="py-2"
//             >
//               <Link
//                 to={item.path}
//                 className="block text-white hover:text-gray-200 transition-colors duration-200 m-10"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {item.title}
//               </Link>
//             </motion.div>
//           ))}
//         </motion.div>
//       )}
//     </motion.header>
//   );
// };

// export default Header;

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../../assets/logo.png";
import logo12 from "../../assets/logoo1.png";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    Cookies.remove("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  // const menuItems = [
  //   { title: "الرئيسية", path: "/" },
  //   { title: "الدوائر الإنتخابية", path: "/circle" },
  //   { title: "طلبات القوائم الإنتخابية", path: "/requests" },
  //   { title: "من نحن", path: "/about" },
  //   { title: "تواصل معنا", path: "/contact" },
  //   { title: "تصويت محلي", path: "/VotingApp" },
  //   { title: "تصويت", path: "/VotePage" },
  //   { title: "قائمة المناظرات", path: "/debates" },
  // ];

  const menuItems = [
    { title: "الرئيسية", path: "/" },
    { title: "صوت الآن", path: "/VotingApp" },
    { title: "الخدمات والطلبات", path: "/requests" },
    { title: "قائمة المناظرات", path: "/debates" },
    { title: "من نحن", path: "/about" },
    { title: "تواصل معنا", path: "/contact" },
  ];
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="bg-gradient-to-r
       from-zait to-gray-600
       p-2 text-white shadow-lg top-0 z-50 sticky"
    >
      <nav className="container mx-auto flex justify-between  items-center py-6 px-20">
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          // transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <img src={logo12} alt="Logo" className=" w-32   " />
          {/* <span className="mr-2 text-2xl font-bold text-white">VoteJO</span> */}
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-12">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={item.path}
                className="text-white hover:text-gray-200 transition-colors duration-200 text-l"
              >
                {item.title}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Auth Button */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-xl font-bold shadow-md hover:bg-gray-100 transition-colors duration-200"
            >
              تسجيل الخروج
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-white text-zait px-4 py-2 rounded-xl font-bold shadow-md hover:bg-gray-100 transition-colors duration-200"
            >
              تسجيل الدخول
            </Link>
          )}
        </motion.div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden mt-4"
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="py-2"
            >
              <Link
                to={item.path}
                className="block text-white hover:text-gray-200 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
