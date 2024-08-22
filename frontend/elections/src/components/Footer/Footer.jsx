// // import React from "react";
// // import { Link } from "react-router-dom";
// // import logo from "../../assets/logo.png"; // Replace with your logo path
// // import {
// //   FaFacebook,
// //   FaInstagram,
// //   FaLinkedin,
// //   FaLocationArrow,
// // } from "react-icons/fa";

// // const FooterLinks = [
// //   {
// //     title: "الرئيسية",
// //     path: "/",
// //   },
// //   {
// //     title: "القوائم الإنتخابية",
// //     path: "/electoral",
// //   },
// //   {
// //     title: "من نحن",
// //     path: "/about",
// //   },
// //   {
// //     title: "تواصل معنا",
// //     path: "/contact",
// //   },
// // ];

// // export const Footer = () => {
// //   return (
// //     <div className="text-white bg-[rgb(229,79,83)]">
// //       <div className="container mx-auto px-4">
// //         <div className="grid md:grid-cols-3 gap-8 pb-10 pt-5 text-right">
// //           {/* Company Details */}
// //           <div className="py-8 px-4 md:col-span-1">
// //             <h1 className="sm:text-3xl text-xl font-bold mb-3 flex items-center gap-3">
// //               <img
// //                 src={logo}
// //                 alt="VoteJO Logo"
// //                 className="h-16 w-16 rounded-full"
// //               />
// //               <span>VoteJO</span>
// //             </h1>
// //             <p>
// //               في VoteJO، نؤمن بتقديم أفضل تجربة انتخابية للمواطنين الأردنيين.
// //               خدماتنا مصممة لتجعل العملية الانتخابية سلسة وفعالة.
// //             </p>
// //           </div>

// //           {/* Footer Links */}
// //           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:col-span-2">
// //             <div>
// //               <div className="py-8 px-4">
// //                 <h1 className="sm:text-xl text-xl font-bold mb-3">
// //                   روابط هامة
// //                 </h1>
// //                 <ul className="flex flex-col gap-3">
// //                   {FooterLinks.map((link) => (
// //                     <li
// //                       className="cursor-pointer hover:text-gray-300 duration-300"
// //                       key={link.title}
// //                     >
// //                       <Link to={link.path}>{link.title}</Link>
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </div>
// //             </div>
// //             <div>
// //               <div className="py-8 px-4">
// //                 <h1 className="sm:text-xl text-xl font-bold mb-3">
// //                   روابط أخرى
// //                 </h1>
// //                 <ul className="flex flex-col gap-3">
// //                   {FooterLinks.map((link) => (
// //                     <li
// //                       className="cursor-pointer hover:text-gray-300 duration-300"
// //                       key={link.title}
// //                     >
// //                       <Link to={link.path}>{link.title}</Link>
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Social Links */}
// //           <div className="md:col-span-3 flex justify-between mt-6 px-4">
// //             <div className="flex items-center gap-3">
// //               <a href="#">
// //                 <FaInstagram className="text-3xl" />
// //               </a>
// //               <a href="#">
// //                 <FaFacebook className="text-3xl" />
// //               </a>
// //               <a href="#">
// //                 <FaLinkedin className="text-3xl" />
// //               </a>
// //             </div>
// //             <div className="flex items-center gap-3">
// //               <FaLocationArrow />
// //               <p>عمان، الأردن</p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Footer;

// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   FaFacebook,
//   FaInstagram,
//   FaLinkedin,
//   FaLocationArrow,
//   FaEnvelope,
//   FaPhone,
// } from "react-icons/fa";
// import logo12 from "../../assets/logo1.png";

// const FooterLinks = [
//   { title: "الرئيسية", path: "/" },
//   { title: "القوائم الإنتخابية", path: "/VotingApp" },
//   { title: "من نحن", path: "/about" },
//   { title: "تواصل معنا", path: "/contact" },
// ];

// const OtherLinks = [
//   { title: "سياسة الخصوصية", path: "/privacy" },
//   { title: "الشروط والأحكام", path: "/terms" },
//   { title: "الأسئلة الشائعة", path: "/faq" },
//   { title: "خريطة الموقع", path: "/sitemap" },
// ];

// const SocialLink = ({ href, icon: Icon }) => (
//   <a
//     href={href}
//     target="_blank"
//     rel="noopener noreferrer"
//     className="text-white hover:text-gray-300 transition-colors duration-300"
//   >
//     <Icon className="text-2xl" />
//   </a>
// );

// const Footer = () => {
//   return (
//     <footer className="bg-zait text-white" dir="rtl">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Company Info */}
//           <div className="space-y-4">
//             <Link
//               to="/"
//               className="flex items-center space-x-3 rtl:space-x-reverse"
//             >
//               <img src={logo12} alt="انتخب Logo" className="h-28 w-40" />
//             </Link>
//             <p className="text-sm text-right">
//               في انتخب نؤمن بتقديم أفضل تجربة انتخابية للمواطنين الأردنيين.
//               خدماتنا مصممة لتجعل العملية الانتخابية سلسة وفعالة.
//             </p>
//           </div>

//           {/* Important Links */}
//           <div>
//             <h2 className="text-lg font-semibold mb-4 text-right">
//               روابط هامة
//             </h2>
//             <ul className="space-y-2">
//               {FooterLinks.map((link) => (
//                 <li key={link.title}>
//                   <Link
//                     to={link.path}
//                     className="hover:text-gray-300 transition-colors duration-300 block text-right"
//                   >
//                     {link.title}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Other Links */}
//           <div>
//             <h2 className="text-lg font-semibold mb-4 text-right">
//               روابط أخرى
//             </h2>
//             <ul className="space-y-2">
//               {OtherLinks.map((link) => (
//                 <li key={link.title}>
//                   <Link
//                     to={link.path}
//                     className="hover:text-gray-300 transition-colors duration-300 block text-right"
//                   >
//                     {link.title}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h2 className="text-lg font-semibold mb-4 text-right">
//               تواصل معنا
//             </h2>
//             <ul className="space-y-2">
//               <li className="flex items-center space-x-2 rtl:space-x-reverse text-right">
//                 <FaLocationArrow />
//                 <span>عمان، الأردن</span>
//               </li>
//               <li className="flex items-center space-x-2 rtl:space-x-reverse text-right">
//                 <FaPhone />
//                 <span>+962 780 848 097</span>
//               </li>
//               <li className="flex items-center space-x-2 rtl:space-x-reverse text-right">
//                 <FaEnvelope />
//                 <span>info@intakheb.com</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Social Links & Copyright */}
//         <div className="mt-8 pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center text-right">
//           <div className="flex space-x-4 rtl:space-x-reverse mb-4 md:mb-0">
//             <SocialLink href="#" icon={FaFacebook} />
//             <SocialLink href="#" icon={FaInstagram} />
//             <SocialLink href="#" icon={FaLinkedin} />
//           </div>
//           <div className="text-sm text-center md:text-right">
//             &copy; {new Date().getFullYear()} جميع الحقوق محفوظة.انتخب
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import logo12 from "../../assets/logoo1.png";

const FooterLinks = [
  { title: "الرئيسية", path: "/" },
  { title: "القوائم الإنتخابية", path: "/VotingApp" },
  { title: "من نحن", path: "/about" },
  { title: "تواصل معنا", path: "/contact" },
];

const OtherLinks = [
  { title: "سياسة الخصوصية", path: "/about" },
  { title: "الشروط والأحكام", path: "/about" },
  { title: "الأسئلة الشائعة", path: "/faq" },
  { title: "قائمة المناظرات", path: "/debates" },
];

const SocialLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-white hover:text-gray-300 transition-colors duration-300"
  >
    <Icon className="text-2xl" />
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-zait text-white px-8 md:px-12 rtl">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link
              to="/"
              className="flex items-center space-x-3 space-x-reverse"
            >
              <img src={logo12} alt="VoteJO Logo" className="w-48" />
            </Link>
            <p className="text-sm leading-relaxed">
              في انتخب نؤمن بتقديم أفضل تجربة انتخابية للمواطنين الأردنيين.
              خدماتنا مصممة لتجعل العملية الانتخابية سلسة وفعالة.
            </p>
          </div>

          {/* Important Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">روابط هامة</h2>
            <ul className="space-y-3">
              {FooterLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.path}
                    className="hover:text-gray-300 transition-colors duration-300 block"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">روابط أخرى</h2>
            <ul className="space-y-3">
              {OtherLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.path}
                    className="hover:text-gray-300 transition-colors duration-300 block"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-semibold mb-4">تواصل معنا</h2>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 space-x-reverse">
                <FaLocationArrow aria-hidden="true" />
                <span>عمان، الأردن</span>
              </li>
              <li className="flex items-center space-x-2 ltr: space-x-reverse">
                <FaPhone aria-hidden="true" />
                <span>+962 6 123 4567</span>
              </li>
              <li className="flex items-center space-x-2 space-x-reverse">
                <FaEnvelope aria-hidden="true" />
                <span>info@intakheb.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 space-x-reverse mb-4 md:mb-0">
            <SocialLink href="#" icon={FaFacebook} label="Facebook" />
            <SocialLink href="#" icon={FaInstagram} label="Instagram" />
            <SocialLink href="#" icon={FaLinkedin} label="LinkedIn" />
          </div>
          <div className="text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} جميع الحقوق محفوظة.انتخب
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
