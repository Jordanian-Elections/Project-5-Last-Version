// // // import React from 'react';

// // // const logoUrls = [
// // //     "https://th.bing.com/th/id/OIP.bG-Cg3IqmBJsdUGKfpz2agHaEE?w=286&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
// // //     "https://th.bing.com/th/id/OIP.-ChMZ2Jm_8ccPSaKqh9unwHaE7?w=289&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7",
// // //     "https://th.bing.com/th/id/OIP.U6CzKWCNL_b6O3EVb4WtBgHaEY?w=278&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
// // //     "https://th.bing.com/th/id/OIP.LcJcHoGqUAlo_tEJmKImXAHaEE?w=337&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
// // //     "https://th.bing.com/th/id/OIP.seAzigS6_Wkj_UP-__kejgHaEa?w=252&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
// // //     "https://th.bing.com/th/id/OIP.U6CzKWCNL_b6O3EVb4WtBgHaEY?w=278&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
// // //     "https://www.svgrepo.com/show/330140/chevrolet.svg",
// // //     "https://www.svgrepo.com/show/330787/kia.svg",
// // //     "https://www.svgrepo.com/show/303349/ford-1-logo.svg",
// // //     "https://www.svgrepo.com/show/303249/mercedes-benz-9-logo.svg",
// // //     "https://www.svgrepo.com/show/342292/tesla.svg",
// // // ];

// // // const Logocar = () => {
// // //     return (
// // //         <section className='my-10' style={{ padding: '3rem 0', backgroundColor: 'white', overflow: 'hidden', textAlign: 'center' }}>
// // //             <h2  className='text-4xl font-extrabold mb-8 text-center text-jordanian-red mb-20'>الجهات المعنيه والشركاء </h2>
// // //             <div style={{ position: 'relative', width: '100%', height: '7rem' }}>
// // //                 <div style={{
// // //                     display: 'flex',
// // //                     flexWrap: 'nowrap',
// // //                     gap: '2rem',
// // //                     animation: 'scroll 20s linear infinite',
// // //                 }}>
// // //                     {logoUrls.concat(logoUrls).map((url, index) => (
// // //                         <img
// // //                             key={index}
// // //                             src={url}
// // //                             alt={`Sponsor logo ${index + 1}`}
// // //                             style={{
// // //                                 height: '8rem',
// // //                                 flexShrink: 0,
// // //                                 marginRight: '2rem',
// // //                             }}
// // //                         />
// // //                     ))}
// // //                 </div>
// // //             </div>

// // //             <style jsx>{`
// // //                 @keyframes scroll {
// // //                     0% {
// // //                         transform: translateX(0);
// // //                     }
// // //                     100% {
// // //                         transform: translateX(-50%);
// // //                     }
// // //                 }
// // //             `}</style>
// // //         </section>
// // //     );
// // // };

// // // export default Logocar;

// // // // import React from 'react';

// // // // const logoUrls = [
// // // //     "https://th.bing.com/th/id/OIP.bG-Cg3IqmBJsdUGKfpz2agHaEE?w=286&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
// // // //     "https://th.bing.com/th/id/OIP.-ChMZ2Jm_8ccPSaKqh9unwHaE7?w=289&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7",
// // // //     "https://th.bing.com/th/id/OIP.U6CzKWCNL_b6O3EVb4WtBgHaEY?w=278&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
// // // //     "https://th.bing.com/th/id/OIP.LcJcHoGqUAlo_tEJmKImXAHaEE?w=337&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
// // // //     "https://th.bing.com/th/id/OIP.seAzigS6_Wkj_UP-__kejgHaEa?w=252&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
// // // //     "https://th.bing.com/th/id/OIP.U6CzKWCNL_b6O3EVb4WtBgHaEY?w=278&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
// // // // ];

// // // // const Logocar = () => {
// // // //     return (
// // // //         <section className='my-10 bg-white overflow-hidden text-center py-12'>
// // // //             <h2 className='text-4xl font-extrabold text-jordanian-red mb-12'>
// // // //                 الجهات المعنية والشركاء
// // // //             </h2>
// // // //             <div className="relative w-full h-28 md:h-36 overflow-hidden">
// // // //                 <div className="flex gap-8 animate-scroll">
// // // //                     {logoUrls.concat(logoUrls).map((url, index) => (
// // // //                         <img
// // // //                             key={index}
// // // //                             src={url}
// // // //                             alt={`Sponsor logo ${index + 1}`}
// // // //                             className="h-24 md:h-36 flex-shrink-0 transition-transform duration-300 hover:scale-110"
// // // //                         />
// // // //                     ))}
// // // //                 </div>
// // // //             </div>
// // // //         </section>
// // // //     );
// // // // };

// // // // export default Logocar;

// // // // import React from 'react';
// // // // import { Swiper, SwiperSlide } from 'swiper/react';
// // // // import 'swiper/swiper-bundle.min.css'; // Import Swiper styles

// // // // const logoUrls = [
// // // //     "https://th.bing.com/th/id/OIP.bG-Cg3IqmBJsdUGKfpz2agHaEE?w=286&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
// // // //     "https://th.bing.com/th/id/OIP.-ChMZ2Jm_8ccPSaKqh9unwHaE7?w=289&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7",
// // // //     "https://th.bing.com/th/id/OIP.U6CzKWCNL_b6O3EVb4WtBgHaEY?w=278&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
// // // //     "https://th.bing.com/th/id/OIP.LcJcHoGqUAlo_tEJmKImXAHaEE?w=337&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
// // // //     "https://th.bing.com/th/id/OIP.seAzigS6_Wkj_UP-__kejgHaEa?w=252&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
// // // //     "https://th.bing.com/th/id/OIP.U6CzKWCNL_b6O3EVb4WtBgHaEY?w=278&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
// // // // ];

// // // // const Logocar = () => {
// // // //     return (
// // // //         <section className='my-10 bg-white py-12'>
// // // //             <h2 className='text-4xl font-extrabold text-jordanian-red mb-12 text-center'>
// // // //                 الجهات المعنية والشركاء
// // // //             </h2>
// // // //             <div className="relative">
// // // //                 <Swiper
// // // //                     slidesPerView={1}
// // // //                     spaceBetween={30}
// // // //                     loop={true}
// // // //                     autoplay={{ delay: 3000 }}
// // // //                     breakpoints={{
// // // //                         640: {
// // // //                             slidesPerView: 2,
// // // //                             spaceBetween: 40,
// // // //                         },
// // // //                         768: {
// // // //                             slidesPerView: 3,
// // // //                             spaceBetween: 50,
// // // //                         },
// // // //                         1024: {
// // // //                             slidesPerView: 4,
// // // //                             spaceBetween: 60,
// // // //                         },
// // // //                     }}
// // // //                     className="mySwiper"
// // // //                 >
// // // //                     {logoUrls.map((url, index) => (
// // // //                         <SwiperSlide key={index}>
// // // //                             <img
// // // //                                 src={url}
// // // //                                 alt={`Sponsor logo ${index + 1}`}
// // // //                                 className="h-24 md:h-36 w-full object-contain transition-transform duration-300 hover:scale-110"
// // // //                             />
// // // //                         </SwiperSlide>
// // // //                     ))}
// // // //                 </Swiper>
// // // //             </div>
// // // //         </section>
// // // //     );
// // // // };

// // // // export default Logocar;

// // // // import React from 'react';
// // // // import { Swiper, SwiperSlide } from 'swiper/react';
// // // // import 'swiper/swiper-bundle.min.css'; // Import Swiper styles

// // // // const logoUrls = [
// // // //     "https://th.bing.com/th/id/OIP.bG-Cg3IqmBJsdUGKfpz2agHaEE?w=286&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
// // // //     "https://th.bing.com/th/id/OIP.-ChMZ2Jm_8ccPSaKqh9unwHaE7?w=289&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7",
// // // //     "https://th.bing.com/th/id/OIP.U6CzKWCNL_b6O3EVb4WtBgHaEY?w=278&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
// // // //     "https://th.bing.com/th/id/OIP.LcJcHoGqUAlo_tEJmKImXAHaEE?w=337&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
// // // //     "https://th.bing.com/th/id/OIP.seAzigS6_Wkj_UP-__kejgHaEa?w=252&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
// // // //     "https://th.bing.com/th/id/OIP.U6CzKWCNL_b6O3EVb4WtBgHaEY?w=278&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
// // // // ];

// // // // const Logocar = () => {
// // // //     return (
// // // //         <section className='my-10 bg-white py-12'>
// // // //             <h2 className='text-4xl font-extrabold text-jordanian-red mb-12 text-center'>
// // // //                 الجهات المعنية والشركاء
// // // //             </h2>
// // // //             <div className="relative">
// // // //                 <Swiper
// // // //                     slidesPerView={1}
// // // //                     spaceBetween={30}
// // // //                     loop={true}
// // // //                     autoplay={{ delay: 3000 }}
// // // //                     breakpoints={{
// // // //                         640: {
// // // //                             slidesPerView: 2,
// // // //                             spaceBetween: 40,
// // // //                         },
// // // //                         768: {
// // // //                             slidesPerView: 3,
// // // //                             spaceBetween: 50,
// // // //                         },
// // // //                         1024: {
// // // //                             slidesPerView: 4,
// // // //                             spaceBetween: 60,
// // // //                         },
// // // //                     }}
// // // //                     className="mySwiper"
// // // //                 >
// // // //                     {logoUrls.map((url, index) => (
// // // //                         <SwiperSlide key={index}>
// // // //                             <img
// // // //                                 src={url}
// // // //                                 alt={`Sponsor logo ${index + 1}`}
// // // //                                 className="h-24 md:h-36 w-full object-contain transition-transform duration-300 hover:scale-110"
// // // //                             />
// // // //                         </SwiperSlide>
// // // //                     ))}
// // // //                 </Swiper>
// // // //             </div>
// // // //         </section>
// // // //     );
// // // // };

// // // // export default Logocar;

// // // // import React from 'react';
// // // // import { Swiper, SwiperSlide } from 'swiper/react';
// // // // // import 'swiper/swiper-bundle.min.css'; // Import Swiper styles

// // // // // Import Swiper core and required modules
// // // // import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

// // // // // Install modules
// // // // SwiperCore.use([Autoplay, Pagination, Navigation]);

// // // // const logoUrls = [
// // // //     "https://th.bing.com/th/id/OIP.bG-Cg3IqmBJsdUGKfpz2agHaEE?w=286&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
// // // //     "https://th.bing.com/th/id/OIP.-ChMZ2Jm_8ccPSaKqh9unwHaE7?w=289&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7",
// // // //     "https://th.bing.com/th/id/OIP.U6CzKWCNL_b6O3EVb4WtBgHaEY?w=278&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
// // // //     "https://th.bing.com/th/id/OIP.LcJcHoGqUAlo_tEJmKImXAHaEE?w=337&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
// // // //     "https://th.bing.com/th/id/OIP.seAzigS6_Wkj_UP-__kejgHaEa?w=252&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
// // // //     "https://th.bing.com/th/id/OIP.U6CzKWCNL_b6O3EVb4WtBgHaEY?w=278&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
// // // // ];

// // // // const Logocar = () => {
// // // //     return (
// // // //         <section className='my-10 bg-white py-12'>
// // // //             <h2 className='text-4xl font-extrabold text-jordanian-red mb-12 text-center'>
// // // //                 الجهات المعنية والشركاء
// // // //             </h2>
// // // //             <Swiper
// // // //                 slidesPerView={1}
// // // //                 spaceBetween={30}
// // // //                 loop={true}
// // // //                 autoplay={{ delay: 3000, disableOnInteraction: false }}
// // // //                 pagination={{ clickable: true }}
// // // //                 navigation
// // // //                 breakpoints={{
// // // //                     640: {
// // // //                         slidesPerView: 2,
// // // //                         spaceBetween: 40,
// // // //                     },
// // // //                     768: {
// // // //                         slidesPerView: 3,
// // // //                         spaceBetween: 50,
// // // //                     },
// // // //                     1024: {
// // // //                         slidesPerView: 4,
// // // //                         spaceBetween: 60,
// // // //                     },
// // // //                 }}
// // // //                 className="mySwiper"
// // // //             >
// // // //                 {logoUrls.map((url, index) => (
// // // //                     <SwiperSlide key={index}>
// // // //                         <img
// // // //                             src={url}
// // // //                             alt={`Sponsor logo ${index + 1}`}
// // // //                             className="h-24 md:h-36 w-full object-contain transition-transform duration-300 hover:scale-110"
// // // //                         />
// // // //                     </SwiperSlide>
// // // //                 ))}
// // // //             </Swiper>
// // // //         </section>
// // // //     );
// // // // };

// // // // export default Logocar;

// // import React from 'react';
// // import Slider from 'react-slick';
// // import 'slick-carousel/slick/slick.css'; // Import slick-carousel styles
// // import 'slick-carousel/slick/slick-theme.css'; // Import slick-carousel theme

// // const logoUrls = [
// //     "https://th.bing.com/th/id/OIP.bG-Cg3IqmBJsdUGKfpz2agHaEE?w=286&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
// //     "https://th.bing.com/th/id/OIP.-ChMZ2Jm_8ccPSaKqh9unwHaE7?w=289&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7",
// //     "https://th.bing.com/th/id/OIP.U6CzKWCNL_b6O3EVb4WtBgHaEY?w=278&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
// //     "https://th.bing.com/th/id/OIP.LcJcHoGqUAlo_tEJmKImXAHaEE?w=337&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
// //     "https://th.bing.com/th/id/OIP.seAzigS6_Wkj_UP-__kejgHaEa?w=252&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
// //     "https://th.bing.com/th/id/OIP.U6CzKWCNL_b6O3EVb4WtBgHaEY?w=278&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
// //     // "https://www.svgrepo.com/show/330140/chevrolet.svg",
// //     // "https://www.svgrepo.com/show/330787/kia.svg",
// //     // "https://www.svgrepo.com/show/303349/ford-1-logo.svg",
// //     // "https://www.svgrepo.com/show/303249/mercedes-benz-9-logo.svg",
// //     // "https://www.svgrepo.com/show/342292/tesla.svg",
// // ];

// // const Logocar = () => {
// //     const settings = {
// //         // dots: true,
// //         infinite: true,
// //         speed: 500,
// //         slidesToShow: 5,
// //         slidesToScroll: 1,
// //         autoplay: true,
// //         autoplaySpeed: 3000,
// //         responsive: [
// //             {
// //                 breakpoint: 1024,
// //                 settings: {
// //                     slidesToShow: 4,
// //                 }
// //             },
// //             {
// //                 breakpoint: 768,
// //                 settings: {
// //                     slidesToShow: 3,
// //                 }
// //             },
// //             {
// //                 breakpoint: 480,
// //                 settings: {
// //                     slidesToShow: 2,
// //                 }
// //             }
// //         ]
// //     };

// //     return (
// //         <section className='my-10 py-12 bg-white text-center'>
// //             <h2 className='text-4xl font-extrabold text-jordanian-red mb-12'>
// //                 الجهات المعنية والشركاء
// //             </h2>
// //             <div className='relative'>
// //                 <Slider {...settings}>
// //                     {logoUrls.map((url, index) => (
// //                         <div key={index} className='p-2'>
// //                             <img
// //                                 src={url}
// //                                 alt={`Sponsor logo ${index + 1}`}
// //                                 className='h-32 md:h-36 object-contain'
// //                             />
// //                         </div>
// //                     ))}
// //                 </Slider>
// //             </div>
// //         </section>
// //     );
// // };

// // export default Logocar;

// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; // Import slick-carousel styles
// import "slick-carousel/slick/slick-theme.css"; // Import slick-carousel theme
// import { FaUsers } from "react-icons/fa";

// const logoUrls = [
//   "https://th.bing.com/th/id/OIP.bG-Cg3IqmBJsdUGKfpz2agHaEE?w=286&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
//   "https://th.bing.com/th/id/OIP.-ChMZ2Jm_8ccPSaKqh9unwHaE7?w=289&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7",
//   "https://th.bing.com/th/id/OIP.U6CzKWCNL_b6O3EVb4WtBgHaEY?w=278&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
//   "https://th.bing.com/th/id/OIP.LcJcHoGqUAlo_tEJmKImXAHaEE?w=337&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
//   "https://th.bing.com/th/id/OIP.seAzigS6_Wkj_UP-__kejgHaEa?w=252&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
//   "https://th.bing.com/th/id/OIP.U6CzKWCNL_b6O3EVb4WtBgHaEY?w=278&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
// ];

// const Logocar = () => {
//   const settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 4,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//     ],
//   };

//   return (
//     <section className="my-10 py-12 bg-white text-center">
//       <div className="relative bg-zait1 py-20 px-12">
//         <div className="flex justify-center items-center mb-6">
//           <FaUsers className="text-4xl text-black ml-2 mb-12" />
//           <h2 className="text-4xl font-bold text-zait mb-12">شركاؤنا</h2>
//         </div>
//         <Slider {...settings}>
//           {logoUrls.map((url, index) => (
//             <div key={index} className="p-4 mx-12">
//               <div className="bg-white w-72 h-72 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
//                 <img
//                   src={url}
//                   alt={`Sponsor logo ${index + 1}`}
//                   className="w-full h-full object-contain p-4 rounded-lg"
//                 />
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// };

// export default Logocar;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Import slick-carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import slick-carousel theme
import {
  FaCalendarAlt,
  FaNewspaper,
  FaChartBar,
  FaUsers,
  FaQuestionCircle,
} from "react-icons/fa";

const logoUrls = [
  "https://th.bing.com/th/id/OIP.bG-Cg3IqmBJsdUGKfpz2agHaEE?w=286&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  "https://th.bing.com/th/id/OIP.-ChMZ2Jm_8ccPSaKqh9unwHaE7?w=289&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  "https://th.bing.com/th/id/OIP.U6CzKWCNL_b6O3EVb4WtBgHaEY?w=278&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  "https://th.bing.com/th/id/OIP.LcJcHoGqUAlo_tEJmKImXAHaEE?w=337&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  "https://th.bing.com/th/id/OIP.seAzigS6_Wkj_UP-__kejgHaEa?w=252&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  "https://th.bing.com/th/id/OIP.U6CzKWCNL_b6O3EVb4WtBgHaEY?w=278&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
];

const Logocar = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    // <section className='my-10' style={{ padding: '3rem 0', backgroundColor: 'white', overflow: 'hidden', textAlign: 'center' }}>
    //     <h2  className='text-4xl font-extrabold  text-center text-jordanian-red mb-20'>الجهات المعنيه والشركاء </h2>
    //     <div style={{ position: 'relative', width: '100%', height: '7rem' }}>
    //         <div style={{
    //             display: 'flex',
    //             flexWrap: 'nowrap',
    //             gap: '2rem',
    //             animation: 'scroll 20s linear infinite',
    //         }}>
    //             {logoUrls.concat(logoUrls).map((url, index) => (
    //                 <img
    //                     key={index}
    //                     src={url}
    //                     alt={`Sponsor logo ${index + 1}`}
    //                     style={{
    //                         height: '8rem',
    //                         flexShrink: 0,
    //                         marginRight: '2rem',
    //                     }}
    //                 />
    //             ))}
    //         </div>
    //     </div>

    <section>
      <section className="my-10 py-12 bg-white text-center ">
        <div className="relative bg-zait1 py-20">
          <div className="flex justify-center items-center mb-6">
            <FaUsers className="text-4xl text-black ml-2 mb-12" />
            <h2 className="text-4xl font-bold text-zait mb-12">شركاؤنا</h2>
          </div>
          <Slider {...settings}>
            {logoUrls.map((url, index) => (
              <div key={index} className="p-2">
                <div className="bg-white w-72 h-72 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                  <img
                    src={url}
                    alt={`Sponsor logo ${index + 1}`}
                    className="w-full h-full object-contain p-4 rounded-lg"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </section>
  );
};

export default Logocar;
